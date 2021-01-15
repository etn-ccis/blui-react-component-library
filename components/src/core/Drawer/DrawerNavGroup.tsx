import clsx from 'clsx';
import React, { ReactNode, useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import List, { ListProps } from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import PropTypes from 'prop-types';
import {
    PXBlueDrawerNavGroupInheritableProperties,
    PXBlueDrawerNavGroupInheritablePropertiesPropTypes,
} from './Drawer';
import { white, darkBlack } from '@pxblue/colors';
import { DrawerNavItem, NavItem, NestedNavItem } from './DrawerNavItem';
import { useDrawerContext } from './DrawerContext';
import { DrawerRailItem } from './DrawerRailItem';

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
} & PXBlueDrawerNavGroupInheritableProperties;

type DrawerNavGroupClasses = {
    active?: string;
    expandIcon?: string;
    groupHeader?: string;
    listGroup?: string;
    listItemContainer?: string;
    nestedListGroup?: string;
    subheader?: string;
    title?: string;
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
            paddingTop: 0,
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
        disableActiveItemParentStyles,
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
        ButtonBaseProps,
        itemFontColor,
        itemIconColor,
        nestedBackgroundColor,
        nestedDivider,
        onItemSelect,
        ripple,
        /* eslint-enable @typescript-eslint/no-unused-vars */
        ...otherListProps
    } = props;

    const { variant, condensed } = useDrawerContext();

    /* Keeps track of which group of IDs are in the 'active hierarchy' */
    const [activeHierarchyItems, setActiveHierarchyItems] = useState<string[]>([]);

    /* Clear the active hierarchy array if the new active Item cannot be found in the tree */
    useEffect(() => {
        if (!findID({ items: props.items } as NavItem, activeItem)) setActiveHierarchyItems([]);
    }, [activeItem]);

    const open = drawerOpen !== undefined ? drawerOpen : true; // so that DrawerNavGroup can be placed in a <Card />

    return (
        <List
            ref={ref}
            className={clsx(defaultClasses.listGroup, classes.listGroup)}
            subheader={
                variant !== 'rail' && (
                    <ListSubheader
                        className={clsx(defaultClasses.subheader, classes.subheader)}
                        style={{
                            color: open ? titleColor : 'transparent',
                        }}
                    >
                        {title && (
                            <Typography
                                noWrap
                                variant={'overline'}
                                className={clsx(defaultClasses.groupHeader, classes.groupHeader)}
                            >
                                {title}
                            </Typography>
                        )}
                        {titleContent}
                    </ListSubheader>
                )
            }
            {...otherListProps}
        >
            {variant !== 'rail' && <div key={`${title}_title`}>{(title || titleContent) && <Divider />}</div>}
            {items.map((item: NavItem, index: number) =>
                variant === 'rail' ? (
                    <DrawerRailItem
                        key={`itemList_${index}`}
                        // inherited props
                        activeItemBackgroundColor={item.activeItemBackgroundColor || props.activeItemBackgroundColor}
                        activeItemFontColor={item.activeItemFontColor || props.activeItemFontColor}
                        activeItemIconColor={item.activeItemIconColor || props.activeItemIconColor}
                        divider={item.divider !== undefined ? item.divider : props.divider}
                        itemFontColor={item.itemFontColor || props.itemFontColor}
                        itemIconColor={item.itemIconColor || props.itemIconColor}
                        onItemSelect={item.onItemSelect ? item.onItemSelect : props.onItemSelect}
                        ripple={item.ripple !== undefined ? item.ripple : props.ripple}
                        ButtonBaseProps={
                            item.ButtonBaseProps !== undefined ? item.ButtonBaseProps : props.ButtonBaseProps
                        }
                        // rail item props
                        activeItem={activeItem}
                        condensed={condensed}
                        hidden={item.hidden}
                        icon={item.icon}
                        itemID={item.itemID}
                        onClick={item.onClick}
                        statusColor={item.statusColor}
                        title={item.title}
                        classes={classes}
                    />
                ) : (
                    <DrawerItemList
                        key={`itemList_${index}`}
                        item={item}
                        depth={0}
                        drawerOpen={open}
                        defaultClasses={defaultClasses}
                        disableActiveItemParentStyles={disableActiveItemParentStyles}
                        classes={classes}
                        groupProps={props}
                        activeItem={activeItem}
                        notifyActiveParent={(ids: string[]): void => {
                            if (JSON.stringify(activeHierarchyItems) !== JSON.stringify(ids)) {
                                // Sets the list of active IDs when we get a callback from an active child
                                setActiveHierarchyItems(ids);
                            }
                        }}
                        activeIDs={activeHierarchyItems}
                    />
                )
            )}
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
    ...PXBlueDrawerNavGroupInheritablePropertiesPropTypes,
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
    defaultClasses: DrawerNavGroupClasses;
    disableActiveItemParentStyles?: boolean;
    classes: DrawerNavGroupClasses;
    groupProps: DrawerNavGroupProps;
    notifyActiveParent: (ids: string[]) => void;
    activeIDs: string[];
};

// recursively loop through item list and the subItems
const DrawerItemList: React.FC<DrawerItemListProps> = (props) => {
    const {
        item,
        depth,
        disableActiveItemParentStyles,
        drawerOpen,
        activeItem,
        defaultClasses,
        notifyActiveParent,
        activeIDs,
        classes,
        groupProps,
    } = props;
    const [expanded, setExpanded] = useState(findID(item, activeItem));

    // Is this item ID in the list of items in the active selection hierarchy?
    const activeInTree = !disableActiveItemParentStyles && activeIDs.includes(item.itemID);
    // When the activeItem changes, update our expanded state
    useEffect(() => {
        if (activeInTree && !expanded) setExpanded(true);
    }, [activeInTree]);

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
                            disableActiveItemParentStyles={disableActiveItemParentStyles}
                            classes={classes}
                            groupProps={groupProps}
                            activeItem={activeItem}
                            notifyActiveParent={(ids: string[] = []): void =>
                                notifyActiveParent(ids.concat(item.itemID))
                            }
                            activeIDs={activeIDs}
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
                    isInActiveTree={activeInTree}
                    navGroupProps={groupProps}
                    depth={depth}
                    expanded={expanded}
                    expandHandler={item.items ? (): void => setExpanded(!expanded) : undefined}
                    notifyActiveParent={(ids: string[] = []): void => notifyActiveParent(ids.concat(item.itemID))}
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
            isInActiveTree={activeInTree}
            navGroupProps={groupProps}
            depth={depth}
            expanded={expanded}
            notifyActiveParent={(ids: string[] = []): void => notifyActiveParent(ids.concat(item.itemID))}
        />
    );
};
