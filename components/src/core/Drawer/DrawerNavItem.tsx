import React from 'react';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import { ArrowDropUp, ChevronRight, ExpandLess } from '@material-ui/icons';
import { gray } from '@pxblue/colors';
import clsx from 'clsx';
import { PXBlueDrawerInheritableProperties } from './Drawer';
import { DrawerNavGroupProps } from './DrawerNavGroup';
import { InfoListItem } from '../InfoListItem';

export type NavItem = {
    // icon on the left
    icon?: JSX.Element;

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

export type NestedNavItem = Omit<NavItem, 'icon'>;

export type DrawerNavItem = {
    navItem: NavItem | NestedNavItem;
    navGroupProps: DrawerNavGroupProps;
    depth: number;
    expanded: boolean;
    expandHandler?: Function;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
            fontWeight: 400,
        },
    })
);

export const DrawerNavItem: React.FC<DrawerNavItem> = (props) => {
    const { depth, expanded, expandHandler, navItem, navGroupProps } = props;
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
    const InfoListItemProps = navItem.InfoListItemProps || navGroupProps.InfoListItemProps || {};
    const itemFontColor = navItem.itemFontColor || navGroupProps.itemFontColor || gray[500];
    const itemIconColor = navItem.itemIconColor || navGroupProps.itemIconColor || gray[500];
    const onItemSelect = navItem.onItemSelect || navGroupProps.onItemSelect;
    const ripple =
        navItem.ripple !== undefined
            ? navItem.ripple
            : navGroupProps.ripple !== undefined
            ? navGroupProps.ripple
            : true;

    const hasAction = Boolean(onItemSelect || onClick || expandHandler);
    const onClickAction = (): void => {
        if (onItemSelect) {
            onItemSelect();
        }
        if (onClick) {
            onClick();
        }
        else if (expandHandler) {
            expandHandler();
        }
    };

    const rightComponent = navItem.rightComponent || (chevron && !items) ? <ChevronRight /> : undefined;

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

    // 0 indents for top level nav items
    // 0, 2, 4, ... for secondary level and beyond
    const paddingLeft = theme.spacing(depth ? (depth - 1) * 4 : 0);

    const active = activeItem === itemID;

    return (
        <div
            style={{ position: 'relative' }}
            className={clsx(classes.listItemContainer, active && defaultClasses.listItemNoHover)}
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
                onClick={hasAction ? onClickAction : undefined}
                style={{ paddingLeft }}
                hidePadding={hidePadding}
                ripple={ripple}
                {...InfoListItemProps}
                classes={
                    depth > 0
                        ? Object.assign(
                              { title: clsx(defaultClasses.nestedTitle, classes.nestedTitle) },
                              InfoListItemProps.classes
                          )
                        : InfoListItemProps.classes
                }
            />
        </div>
    );
};

DrawerNavItem.displayName = 'DrawerNavItem';
