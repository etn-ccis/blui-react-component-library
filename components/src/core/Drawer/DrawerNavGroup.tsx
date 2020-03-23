import clsx from 'clsx';
import React, { ReactNode, useState } from 'react';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import { InfoListItem } from '../InfoListItem';
import {
    PXBlueDrawerNavGroupInheritableProperties,
    PXBlueDrawerInheritableProperties,
    PXBlueDrawerNavGroupInheritablePropertiesPropTypes,
} from './Drawer';
import PropTypes from 'prop-types';
import { ExpandLess, ArrowDropUp, ChevronRight } from '@material-ui/icons';
import { white, black, gray } from '@pxblue/colors';

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
        listItemContainer: {
            '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.08)',
            },
        },
        listItemNoHover: {
            '&:hover': {
                backgroundColor: 'unset',
            },
        },
        active: {
            content: '""',
            zIndex: 0,
            position: 'absolute',
            height: '100%',
            width: `calc(100% - ${theme.spacing(1)}px)`,
            left: 0,
            top: 0,
            backgroundColor:
                //@ts-ignore
                theme.palette.type === 'light' ? theme.palette.secondary[50] : theme.palette.secondary.light,
            borderRadius: '0px 24px 24px 0px',
            opacity: 0.9,
            '&$square': {
                width: '100%',
                borderRadius: 0,
            },
        },
        square: {},
        nestedListGroup: {
            backgroundColor: theme.palette.type === 'light' ? white[200] : black['A200'],
            paddingBottom: 0,
            paddingTop: 0,
        },
        expandIcon: {
            transitionDuration: '300ms',
            cursor: 'inherit',
            display: 'flex',
            height: theme.spacing(6),
            width: theme.spacing(6),
            marginRight: -12,
            alignItems: 'center',
            justifyContent: 'space-around',
            '&$expanded': {
                transform: 'rotate(180deg)',
            },
        },
        expanded: {},
        nestedTitle: {
            fontWeight: 400
        },
    })
);

export type NestedNavItem = {
    // item id to match for the active state.
    // Should be unique within the entire list. Will be used as the list key too.
    itemID: string;

    // any items listed inside this
    items?: NestedNavItem[];

    // onClick of the entire row
    onClick?: Function;

    // component to be rendered on the right next to the expandIcon
    rightComponent?: JSX.Element;

    // Status stripe color
    statusColor?: string;

    // secondary text as a hint text
    subtitle?: string;

    // text to be displayed
    title: string;
} & PXBlueDrawerInheritableProperties;

export type NavItem = NestedNavItem & {
    // icon on the left
    icon?: JSX.Element;
};

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

// renderer function for each nav item / nested nav item
function NavigationListItem(
    navItem: NavItem | NestedNavItem,
    navGroupProps: DrawerNavGroupProps,
    depth = 0,
    expanded = false,
    expandHandler = (): void => {}
): ReactNode {
    const { title: itemTitle, subtitle: itemSubtitle, items, itemID, onClick, statusColor } = navItem;

    // only allow icons for the top level items
    const icon = !depth ? (navItem as NavItem).icon : undefined;

    const defaultClasses = useStyles(navGroupProps);
    const theme = useTheme();
    // @ts-ignore
    const primary50Color = theme.palette.primary[50];
    const { activeItem, classes, nestedDivider } = navGroupProps;

    // handle inheritables
    const activeItemBackgroundColor =
        navItem.activeItemBackgroundColor ||
        navGroupProps.activeItemBackgroundColor ||
        (theme.palette.type === 'light' ? primary50Color : theme.palette.primary.main);
    const activeItemBackgroundShape =
        navItem.activeItemBackgroundShape || navGroupProps.activeItemBackgroundShape || 'round';
    const activeItemFontColor =
        navItem.activeItemFontColor ||
        navGroupProps.activeItemFontColor ||
        (theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.primary.contrastText);
    const activeItemIconColor =
        navItem.activeItemIconColor ||
        navGroupProps.activeItemIconColor ||
        (theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.primary.contrastText);
    const chevron = navItem.chevron !== undefined ? navItem.chevron : navGroupProps.chevron;
    const collapseIcon = navItem.collapseIcon || navGroupProps.collapseIcon;
    let divider;
    if (depth) {
        divider = navItem.divider !== undefined ? navItem.divider : nestedDivider !== undefined ? nestedDivider : false;
    } else {
        divider =
            navItem.divider !== undefined
                ? navItem.divider
                : navGroupProps.divider !== undefined
                ? navGroupProps.divider
                : true;
    }
    const expandIcon = navItem.expandIcon || navGroupProps.expandIcon || (depth ? <ArrowDropUp /> : <ExpandLess />);
    const hidePadding = navItem.hidePadding !== undefined ? navItem.hidePadding : navGroupProps.hidePadding;
    const itemFontColor = navItem.itemFontColor || navGroupProps.itemFontColor || gray[500];
    const itemIconColor = navItem.itemIconColor || navGroupProps.itemIconColor || gray[500];
    const onItemSelect = navItem.onItemSelect || navGroupProps.onItemSelect;
    const ripple =
        navItem.ripple !== undefined
            ? navItem.ripple
            : navGroupProps.ripple !== undefined
            ? navGroupProps.ripple
            : true;

    // row action
    const action = (): void => {
        if (onItemSelect) {
            onItemSelect();
        }
        if (onClick) {
            onClick();
        }
    };

    const rightComponent = navItem.rightComponent ? (
        navItem.rightComponent
    ) : !items && chevron ? (
        <ChevronRight />
    ) : (
        undefined
    );

    function getActionComponent(): JSX.Element {
        if (!items) {
            return null;
        }
        return (
            <div
                onClick={(e): void => {
                    if (e) {
                        expandHandler();
                    }
                }}
                className={clsx(defaultClasses.expandIcon, classes.expandIcon, {
                    [defaultClasses.expanded]: !collapseIcon && expanded,
                })}
            >
                {collapseIcon && expanded ? collapseIcon : expandIcon}
            </div>
        );
    }

    const actionComponent = getActionComponent();

    // 2 indents for top level nav items
    // 2, 4, 6, ... for secondary level and beyond
    const paddingLeft = theme.spacing(depth ? (depth - 1) * 4 + 2 : 2);

    const active = activeItem === itemID;


    const infoListClasses = {
        title: ''
    };

    if (depth !== 0) {
        infoListClasses.title = clsx(defaultClasses.nestedTitle, classes.nestedTitle);
    }

    return (
        <div
            style={{ position: 'relative' }}
            className={clsx(
                defaultClasses.listItemContainer,
                classes.listItemContainer,
                active && defaultClasses.listItemNoHover
            )}
        >
            {active && (
                <div
                    className={clsx(defaultClasses.active, classes.active, {
                        [defaultClasses.square]: activeItemBackgroundShape === 'square',
                    })}
                    style={{ backgroundColor: activeItemBackgroundColor }}
                />
            )}
            <InfoListItem
                dense
                title={itemTitle}
                subtitle={itemSubtitle}
                divider={divider ? 'full' : undefined}
                statusColor={statusColor}
                fontColor={active ? activeItemFontColor : itemFontColor}
                icon={icon}
                iconColor={active ? activeItemIconColor : itemIconColor}
                rightComponent={
                    (actionComponent || rightComponent) && (
                        <div style={{ display: 'flex', alignItems: 'center', color: itemIconColor }}>
                            {rightComponent}
                            {actionComponent}
                        </div>
                    )
                }
                backgroundColor={'transparent'}
                onClick={(): void => {
                    action();
                    if (!onClick) {
                        expandHandler();
                    }
                }}
                style={{ paddingLeft }}
                hidePadding={hidePadding}
                ripple={ripple}
                classes={infoListClasses}
            />
        </div>
    );
}

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

type DrawerNavGroupClasses = {
    active?: string;
    expandIcon?: string;
    groupHeader?: string;
    listItemContainer?: string;
    nestedListGroup?: string;
    subheader?: string;
    nestedTitle?: string;
};

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
                        {NavigationListItem(item, props, depth, expanded, () => {
                            setExpanded(!expanded);
                        })}
                    </div>
                    {collapsibleComponent}
                </React.Fragment>
            );
        }
        // Otherwise, we reached a leaf node. Return.
        return <div key={`${item.itemID}`}>{NavigationListItem(item, props, depth, expanded)}</div>;
    }

    return (
        <>
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
        </>
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
