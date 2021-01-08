import React, { ReactNode, useCallback, useEffect } from 'react';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ExpandMore from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import { PXBlueDrawerInheritableProperties } from './Drawer';
import { DrawerNavGroupProps } from './DrawerNavGroup';
import { InfoListItem } from '../InfoListItem';
import { useDrawerContext } from './DrawerContext';
import color from 'color';
import { usePrevious } from '../hooks/usePrevious';

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
} & PXBlueDrawerInheritableProperties;

export type NestedNavItem = Omit<NavItem, 'icon'>;

export type DrawerNavItem = {
    isInActiveTree?: boolean;
    navItem: NavItem | NestedNavItem;
    navGroupProps: DrawerNavGroupProps;
    depth: number;
    expanded: boolean;
    expandHandler?: () => void;
    notifyActiveParent?: () => void;
};

// First nested item has no additional indentation.  All items start with 16px indentation.
const calcNestedPadding = (theme: Theme, depth: number): number =>
    theme.spacing(depth ? (depth - 1) * 4 : 0) + theme.spacing(2);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
        drawerOpen: {},
        expanded: {},
        expandIcon: {
            transitionDuration: `${theme.transitions.duration.standard}ms`,
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
        infoListItem: {
            paddingLeft: (props: DrawerNavItem): number => calcNestedPadding(theme, props.depth),
        },
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
        square: {},
        title: {
            fontWeight: 400,
        },
        titleActive: {
            fontWeight: 600,
        },
    })
);

const DrawerNavItemRender: React.ForwardRefRenderFunction<unknown, DrawerNavItem> = (
    props: DrawerNavItem,
    ref: any
) => {
    const { depth, expanded, expandHandler, navItem, navGroupProps, notifyActiveParent = (): void => {} } = props;
    const { title: itemTitle, subtitle: itemSubtitle, items, itemID, onClick, statusColor } = navItem;

    // only allow icons for the top level items
    const icon = !depth ? (navItem as NavItem).icon : undefined;

    const defaultClasses = useStyles(props);
    const theme = useTheme();
    const { isOpen } = useDrawerContext();

    const fivePercentOpacityPrimary = color(theme.palette.primary.main)
        .fade(0.95)
        .rgb()
        .string();
    const twentyPercentOpacityPrimary = color(theme.palette.primary.main)
        .fade(0.8)
        .rgb()
        .string();
    // approximating primary[200] but we don't have access to it directly from the theme
    const lightenedPrimary = color(theme.palette.primary.main)
        .lighten(0.83)
        .desaturate(0.39)
        .rgb()
        .string();
    const { activeItem, classes, nestedDivider } = navGroupProps;

    const previousActive = usePrevious(activeItem);

    // If the active item changes
    useEffect(() => {
        if (activeItem === itemID && previousActive !== itemID) {
            // notify the parent that it should now be in the active tree
            notifyActiveParent();
        }
    }, [activeItem, notifyActiveParent]);

    // handle inheritables
    const activeItemBackgroundColor =
        navItem.activeItemBackgroundColor ||
        navGroupProps.activeItemBackgroundColor ||
        (theme.palette.type === 'light' ? fivePercentOpacityPrimary : twentyPercentOpacityPrimary);
    const activeItemBackgroundShape =
        navItem.activeItemBackgroundShape || navGroupProps.activeItemBackgroundShape || 'square';
    const activeItemFontColor =
        navItem.activeItemFontColor ||
        navGroupProps.activeItemFontColor ||
        (theme.palette.type === 'light' ? theme.palette.primary.main : lightenedPrimary);
    const activeItemIconColor =
        navItem.activeItemIconColor ||
        navGroupProps.activeItemIconColor ||
        (theme.palette.type === 'light' ? theme.palette.primary.main : lightenedPrimary);
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
                : false; // dividers off by default
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
        title: clsx(defaultClasses.title, classes.title, {
            [defaultClasses.titleActive]: active || props.isInActiveTree,
            [defaultClasses.nestedTitle]: depth > 0,
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
