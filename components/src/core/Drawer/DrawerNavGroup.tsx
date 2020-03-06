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
        navGroupTextHeader: {
            display: 'block',
            alignItems: 'center',
            lineHeight: '3rem',
            height: theme.spacing(6),
            fontWeight: 600,
        },
        subheader: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            cursor: 'text',
            [theme.breakpoints.down('xs')]: {
                paddingLeft: theme.spacing(3),
                paddingRight: theme.spacing(3),
            },
        },
        listItem: {
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

    // Whether to apply material ripple effect to items
    ripple?: boolean;

    // Status stripe.
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
    activeBackgroundShape?: 'rounded' | 'square';

    // The color used for the background
    backgroundColor?: string;

    // Whether to have chevrons for all menu items
    chevron?: boolean;

    // Icon used to collapse drawer
    // Overriden by NavItem.expandIcon
    collapseIcon?: JSX.Element;

    // Whether to show a line between all items
    divider?: boolean;

    // Icon used to expand drawer
    // Overriden by NavItem.expandIcon
    expandIcon?: JSX.Element;

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

    // Custom element, substitute for title
    titleContent?: ReactNode;
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
        collapseIcon: itemCollapseIcon,
        expandIcon: itemExpandIcon,
        statusColor,
    } = navItem;
    const icon = (navItem as NavItem).icon;
    const { divider: groupDivider = true, nestedDivider } = navGroupProps;

    const classes = useStyles(navGroupProps);
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
        expandIcon: groupExpandIcon,
        collapseIcon: groupCollapseIcon,
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

    const collapseIcon = itemCollapseIcon ? itemCollapseIcon : groupCollapseIcon;

    function getExpandIcon(): JSX.Element {
        if (itemExpandIcon) {
            return itemExpandIcon;
        }
        if (groupExpandIcon) {
            return groupExpandIcon;
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
                className={`${classes.expandIcon} ${!collapseIcon && expanded ? classes.expanded : ''}`}
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

    return (
        <div style={{ position: 'relative' }} className={`${classes.listItem} ${active && classes.listItemNoHover}`}>
            {active && (
                <div
                    className={`${classes.active} ${activeBackgroundShape === 'square' ? classes.square : ''}`}
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

export const DrawerNavGroup: React.FC<DrawerNavGroupProps> = (props) => {
    const classes = useStyles(props);
    const { open, items, title, titleContent, backgroundColor, titleColor } = props;

    // recursively loop through item list and the subItems
    function getDrawerItemList(item: NavItem | NestedNavItem, depth: number): JSX.Element {
        const [expanded, setExpanded] = useState(findID(item, props.activeItem));

        if (item.items) {
            // if there are more sub pages, add the bucket header and recurse on this function
            const collapsibleComponent = (
                <Collapse in={expanded && open !== false} key={`${item.title}_group_${depth}`}>
                    <List className={classes.secondaryLevelListGroup}>
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
                style={{ paddingBottom: '0', backgroundColor }}
                subheader={
                    <ListSubheader
                        className={classes.subheader}
                        style={{
                            position: 'unset',
                            color: open ? titleColor : 'transparent',
                        }}
                    >
                        {title && (
                            <Typography noWrap variant={'subtitle2'} className={classes.navGroupTextHeader}>
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
    activeBackgroundColor: PropTypes.string,
    activeFontColor: PropTypes.string,
    activeIconColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    chevron: PropTypes.bool,
    collapseIcon: PropTypes.element,
    divider: PropTypes.bool,
    expandIcon: PropTypes.element,
    fontColor: PropTypes.string,
    iconColor: PropTypes.string,
    // @ts-ignore
    items: PropTypes.arrayOf(
        PropTypes.shape({
            chevron: PropTypes.bool,
            collapseIcon: PropTypes.element,
        })
    ).isRequired,
    onSelect: PropTypes.func,
    open: PropTypes.bool,
    ripple: PropTypes.bool,
    title: PropTypes.string,
    titleColor: PropTypes.string,
    titleContent: PropTypes.element,
};

DrawerNavGroup.defaultProps = {
    activeBackgroundShape: 'rounded',
};
