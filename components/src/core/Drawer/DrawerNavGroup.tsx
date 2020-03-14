import React, { ReactNode, useState } from 'react';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import { InfoListItem } from '../InfoListItem';
import {
    PXBlueDrawerInheritableGroupProperties,
    PXBlueDrawerInheritableProperties,
    PXBlueDrawerInheritableGroupPropertiesPropTypes,
} from './Drawer';
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
    itemSubtitle?: string;

    // text to be displayed
    itemTitle: string;
} & PXBlueDrawerInheritableProperties;

export type NavItem = NestedNavItem & {
    // icon on the left
    itemIcon?: JSX.Element;
};

export type DrawerNavGroupProps = {
    // internal API
    backgroundColor?: string;

    // List of navigation items to render
    items: NavItem[];

    // Text to display in the group header
    groupTitle?: string;

    // Custom element, substitute for title
    groupTitleContent?: ReactNode;
} & PXBlueDrawerInheritableGroupProperties;

// renderer function for each nav item / nested nav item
function NavigationListItem(
    navItem: NavItem | NestedNavItem,
    navGroupProps: DrawerNavGroupProps,
    depth = 0,
    expanded = false,
    expandHandler = (): void => {}
): ReactNode {
    const {
        // inheritables
        activeItemBackgroundColor: item_activeItemBackgroundColor,
        activeItemFontColor: item_activeItemFontColor,
        activeItemIconColor: item_activeItemIconColor,
        activeItemBackgroundShape: item_activeItemBackgroundShape,
        chevron: item_chevron,
        collapseIcon: item_collapseIcon,
        divider: item_divider,
        expandIcon: item_expandIcon,
        hidePadding: item_hidePadding,
        itemFontColor: item_itemFontColor,
        itemIconColor: item_itemIconColor,
        ripple: item_ripple,
        // non inheritables
        itemTitle,
        itemSubtitle,
        items,
        itemID,
        onClick,
        statusColor,
    } = navItem;
    const icon = (navItem as NavItem).itemIcon;

    const classes = useStyles(navGroupProps);
    const theme = useTheme();
    // @ts-ignore
    const primary50Color = theme.palette.primary[50];
    const {
        // inheritble
        activeItemBackgroundColor: group_activeItemBackgroundColor,
        activeItemFontColor: group_activeItemFontColor,
        activeItemIconColor: group_activeItemIconColor,
        activeItemBackgroundShape: group_activeItemBackgroundShape,
        chevron: group_chevron,
        collapseIcon: group_collapseIcon,
        divider: group_divider,
        expandIcon: group_expandIcon,
        hidePadding: group_hidePadding,
        itemFontColor: group_itemFontColor,
        itemIconColor: group_itemIconColor,
        ripple: group_ripple,
        // non inheritable
        activeItem,
        nestedDivider,
        onSelect,
    } = navGroupProps;

    // handle inheritables
    const activeItemBackgroundColor =
        item_activeItemBackgroundColor ||
        group_activeItemBackgroundColor ||
        (theme.palette.type === 'light' ? primary50Color : theme.palette.primary.main);
    const activeItemFontColor =
        item_activeItemFontColor ||
        group_activeItemFontColor ||
        (theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.primary.contrastText);
    const activeItemIconColor =
        item_activeItemIconColor ||
        group_activeItemIconColor ||
        (theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.primary.contrastText);
    const activeItemBackgroundShape = item_activeItemBackgroundShape || group_activeItemBackgroundShape || 'round';
    const chevron = item_chevron !== undefined ? item_chevron : group_chevron;
    const collapseIcon = item_collapseIcon || group_collapseIcon;
    let divider;
    if (depth) {
        divider = item_divider !== undefined ? item_divider : nestedDivider !== undefined ? nestedDivider : false;
    } else {
        divider = item_divider !== undefined ? item_divider : group_divider;
    }
    const expandIcon = item_expandIcon || group_expandIcon || (depth ? <ArrowDropUp /> : <ExpandLess />);
    const hidePadding = item_hidePadding !== undefined ? item_hidePadding : group_hidePadding;
    const itemFontColor = item_itemFontColor || group_itemFontColor || gray[500];
    const itemIconColor = item_itemIconColor || group_itemIconColor || gray[500];
    const ripple = item_ripple !== undefined ? item_ripple : group_ripple !== undefined ? group_ripple : true;

    // row action
    const action = (): void => {
        if (onSelect) {
            onSelect();
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
                className={`${classes.expandIcon} ${!collapseIcon && expanded ? classes.expanded : ''}`}
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

    return (
        <div style={{ position: 'relative' }} className={`${classes.listItem} ${active && classes.listItemNoHover}`}>
            {active && (
                <div
                    className={`${classes.active} ${activeItemBackgroundShape === 'square' ? classes.square : ''}`}
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
                    if (!onClick) expandHandler();
                }}
                style={{ paddingLeft }}
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
    const { open, items, groupTitle: title, groupTitleContent: titleContent, backgroundColor, titleColor } = props;

    // recursively loop through item list and the subItems
    function getDrawerItemList(item: NavItem | NestedNavItem, depth: number): JSX.Element {
        const [expanded, setExpanded] = useState(findID(item, props.activeItem));

        if (item.items) {
            // if there are more sub pages, add the bucket header and recurse on this function
            const collapsibleComponent = (
                <Collapse in={expanded && open !== false} key={`${item.itemTitle}_group_${depth}`}>
                    <List className={classes.secondaryLevelListGroup}>
                        {item.items.map((subItem: NavItem) => getDrawerItemList(subItem, depth + 1))}
                    </List>
                </Collapse>
            );

            return (
                <React.Fragment key={`${item.itemTitle}_Fragment_${depth}`}>
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
    backgroundColor: PropTypes.string,
    // @ts-ignore
    items: PropTypes.arrayOf(
        PropTypes.shape({
            itemIcon: PropTypes.element,
            itemID: PropTypes.string.isRequired,
            itemSubtitle: PropTypes.string,
            itemTitle: PropTypes.string.isRequired,
            onClick: PropTypes.func,
            rightComponent: PropTypes.element,
            statusColor: PropTypes.string,
        })
    ).isRequired,
    ...PXBlueDrawerInheritableGroupPropertiesPropTypes,
};
