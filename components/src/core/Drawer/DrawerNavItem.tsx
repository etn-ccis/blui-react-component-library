import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDrawerContext } from './DrawerContext';
import { useNavGroupContext } from './NavGroupContext';
import { usePrevious } from '../hooks/usePrevious';
import { createStyles, makeStyles, Theme, useTheme, Collapse, List } from '@material-ui/core';
import { InfoListItem, InfoListItemProps as PXBInfoListItemProps } from '../InfoListItem';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ChevronRight from '@material-ui/icons/ChevronRight';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { NavItemSharedStyleProps, NavItemSharedStylePropTypes, SharedStyleProps, SharedStylePropTypes } from './types';
import clsx from 'clsx';
import color from 'color';
import { mergeStyleProp } from './utilities';
import { white, darkBlack } from '@pxblue/colors';

export type DrawerNavItemClasses = {
    title?: string;
    active?: string;
    listItemContainer?: string;
    nestedListGroup?: string;
    expandIcon?: string;
};
export type DrawerNavItem = SharedStyleProps &
    NavItemSharedStyleProps & {
        classes?: DrawerNavItemClasses;
        depth?: number;
        hidden?: boolean;
        hidePadding?: boolean;
        icon?: JSX.Element;
        isInActiveTree?: boolean;
        itemID: string;
        items?: NestedDrawerNavItem[];
        notifyActiveParent?: (ids?: string[]) => void;
        onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
        rightComponent?: JSX.Element;
        statusColor?: string;
        subtitle?: string;
        title: string;
        InfoListItemProps?: PXBInfoListItemProps;
    };
export type NestedDrawerNavItem = Omit<DrawerNavItem, 'icon'>;
// aliases
export type NavItem = DrawerNavItem;
export type NestedNavItem = NestedDrawerNavItem;

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
        nestedListGroup: {
            backgroundColor: (props: DrawerNavItem): string =>
                props.nestedBackgroundColor || (theme.palette.type === 'light' ? white[200] : darkBlack[100]),
            paddingBottom: 0,
            paddingTop: 0,
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
        ripple: {
            backgroundColor: theme.palette.primary.main,
        },
    })
);

const DrawerNavItemRender: React.ForwardRefRenderFunction<unknown, DrawerNavItem> = (
    props: DrawerNavItem,
    ref: any
) => {
    const theme = useTheme();
    const defaultClasses = useStyles(props);
    const { open: drawerOpen, activeItem, onItemSelect } = useDrawerContext();
    const { activeHierarchy } = useNavGroupContext();
    const previousActive = usePrevious(activeItem);

    // Primary color manipulation
    const fivePercentOpacityPrimary = color(theme.palette.primary.main)
        .fade(0.95)
        .string();
    const twentyPercentOpacityPrimary = color(theme.palette.primary.main)
        .fade(0.8)
        .string();
    // approximating primary[200] but we don't have access to it directly from the theme
    const lightenedPrimary = color(theme.palette.primary.main)
        .lighten(0.83)
        .desaturate(0.39)
        .string();

    // Destructure the props
    const {
        activeItemBackgroundColor = theme.palette.type === 'light'
            ? fivePercentOpacityPrimary
            : twentyPercentOpacityPrimary,
        activeItemBackgroundShape = 'square',
        activeItemFontColor = theme.palette.type === 'light' ? theme.palette.primary.main : lightenedPrimary,
        activeItemIconColor = theme.palette.type === 'light' ? theme.palette.primary.main : lightenedPrimary,
        backgroundColor,
        chevron,
        classes = {},
        collapseIcon,
        depth = 0,
        disableActiveItemParentStyles = false,
        divider,
        expandIcon = props.depth ? <ArrowDropDown /> : <ExpandMore />,
        hidePadding,
        icon: itemIcon,
        InfoListItemProps = {} as PXBInfoListItemProps,
        isInActiveTree,
        itemID,
        itemFontColor = theme.palette.text.primary,
        itemIconColor = theme.palette.text.primary,
        items,
        nestedBackgroundColor,
        nestedDivider,
        notifyActiveParent = (): void => {},
        onClick,
        rightComponent = props.chevron && !props.items ? <ChevronRight /> : undefined,
        ripple = true,
        statusColor,
        subtitle: itemSubtitle,
        title: itemTitle,
    } = props;

    const [expanded, setExpanded] = useState(isInActiveTree);
    const active = activeItem === itemID;
    const hasAction = Boolean(onItemSelect || onClick || (items && items.length > 0));
    // only allow icons for the top level items
    const icon = !depth ? itemIcon : undefined;
    const showDivider =
        divider !== undefined ? divider : depth ? (nestedDivider !== undefined ? nestedDivider : false) : false;

    // When the activeItem changes, update our expanded state
    useEffect(() => {
        if (isInActiveTree && !expanded) {
            setExpanded(true);
        }
    }, [isInActiveTree]); // Only update if the active tree changes (not after manual expand/collapse action)

    // If the active item changes
    useEffect(() => {
        if (activeItem === itemID && previousActive !== itemID) {
            // notify the parent that it should now be in the active tree
            notifyActiveParent([itemID]);
        }
    }, [activeItem, notifyActiveParent]);

    // Customize the color of the Touch Ripple
    const RippleProps =
        ripple && hasAction
            ? {
                  TouchRippleProps: {
                      classes: {
                          child: defaultClasses.ripple,
                      },
                  },
              }
            : {};

    // Handle click callbacks
    const onClickAction = useCallback(
        (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
            if (onItemSelect) {
                onItemSelect(itemID);
            }
            if (onClick) {
                onClick(e);
            } else if (items && items.length > 0) {
                setExpanded(!expanded);
            }
        },
        [onItemSelect, onClick, itemID, items, expanded, setExpanded]
    );

    const getActionComponent = useCallback((): JSX.Element => {
        if (!items) {
            return null;
        }
        return (
            <div
                onClick={(e): void => {
                    if (e) {
                        setExpanded(!expanded);
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
    }, [items, classes, defaultClasses, collapseIcon, expanded, expandIcon]);
    const actionComponent = getActionComponent();

    // Combine the classes to pass down the the InfoListItem
    const infoListItemClasses = {
        root: defaultClasses.infoListItem,
        title: clsx(defaultClasses.title, classes.title, {
            [defaultClasses.titleActive]: active || (!disableActiveItemParentStyles && isInActiveTree),
            [defaultClasses.nestedTitle]: depth > 0,
            [defaultClasses.noIconTitle]: hidePadding && !icon,
            [defaultClasses.drawerOpen]: drawerOpen,
        }),
        subtitle: clsx({
            [defaultClasses.noIconTitle]: hidePadding && !icon,
            [defaultClasses.drawerOpen]: drawerOpen,
        }),
    };

    return (
        <>
            {!props.hidden && (
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
                        divider={showDivider ? 'full' : undefined}
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
                        backgroundColor={depth > 0 ? nestedBackgroundColor : backgroundColor || 'transparent'}
                        onClick={hasAction ? onClickAction : undefined}
                        hidePadding={hidePadding}
                        ripple={ripple}
                        {...RippleProps}
                        {...InfoListItemProps}
                        classes={Object.assign(infoListItemClasses, InfoListItemProps.classes)}
                    />
                </div>
            )}
            {/* If the NavItem has child items defined, render them in a collapse panel */}
            {items && items.length > 0 && (
                <Collapse in={expanded && drawerOpen !== false} key={`${itemTitle}_group_${depth}`}>
                    <List className={clsx(defaultClasses.nestedListGroup, classes.nestedListGroup)}>
                        {items.map((subItem: DrawerNavItem, index: number) => (
                            <DrawerNavItem
                                key={`itemList_${index}`}
                                {...subItem}
                                activeItemBackgroundColor={mergeStyleProp(
                                    activeItemBackgroundColor,
                                    subItem.activeItemBackgroundColor
                                )}
                                activeItemBackgroundShape={mergeStyleProp(
                                    activeItemBackgroundShape,
                                    subItem.activeItemBackgroundShape
                                )}
                                activeItemFontColor={mergeStyleProp(activeItemFontColor, subItem.activeItemFontColor)}
                                activeItemIconColor={mergeStyleProp(activeItemIconColor, subItem.activeItemIconColor)}
                                backgroundColor={mergeStyleProp(backgroundColor, subItem.backgroundColor)}
                                chevron={mergeStyleProp(chevron, subItem.chevron)}
                                collapseIcon={mergeStyleProp(collapseIcon, subItem.collapseIcon)}
                                disableActiveItemParentStyles={mergeStyleProp(
                                    disableActiveItemParentStyles,
                                    subItem.disableActiveItemParentStyles
                                )}
                                divider={mergeStyleProp(divider, subItem.divider)}
                                expandIcon={mergeStyleProp(expandIcon, subItem.expandIcon)}
                                hidePadding={mergeStyleProp(hidePadding, subItem.hidePadding)}
                                itemFontColor={mergeStyleProp(itemFontColor, subItem.itemFontColor)}
                                itemIconColor={mergeStyleProp(itemIconColor, subItem.itemIconColor)}
                                nestedBackgroundColor={mergeStyleProp(
                                    nestedBackgroundColor,
                                    subItem.nestedBackgroundColor
                                )}
                                nestedDivider={mergeStyleProp(nestedDivider, subItem.nestedDivider)}
                                ripple={mergeStyleProp(ripple, subItem.ripple)}
                                depth={depth + 1}
                                isInActiveTree={activeHierarchy.includes(subItem.itemID)}
                                notifyActiveParent={(ids: string[] = []): void =>
                                    notifyActiveParent(ids.concat(itemID))
                                }
                            />
                        ))}
                    </List>
                </Collapse>
            )}
        </>
    );
};

export const DrawerNavItem = React.forwardRef(DrawerNavItemRender);
DrawerNavItem.displayName = 'DrawerNavItem';
// @ts-ignore
DrawerNavItem.propTypes = {
    ...SharedStylePropTypes,
    ...NavItemSharedStylePropTypes,
    classes: PropTypes.shape({
        title: PropTypes.string,
        active: PropTypes.string,
        listItemContainer: PropTypes.string,
        nestedListGroup: PropTypes.string,
        expandIcon: PropTypes.string,
    }),
    depth: PropTypes.number,
    hidden: PropTypes.bool,
    hidePadding: PropTypes.bool,
    icon: PropTypes.element,
    isInActiveTree: PropTypes.bool,
    itemID: PropTypes.string.isRequired,
    // @ts-ignore
    items: PropTypes.arrayOf(
        PropTypes.shape({
            ...SharedStylePropTypes,
            ...NavItemSharedStylePropTypes,
            itemID: PropTypes.string.isRequired,
            subtitle: PropTypes.string,
            title: PropTypes.string.isRequired,
            onClick: PropTypes.func,
            rightComponent: PropTypes.element,
            statusColor: PropTypes.string,
        })
    ),
    notifyActiveParent: PropTypes.func,
    onClick: PropTypes.func,
    rightComponent: PropTypes.element,
    statusColor: PropTypes.string,
    subtitle: PropTypes.string,
    title: PropTypes.string.isRequired,
    // @ts-ignore
    InfoListItemProps: PropTypes.object,
};
