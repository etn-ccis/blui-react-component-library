import clsx from 'clsx';
import React, { ReactNode, useState } from 'react';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import List, { ListProps } from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import PropTypes from 'prop-types';
import { BluiDrawerNavGroupInheritableProperties, BluiDrawerNavGroupInheritablePropertiesPropTypes } from './Drawer';
import { white, darkBlack } from '@brightlayer-ui/colors';
import { DrawerNavItem, NavItem, NestedNavItem } from './DrawerNavItem';

export type DrawerNavGroupProps = ListProps & {
    // internal API
    backgroundColor?: string;

    classes?: DrawerNavGroupClasses;

    // internal API
    drawerOpen?: boolean;

    // List of navigation items to render
    items: NavItem[];

    // Text to display in the group header
    title?: string;

    // Custom element, substitute for title
    titleContent?: ReactNode;
} & BluiDrawerNavGroupInheritableProperties;

type DrawerNavGroupClasses = {
    active?: string;
    expandIcon?: string;
    groupHeader?: string;
    listGroup?: string;
    listItemContainer?: string;
    nestedListGroup?: string;
    subheader?: string;
    nestedTitle?: string;
};
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        groupHeader: {
            display: 'block',
            alignItems: 'center',
            lineHeight: '3rem',
            height: theme.spacing(6),
            fontWeight: 600,
        },
        subheader: {
            paddingBottom: 0,
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            position: 'inherit',
            cursor: 'text',
            [theme.breakpoints.down('xs')]: {
                paddingLeft: theme.spacing(3),
                paddingRight: theme.spacing(3),
            },
        },
        nestedListGroup: {
            backgroundColor: (props: DrawerNavGroupProps): string =>
                props.nestedBackgroundColor || (theme.palette.type === 'light' ? white[200] : darkBlack[100]),
            paddingBottom: 0,
            paddingTop: 0,
        },
        listGroup: {
            backgroundColor: (props: DrawerNavGroupProps): string => props.backgroundColor,
            paddingBottom: 0,
        },
    })
);

const findID = (item: NavItem | NestedNavItem, activeItem: string): boolean => {
    // if leaf node, return
    if (!item.items) {
        return item.itemID === activeItem;
    }

    // else, loop through the branches
    for (let i = 0; i < item.items.length; i++) {
        if (findID(item.items[i], activeItem)) {
            return true;
        }
    }

    // no active items found, return false
    return false;
};

const DrawerNavGroupRender: React.ForwardRefRenderFunction<unknown, DrawerNavGroupProps> = (
    props: DrawerNavGroupProps,
    ref: any
) => {
    const defaultClasses = useStyles(props);
    const theme = useTheme();
    const {
        classes,
        drawerOpen,
        items,
        title,
        titleColor = theme.palette.text.primary,
        titleContent,
        activeItem,
        // ignore unused vars so that we can do prop transferring to the root element
        /* eslint-disable @typescript-eslint/no-unused-vars */
        backgroundColor,
        activeItemBackgroundColor,
        activeItemBackgroundShape,
        activeItemFontColor,
        activeItemIconColor,
        chevron,
        collapseIcon,
        divider,
        expandIcon,
        hidePadding,
        InfoListItemProps,
        itemFontColor,
        itemIconColor,
        nestedBackgroundColor,
        nestedDivider,
        onItemSelect,
        ripple,
        /* eslint-enable @typescript-eslint/no-unused-vars */
        ...otherListProps
    } = props;

    const open = drawerOpen !== undefined ? drawerOpen : true; // so that DrawerNavGroup can be placed in a <Card />

    return (
        <List
            ref={ref}
            className={clsx(defaultClasses.listGroup, classes.listGroup)}
            subheader={
                <ListSubheader
                    className={clsx(defaultClasses.subheader, classes.subheader)}
                    style={{
                        color: open ? titleColor : 'transparent',
                    }}
                >
                    {title && (
                        <Typography
                            noWrap
                            variant={'subtitle2'}
                            className={clsx(defaultClasses.groupHeader, classes.groupHeader)}
                        >
                            {title}
                        </Typography>
                    )}
                    {titleContent}
                </ListSubheader>
            }
            {...otherListProps}
        >
            <div key={`${title}_title`}>{(title || titleContent) && <Divider />}</div>
            {items.map((item: NavItem, index: number) => (
                <DrawerItemList
                    key={`itemList_${index}`}
                    item={item}
                    depth={0}
                    drawerOpen={open}
                    defaultClasses={defaultClasses}
                    classes={classes}
                    groupProps={props}
                    activeItem={activeItem}
                />
            ))}
        </List>
    );
};
export const DrawerNavGroup = React.forwardRef(DrawerNavGroupRender);
DrawerNavGroup.displayName = 'DrawerNavGroup';
DrawerNavGroup.propTypes = {
    backgroundColor: PropTypes.string,
    classes: PropTypes.shape({
        active: PropTypes.string,
        expandIcon: PropTypes.string,
        groupHeader: PropTypes.string,
        listGroup: PropTypes.string,
        listItemContainer: PropTypes.string,
        nestedListGroup: PropTypes.string,
        subheader: PropTypes.string,
        nestedTitle: PropTypes.string,
    }),
    drawerOpen: PropTypes.bool,
    // @ts-ignore
    items: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.element,
            itemID: PropTypes.string.isRequired,
            subtitle: PropTypes.string,
            title: PropTypes.string.isRequired,
            onClick: PropTypes.func,
            rightComponent: PropTypes.element,
            statusColor: PropTypes.string,
        })
    ).isRequired,
    ...BluiDrawerNavGroupInheritablePropertiesPropTypes,
};
DrawerNavGroup.defaultProps = {
    classes: {},
};

/**
 * DrawerItemList sub-component
 */
export type DrawerItemListProps = {
    item: NavItem | NestedNavItem;
    depth: number;
    drawerOpen: boolean;
    activeItem: string;
    defaultClasses: Record<'groupHeader' | 'subheader' | 'nestedListGroup' | 'listGroup', string>;
    classes: DrawerNavGroupClasses;
    groupProps: DrawerNavGroupProps;
};

// recursively loop through item list and the subItems
const DrawerItemList: React.FC<DrawerItemListProps> = (props) => {
    const { item, depth, drawerOpen, activeItem, defaultClasses, classes, groupProps } = props;
    const [expanded, setExpanded] = useState(findID(item, activeItem));

    if (item.items) {
        // if there are more sub pages, add the bucket header and recurse on this function
        const collapsibleComponent = (
            <Collapse in={expanded && drawerOpen !== false} key={`${item.title}_group_${depth}`}>
                <List className={clsx(defaultClasses.nestedListGroup, classes.nestedListGroup)}>
                    {item.items.map((subItem: NavItem, index: number) => (
                        <DrawerItemList
                            key={`itemList_${index}`}
                            item={subItem}
                            depth={depth + 1}
                            drawerOpen={drawerOpen}
                            defaultClasses={defaultClasses}
                            classes={classes}
                            groupProps={groupProps}
                            activeItem={activeItem}
                        />
                    ))}
                </List>
            </Collapse>
        );

        return (
            <React.Fragment key={`${item.title}_Fragment_${depth}`}>
                <DrawerNavItem
                    key={`${item.itemID}`}
                    navItem={item}
                    navGroupProps={groupProps}
                    depth={depth}
                    expanded={expanded}
                    expandHandler={item.items ? (): void => setExpanded(!expanded) : undefined}
                />
                {collapsibleComponent}
            </React.Fragment>
        );
    }
    // Otherwise, we reached a leaf node. Return.
    return (
        <DrawerNavItem
            key={`${item.itemID}`}
            navItem={item}
            navGroupProps={groupProps}
            depth={depth}
            expanded={expanded}
        />
    );
};
