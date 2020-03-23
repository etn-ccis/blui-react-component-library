import clsx from 'clsx';
import React, { ReactNode, useState } from 'react';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import {
    PXBlueDrawerNavGroupInheritableProperties,
    PXBlueDrawerNavGroupInheritablePropertiesPropTypes,
} from './Drawer';
import PropTypes from 'prop-types';
import { white, black } from '@pxblue/colors';
import { DrawerNavItem, NavItem, NestedNavItem } from './DrawerNavItem';

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
            cursor: 'text',
            [theme.breakpoints.down('xs')]: {
                paddingLeft: theme.spacing(3),
                paddingRight: theme.spacing(3),
            },
        },
        nestedListGroup: {
            backgroundColor: theme.palette.type === 'light' ? white[200] : black['A200'],
            paddingBottom: 0,
            paddingTop: 0,
        },
    })
);

export type DrawerNavGroupProps = {
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
    listItemContainer?: string;
    nestedListGroup?: string;
    subheader?: string;
    nestedTitle?: string;
};

function findID(item: NavItem | NestedNavItem, activeItem: string): boolean {
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
}

export const DrawerNavGroup: React.FC<DrawerNavGroupProps> = (props) => {
    const defaultClasses = useStyles(props);
    const theme = useTheme();
    const {
        classes,
        drawerOpen,
        items,
        title,
        titleContent,
        backgroundColor,
        titleColor = theme.palette.text.primary,
        nestedBackgroundColor,
    } = props;

    const open = drawerOpen !== undefined ? drawerOpen : true; // so that DrawerNavGroup can be placed in a <Card />

    // recursively loop through item list and the subItems
    function getDrawerItemList(item: NavItem | NestedNavItem, depth: number): JSX.Element {
        const [expanded, setExpanded] = useState(findID(item, props.activeItem));

        if (item.items) {
            // if there are more sub pages, add the bucket header and recurse on this function
            const collapsibleComponent = (
                <Collapse in={expanded && open !== false} key={`${item.title}_group_${depth}`}>
                    <List
                        className={clsx(defaultClasses.nestedListGroup, classes.nestedListGroup)}
                        style={{ backgroundColor: nestedBackgroundColor }}
                    >
                        {item.items.map((subItem: NavItem) => getDrawerItemList(subItem, depth + 1))}
                    </List>
                </Collapse>
            );

            return (
                <React.Fragment key={`${item.title}_Fragment_${depth}`}>
                    <div key={`${item.itemID}`}>
                        <DrawerNavItem
                            navItem={item}
                            navGroupProps={props}
                            depth={depth}
                            expanded={expanded}
                            expandHandler={(): void => {
                                setExpanded(!expanded);
                            }}
                        />
                    </div>
                    {collapsibleComponent}
                </React.Fragment>
            );
        }
        // Otherwise, we reached a leaf node. Return.
        return (
            <div key={`${item.itemID}`}>
                <DrawerNavItem navItem={item} navGroupProps={props} depth={depth} expanded={expanded} />
            </div>
        );
    }

    return (
        <List
            style={{ backgroundColor, paddingBottom: 0 }}
            subheader={
                <ListSubheader
                    className={clsx(defaultClasses.subheader, classes.subheader)}
                    style={{
                        position: 'unset',
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
        >
            <div key={`${title}_title`}>{(title || titleContent) && <Divider />}</div>
            {items.map((item: NavItem) => getDrawerItemList(item, 0))}
        </List>
    );
};

DrawerNavGroup.displayName = 'DrawerNavGroup';

DrawerNavGroup.propTypes = {
    backgroundColor: PropTypes.string,
    classes: PropTypes.shape({
        active: PropTypes.string,
        expandIcon: PropTypes.string,
        listItemContainer: PropTypes.string,
        groupHeader: PropTypes.string,
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
    ...PXBlueDrawerNavGroupInheritablePropertiesPropTypes,
};

DrawerNavGroup.defaultProps = {
    classes: {},
};
