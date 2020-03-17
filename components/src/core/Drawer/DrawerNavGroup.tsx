import clsx from 'clsx';
import React, { ReactNode, useState } from 'react';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import { InfoListItem } from '../InfoListItem';
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
        secondaryLevelListGroup: {
            backgroundColor: theme.palette.type === 'light' ? white[200] : black['A200'],
            paddingBottom: 0,
            paddingTop: 0,
        },
        expandIcon: {
            transitionDuration: '300ms',
            cursor: 'inherit',
            display: 'flex',
            height: 48,
            width: 48,
            marginRight: -12,
            alignItems: 'center',
            justifyContent: 'space-around',
            '&$expanded': {
                transform: 'rotate(180deg)',
            },
        },
        expanded: {},
    })
);

export type NestedNavItem = {
    // Show chevron icon to the right. Override by icon
    chevron?: boolean;

    // icon used to collapse drawer
    collapseIcon?: JSX.Element;

    // if the item has a divider under its content
    divider?: boolean;

    // icon used to expand drawer
    expandIcon?: JSX.Element;

    // any items listed inside this
    items?: NestedNavItem[];

    // item id to match for the active state.
    // Should be unique within the entire list. Will be used as the list key too.
    itemID: string;

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
};

export type NavItem = NestedNavItem & {
    // icon on the left
    icon?: JSX.Element;
};

export type DrawerNavGroupProps = {
    // Background color for the 'active' item
    activeBackgroundColor?: string;

    // Font color for the 'active' item
    activeFontColor?: string;

    // Icon color for the 'active' item
    activeIconColor?: string;

    // itemID for the 'active' item
    activeItem?: string;

    // shape of the active item background
    activeBackgroundShape?: 'round' | 'square';

    // The color used for the background
    backgroundColor?: string;

    // Whether to have chevrons for all menu items
    chevron?: boolean;

    // Class overrides
    classes?: DrawerNavGroupClasses;

    // Custom element, substitute for title
    titleContent?: ReactNode;

    // Whether to show a line between all items
    divider?: boolean;

    // The color used for the text
    fontColor?: string;

    // Whether to hide the paddings reserved for menu item icons
    hidePadding?: boolean;

    // The color used for the icon
    iconColor?: string;

    // List of navigation items to render
    items: NavItem[];

    // Whether to show a line between nested menu items
    nestedDivider?: boolean;

    // internal API
    // will apply to all menu items when onClick
    onSelect?: Function;

    // Whether the group is expanded
    // Controlled by <DrawerBody />
    open?: boolean;

    // Whether to apply material ripple effect to items
    ripple?: boolean;

    // Text to display in the group header
    title?: string;

    // Font color for group header
    titleColor?: string;
};

// renderer function for each nav item / nested nav item
function NavigationListItem(
    navItem: NavItem | NestedNavItem,
    navGroupProps: DrawerNavGroupProps,
    depth = 0,
    expanded = false,
    expandHandler = (): void => {}
): ReactNode {
    const {
        onClick,
        title,
        subtitle,
        items: subItems,
        divider: itemDivider,
        itemID,
        chevron: itemChevron,
        collapseIcon,
        expandIcon,
    } = navItem;
    // only allow icons for the top level items
    const icon = !depth ? (navItem as NavItem).icon : undefined;
    const { classes, divider: groupDivider = true, nestedDivider } = navGroupProps;

    const defaultClasses = useStyles(navGroupProps);
    const theme = useTheme();
    // @ts-ignore
    const primary50Color = theme.palette.primary[50];
    const {
        activeBackgroundColor = theme.palette.type === 'light' ? primary50Color : theme.palette.primary.main,
        activeFontColor = theme.palette.type === 'light'
            ? theme.palette.primary.main
            : theme.palette.primary.contrastText,
        activeIconColor = theme.palette.type === 'light'
            ? theme.palette.primary.main
            : theme.palette.primary.contrastText,
        fontColor = gray[500],
        chevron: groupChevron,
        iconColor = gray[500],
        onSelect,
        hidePadding,
        ripple,
        activeItem,
        activeBackgroundShape,
    } = navGroupProps;

    let divider;
    if (depth) {
        divider = itemDivider !== undefined ? itemDivider : nestedDivider !== undefined ? nestedDivider : false;
    } else {
        divider = itemDivider !== undefined ? itemDivider : groupDivider;
    }

    const action = (): void => {
        if (onSelect) {
            onSelect();
        }
        if (onClick) {
            onClick();
        }
    };

    const chevron = itemChevron !== undefined ? itemChevron : groupChevron;

    const rightComponent = navItem.rightComponent ? (
        navItem.rightComponent
    ) : !subItems && chevron ? (
        <ChevronRight />
    ) : (
        undefined
    );

    function getExpandIcon(): JSX.Element {
        if (expandIcon) {
            return expandIcon;
        }
        if (depth) {
            return <ArrowDropUp />;
        }
        return <ExpandLess />;
    }

    function getActionComponent(): JSX.Element {
        if (!subItems) {
            return null;
        }
        return (
            <div
                onClick={(e): void => {
                    if (e) {
                        expandHandler();
                    }
                }}
                className={`${defaultClasses.expandIcon} ${!collapseIcon && expanded ? defaultClasses.expanded : ''}`}
            >
                {collapseIcon && expanded ? collapseIcon : getExpandIcon()}
            </div>
        );
    }

    const actionComponent = getActionComponent();

    // 2 indents for top level nav items
    // 2, 4, 6, ... for secondary level and beyond
    const paddingLeft = theme.spacing(depth ? (depth - 1) * 4 + 2 : 2);

    const active = activeItem === itemID;

    const statusColor = (navItem as NavItem).statusColor;

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
                    className={`${defaultClasses.active} ${
                        activeBackgroundShape === 'square' ? defaultClasses.square : ''
                    }`}
                    style={{ backgroundColor: activeBackgroundColor }}
                />
            )}
            <InfoListItem
                dense
                title={title}
                subtitle={subtitle}
                divider={divider ? 'full' : undefined}
                statusColor={statusColor}
                fontColor={active ? activeFontColor : fontColor}
                icon={icon}
                iconColor={active ? activeIconColor : iconColor}
                rightComponent={
                    (actionComponent || rightComponent) && (
                        <div style={{ display: 'flex', alignItems: 'center', color: iconColor }}>
                            {rightComponent}
                            {actionComponent}
                        </div>
                    )
                }
                backgroundColor={'transparent'}
                onClick={(): void => {
                    action();
                    if (!onClick) expandHandler();
                }}
                style={{ paddingLeft: paddingLeft }}
                hidePadding={hidePadding}
                ripple={ripple}
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
    groupHeader?: string;
    listItemContainer?: string;
    secondaryLevelListGroup?: string;
    subheader?: string;
};

export const DrawerNavGroup: React.FC<DrawerNavGroupProps> = (props) => {
    const defaultClasses = useStyles(props);
    const { backgroundColor, classes, items, open, title, titleContent, titleColor } = props;

    // recursively loop through item list and the subItems
    function getDrawerItemList(item: NavItem | NestedNavItem, depth: number): JSX.Element {
        const [expanded, setExpanded] = useState(findID(item, props.activeItem));

        if (item.items) {
            // if there are more sub pages, add the bucket header and recurse on this function
            const collapsibleComponent = (
                <Collapse in={expanded && open !== false} key={`${item.title}_group_${depth}`}>
                    <List className={clsx(defaultClasses.secondaryLevelListGroup, classes.secondaryLevelListGroup)}>
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
                style={{ backgroundColor }}
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

const NestedNavItemPropTypes = {
    chevron: PropTypes.bool,
    collapseIcon: PropTypes.element,
    divider: PropTypes.bool,
    expandIcon: PropTypes.element,
    itemID: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    rightComponent: PropTypes.element,
    statusColor: PropTypes.string,
    subtitle: PropTypes.string,
    title: PropTypes.string.isRequired,
};

DrawerNavGroup.propTypes = {
    activeBackgroundColor: PropTypes.string,
    activeFontColor: PropTypes.string,
    activeIconColor: PropTypes.string,
    activeItem: PropTypes.string,
    activeBackgroundShape: PropTypes.oneOf(['round', 'square']),
    backgroundColor: PropTypes.string,
    chevron: PropTypes.bool,
    classes: PropTypes.shape({
        listItemContainer: PropTypes.string,
        groupHeader: PropTypes.string,
        secondaryLevelListGroup: PropTypes.string,
        subheader: PropTypes.string,
    }),
    titleContent: PropTypes.node,
    fontColor: PropTypes.string,
    hidePadding: PropTypes.bool,
    iconColor: PropTypes.string,
    // @ts-ignore
    items: PropTypes.arrayOf(
        PropTypes.shape({
            items: PropTypes.arrayOf(PropTypes.shape(NestedNavItemPropTypes)),
            icon: PropTypes.element,
            ...NestedNavItemPropTypes,
        })
    ).isRequired,
    onSelect: PropTypes.func,
    open: PropTypes.bool,
    ripple: PropTypes.bool,
    title: PropTypes.string,
    titleColor: PropTypes.string,
    divider: PropTypes.bool,
};

DrawerNavGroup.defaultProps = {
    activeBackgroundShape: 'round',
    classes: {},
    divider: true,
    ripple: true,
};
