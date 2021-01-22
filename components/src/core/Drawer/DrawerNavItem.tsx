import React, { HTMLAttributes, useCallback, useEffect, useState } from 'react';
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
import { findChildByType, mergeStyleProp } from './utilities';
import { white, darkBlack } from '@pxblue/colors';
import { DrawerRailItemProps } from './DrawerRailItem';

export type DrawerNavItemClasses = {
    root?: string;
    active?: string;
    expandIcon?: string;
    listItemContainer?: string;
    nestedListGroup?: string;
    nestedTitle?: string;
    title?: string;
    titleActive?: string;
    ripple?: string;
};
export type DrawerNavItemProps = SharedStyleProps &
    NavItemSharedStyleProps & {
        classes?: DrawerNavItemClasses;
        depth?: number;
        hidden?: boolean;
        hidePadding?: boolean;
        icon?: JSX.Element;
        isInActiveTree?: boolean;
        itemID: string;
        items?: NestedDrawerNavItemProps[];
        notifyActiveParent?: (ids?: string[]) => void;
        onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
        rightComponent?: JSX.Element;
        statusColor?: string;
        subtitle?: string;
        title: string;
        InfoListItemProps?: Partial<PXBInfoListItemProps>;
    } & Pick<HTMLAttributes<HTMLDivElement>, 'children'>;
export type NestedDrawerNavItemProps = Omit<DrawerNavItemProps, 'icon'>;
// aliases
export type NavItem = DrawerNavItemProps;
export type NestedNavItem = NestedDrawerNavItemProps;

// First nested item has no additional indentation.  All items start with 16px indentation.
const calcNestedPadding = (theme: Theme, depth: number): number =>
    theme.spacing(depth ? (depth - 1) * 4 : 0) + theme.spacing(2);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingLeft: (props: DrawerNavItemProps): number => calcNestedPadding(theme, props.depth),
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
        listItemContainer: {},
        nestedTitle: {
            fontWeight: 400,
        },
        nestedListGroup: {
            backgroundColor: (props: DrawerNavItemProps): string =>
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
        ripple: {
            backgroundColor: theme.palette.primary.main,
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

const DrawerNavItemRender: React.ForwardRefRenderFunction<HTMLElement, DrawerNavItemProps> = (
    props: DrawerNavItemProps,
    ref: any
) => {
    const theme = useTheme();
    const defaultClasses = useStyles(props);
    const { open: drawerOpen = true, activeItem, onItemSelect } = useDrawerContext();
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
        children,
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
                          child: clsx(defaultClasses.ripple, classes.ripple),
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

    const getChildren = useCallback(
        (): JSX.Element[] =>
            findChildByType(children, ['DrawerNavItem', 'DrawerRailItem'])
                // .slice(0, 1)
                .map((child) =>
                    child.type.displayName === 'DrawerNavItem'
                        ? React.cloneElement(child, {
                              // Inherited Props
                              activeItemBackgroundColor: mergeStyleProp(
                                  activeItemBackgroundColor,
                                  child.props.activeItemBackgroundColor
                              ),
                              activeItemBackgroundShape: mergeStyleProp(
                                  activeItemBackgroundShape,
                                  child.props.activeItemBackgroundShape
                              ),
                              activeItemFontColor: mergeStyleProp(activeItemFontColor, child.props.activeItemFontColor),
                              activeItemIconColor: mergeStyleProp(activeItemIconColor, child.props.activeItemIconColor),
                              backgroundColor: mergeStyleProp(backgroundColor, child.props.backgroundColor),
                              chevron: mergeStyleProp(chevron, child.props.chevron),
                              collapseIcon: mergeStyleProp(collapseIcon, child.props.collapseIcon),
                              disableActiveItemParentStyles: mergeStyleProp(
                                  disableActiveItemParentStyles,
                                  child.props.disableActiveItemParentStyles
                              ),
                              divider: mergeStyleProp(divider, child.props.divider),
                              expandIcon: mergeStyleProp(expandIcon, child.props.expandIcon),
                              hidePadding: mergeStyleProp(hidePadding, child.props.hidePadding),
                              itemFontColor: mergeStyleProp(itemFontColor, child.props.itemFontColor),
                              itemIconColor: mergeStyleProp(itemIconColor, child.props.itemIconColor),
                              nestedBackgroundColor: mergeStyleProp(
                                  nestedBackgroundColor,
                                  child.props.nestedBackgroundColor
                              ),
                              nestedDivider: mergeStyleProp(nestedDivider, child.props.nestedDivider),
                              ripple: mergeStyleProp(ripple, child.props.ripple),
                              depth: depth + 1,
                          } as DrawerNavItemProps)
                        : React.cloneElement(child, {
                              // Inherited Props
                              activeItemBackgroundColor: mergeStyleProp(
                                  activeItemBackgroundColor,
                                  child.props.activeItemBackgroundColor
                              ),
                              activeItemFontColor: mergeStyleProp(activeItemFontColor, child.props.activeItemFontColor),
                              activeItemIconColor: mergeStyleProp(activeItemIconColor, child.props.activeItemIconColor),
                              backgroundColor: mergeStyleProp(backgroundColor, child.props.backgroundColor),
                              divider: mergeStyleProp(divider, child.props.divider),
                              itemFontColor: mergeStyleProp(itemFontColor, child.props.itemFontColor),
                              itemIconColor: mergeStyleProp(itemIconColor, child.props.itemIconColor),
                              ripple: mergeStyleProp(ripple, child.props.ripple),
                          } as DrawerRailItemProps)
                ),
        [
            activeItemBackgroundColor,
            activeItemBackgroundShape,
            activeItemFontColor,
            activeItemIconColor,
            backgroundColor,
            chevron,
            collapseIcon,
            disableActiveItemParentStyles,
            divider,
            expandIcon,
            hidePadding,
            itemFontColor,
            itemIconColor,
            nestedBackgroundColor,
            nestedDivider,
            ripple,
            children,
        ]
    );

    // Combine the classes to pass down the the InfoListItem
    const infoListItemClasses = {
        root: clsx(defaultClasses.root, classes.root),
        title: clsx(defaultClasses.title, classes.title, {
            [defaultClasses.titleActive]: active || (!disableActiveItemParentStyles && isInActiveTree),
            [classes.titleActive]:
                (active || (!disableActiveItemParentStyles && isInActiveTree)) && classes.titleActive,
            [defaultClasses.nestedTitle]: depth > 0,
            [classes.nestedTitle]: depth > 0 && classes.nestedTitle,
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
                    className={clsx(defaultClasses.listItemContainer, classes.listItemContainer)}
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
                    {getChildren()}
                </div>
            )}
            {/* If the NavItem has child items defined, render them in a collapse panel */}
            {items && items.length > 0 && (
                <Collapse in={expanded && drawerOpen !== false} key={`${itemTitle}_group_${depth}`}>
                    <List className={clsx(defaultClasses.nestedListGroup, classes.nestedListGroup)}>
                        {items.map((subItem: DrawerNavItemProps, index: number) => (
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
        root: PropTypes.string,
        active: PropTypes.string,
        expandIcon: PropTypes.string,
        listItemContainer: PropTypes.string,
        nestedListGroup: PropTypes.string,
        nestedTitle: PropTypes.string,
        ripple: PropTypes.string,
        title: PropTypes.string,
        titleActive: PropTypes.string,
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
