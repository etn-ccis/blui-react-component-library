import React, { ReactNode, useCallback } from 'react';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ExpandMore from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import { BLUIDrawerInheritableProperties } from './Drawer';
import { DrawerNavGroupProps } from './DrawerNavGroup';
import { InfoListItem } from '../InfoListItem';
import { useDrawerContext } from './DrawerContext';

export type NavItem = {
    // sets whether to hide the nav item
    hidden?: boolean;

    // icon on the left
    icon?: JSX.Element;

    // item id to match for the active state.
    // Should be unique within the entire list. Will be used as the list key too.
    itemID: string;

    // any items listed inside this
    items?: NestedNavItem[];

    // onClick of the entire row
    onClick?: (e?: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;

    // component to be rendered on the right next to the expandIcon
    rightComponent?: ReactNode;

    // Status stripe color
    statusColor?: string;

    // secondary text as a hint text
    subtitle?: string;

    // text to be displayed
    title: string;
} & BLUIDrawerInheritableProperties;

export type NestedNavItem = Omit<NavItem, 'icon'>;

export type DrawerNavItem = {
    navItem: NavItem | NestedNavItem;
    navGroupProps: DrawerNavGroupProps;
    depth: number;
    expanded: boolean;
    expandHandler?: () => void;
};

// First nested item has no additional indentation.  All items start with 16px indentation.
const calcNestedPadding = (theme: Theme, depth: number): number =>
    theme.spacing(depth ? (depth - 1) * 4 : 0) + theme.spacing(2);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        listItemNoHover: {
            '&:hover': {
                /* TODO:
                 * I don't believe this style is actually doing anything. The original intent was to not show
                 * the background on hover over the active item, but this hover state is now controlled in the
                 * InfoListItem component and is based on the presence of a onClick property.
                 */
                backgroundColor: 'initial',
            },
        },
        infoListItem: {
            paddingLeft: (props: DrawerNavItem): number => calcNestedPadding(theme, props.depth),
        },
        active: {
            content: '""',
            zIndex: 0,
            position: 'absolute',
            height: '100%',
            width: `calc(100% - ${theme.spacing(1)}px)`,
            left: 0,
            top: 0,
            borderRadius: `0px ${theme.spacing(3)}px ${theme.spacing(3)}px 0px`,
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
        noIconTitle: {
            opacity: 0,
            transition: theme.transitions.create('opacity'),
            '&$drawerOpen': {
                opacity: 1,
                transition: theme.transitions.create('opacity'),
            },
        },
        drawerOpen: {},
    })
);

const DrawerNavItemRender: React.ForwardRefRenderFunction<unknown, DrawerNavItem> = (
    props: DrawerNavItem,
    ref: any
) => {
    const { depth, expanded, expandHandler, navItem, navGroupProps } = props;
    const { title: itemTitle, subtitle: itemSubtitle, items, itemID, onClick, statusColor } = navItem;

    // only allow icons for the top level items
    const icon = !depth ? (navItem as NavItem).icon : undefined;

    const defaultClasses = useStyles(props);
    const theme = useTheme();
    const { isOpen } = useDrawerContext();

    const primary50Color = theme.palette.primary.light;
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
    const expandIcon = navItem.expandIcon || navGroupProps.expandIcon || (depth ? <ArrowDropDown /> : <ExpandMore />);
    const hidePadding = navItem.hidePadding !== undefined ? navItem.hidePadding : navGroupProps.hidePadding;
    const InfoListItemProps = navItem.InfoListItemProps || navGroupProps.InfoListItemProps || {};
    const itemFontColor = navItem.itemFontColor || navGroupProps.itemFontColor || theme.palette.text.primary;
    const itemIconColor = navItem.itemIconColor || navGroupProps.itemIconColor || theme.palette.text.primary;
    const onItemSelect = navItem.onItemSelect || navGroupProps.onItemSelect;
    const ripple =
        navItem.ripple !== undefined
            ? navItem.ripple
            : navGroupProps.ripple !== undefined
            ? navGroupProps.ripple
            : true;

    const hasAction = Boolean(onItemSelect || onClick || expandHandler);
    const onClickAction = useCallback(
        (e: React.MouseEvent<HTMLLIElement, MouseEvent>): void => {
            if (onItemSelect) {
                onItemSelect();
            }
            if (onClick) {
                onClick(e);
            } else if (expandHandler) {
                expandHandler();
            }
        },
        [onItemSelect, onClick, expandHandler]
    );

    const rightComponent = navItem.rightComponent || (chevron && !items ? <ChevronRight /> : undefined);

    const getActionComponent = useCallback((): JSX.Element => {
        if (!items) {
            return null;
        }
        return (
            <div
                onClick={(e): void => {
                    if (e) {
                        expandHandler();
                        e.stopPropagation();
                    }
                }}
                className={clsx(defaultClasses.expandIcon, classes.expandIcon, {
                    [defaultClasses.expanded]: !collapseIcon && expanded,
                })}
            >
                {collapseIcon && expanded ? collapseIcon : expandIcon}
            </div>
        );
    }, [items, expandHandler, classes, defaultClasses, collapseIcon, expanded, expandIcon]);

    const actionComponent = getActionComponent();
    const active = activeItem === itemID;
    const infoListItemClasses = {
        root: defaultClasses.infoListItem,
        title: clsx({
            [defaultClasses.nestedTitle]: depth > 0,
            [classes.nestedTitle]: depth > 0,
            [defaultClasses.noIconTitle]: hidePadding && !icon,
            [defaultClasses.drawerOpen]: isOpen,
        }),
        subtitle: clsx({
            [defaultClasses.noIconTitle]: hidePadding && !icon,
            [defaultClasses.drawerOpen]: isOpen,
        }),
    };

    return (
        <>
            {!navItem.hidden && (
                <div
                    ref={ref}
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
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        color: active ? activeItemIconColor : itemIconColor,
                                    }}
                                >
                                    {rightComponent}
                                    {actionComponent}
                                </div>
                            )
                        }
                        backgroundColor={'transparent'}
                        onClick={hasAction ? onClickAction : undefined}
                        hidePadding={hidePadding}
                        ripple={ripple}
                        {...InfoListItemProps}
                        classes={Object.assign(infoListItemClasses, InfoListItemProps.classes)}
                    />
                </div>
            )}
        </>
    );
};

export const DrawerNavItem = React.forwardRef(DrawerNavItemRender);
DrawerNavItem.displayName = 'DrawerNavItem';
