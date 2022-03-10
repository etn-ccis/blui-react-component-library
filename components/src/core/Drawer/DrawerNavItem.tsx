import React, { HTMLAttributes, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDrawerContext } from './DrawerContext';
import { useNavGroupContext } from './NavGroupContext';
import { usePrevious } from '../hooks/usePrevious';
import { Theme, useTheme } from '@mui/material/styles';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import { InfoListItem, InfoListItemProps as BLUIInfoListItemProps } from '../InfoListItem';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import ChevronRight from '@mui/icons-material/ChevronRight';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { NavItemSharedStyleProps, NavItemSharedStylePropTypes, SharedStyleProps, SharedStylePropTypes } from './types';
import clsx from 'clsx';
import color from 'color';
import { findChildByType, mergeStyleProp } from './utilities';
import { white, darkBlack } from '@brightlayer-ui/colors';
import { DrawerRailItemProps } from './DrawerRailItem';

export type DrawerNavItemClasses = {
    root?: string;
    active?: string;
    expandIcon?: string;
    infoListItemRoot?: string;
    nestedListGroup?: string;
    nestedTitle?: string;
    title?: string;
    titleActive?: string;
    ripple?: string;
};
export type DrawerNavItemProps = SharedStyleProps &
    NavItemSharedStyleProps & {
        /** Custom classes for default style overrides */
        classes?: DrawerNavItemClasses;
        /** The nested depth of the item
         *
         * Default: 0
         *
         * This is managed automatically when using the `<DrawerNavItem>` inside of a `<DrawerNavGroup>`
         */
        depth?: number;
        /** Sets whether to hide the nav item */
        hidden?: boolean;
        /** Remove left padding if no icon is used
         *
         * Default: false
         */
        hidePadding?: boolean;
        /** A component to render for the left icon */
        icon?: JSX.Element;
        /** Sets whether the item is a parent of the currently active item
         *
         * This is managed automatically when using the `<DrawerNavItem>` inside of a `<DrawerNavGroup>`
         */
        isInActiveTree?: boolean;
        /** A unique identifier of the NavItem. Item will have 'active' style when this matches the `activeItem` prop of the <Drawer> */
        itemID: string;
        /** The items nested under this item */
        items?: NestedDrawerNavItemProps[];
        /** Callback function to the parent element to update active hierarchy styles
         *
         * This is managed automatically when using the `<DrawerNavItem>` inside of a `<DrawerNavGroup>`
         */
        notifyActiveParent?: (ids?: string[]) => void;
        /** A function to execute when clicked */
        onClick?: (e: React.MouseEvent<HTMLElement>) => void;
        /** An icon/component to display to the right */
        rightComponent?: JSX.Element;
        /** Status stripe and icon color */
        statusColor?: string;
        /** The text to show on the second line */
        subtitle?: string;
        /** The text to show on the first line */
        title: string;
        /** Sets whether to disable the tooltip on hover for the condensed `rail` variant  */
        disableRailTooltip?: boolean;
        /** Used to override [InfoListItem](https://brightlayer-ui-components.github.io/react/?path=/info/components-info-list-item--get-read-me-story) default props */
        InfoListItemProps?: Partial<BLUIInfoListItemProps>;
    } & Pick<HTMLAttributes<HTMLDivElement>, 'children'>;
export type NestedDrawerNavItemProps = Omit<DrawerNavItemProps, 'icon'>;
// aliases
export type NavItem = DrawerNavItemProps;
export type NestedNavItem = NestedDrawerNavItemProps;

// First nested item has no additional indentation.  All items start with 16px indentation.
const calcNestedPadding = (theme: Theme, depth: number): string => {
    const calculatePaddingInt = parseInt(theme.spacing(depth ? (depth - 1) * 4 : 0)) + parseInt(theme.spacing(2));
    return `${calculatePaddingInt}px`;
};

const getChevronColor = (props: DrawerNavItemProps, theme: Theme): string => {
    const { chevronColor } = props;
    return chevronColor ? chevronColor : theme.palette.text.secondary;
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        active: {
            content: '""',
            zIndex: 0,
            position: 'absolute',
            height: '100%',
            width: `calc(100% - ${theme.spacing(1)})`,
            left: 0,
            top: 0,
            borderRadius: `0px 1.625rem 1.625rem 0px`,
            opacity: 0.9,
            '&$square': {
                width: '100%',
                borderRadius: 0,
            },
        },
        chevron: {
            color: (props) => getChevronColor(props, theme),
        },
        drawerOpen: {},
        expanded: {},
        expandIcon: {
            transitionDuration: `${theme.transitions.duration.standard}ms`,
            cursor: 'inherit',
            display: 'flex',
            padding: '1rem',
            marginRight: '-1rem',
            alignItems: 'center',
            justifyContent: 'center',
            '&$expanded': {
                transform: 'rotate(180deg)',
            },
        },
        infoListItemRoot: {
            // Have to specify both of these. JSS doesn't like to automatically flip the rule when it's calculated from a function
            paddingLeft: (props: DrawerNavItemProps): string =>
                theme.direction === 'rtl' ? theme.spacing(2) : calcNestedPadding(theme, props.depth),
            paddingRight: (props: DrawerNavItemProps): string =>
                theme.direction === 'ltr' ? theme.spacing(2) : calcNestedPadding(theme, props.depth),
        },
        nestedTitle: {
            fontWeight: 400,
        },
        nestedListGroup: {
            backgroundColor: (props: DrawerNavItemProps): string =>
                props.nestedBackgroundColor || (theme.palette.mode === 'light' ? white[200] : darkBlack[500]),
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
        root: {
            backgroundColor: (props: DrawerNavItemProps): string =>
                (props.depth > 0 ? props.nestedBackgroundColor : props.backgroundColor) || 'transparent',
        },
        square: {},
        textSecondary: {
            color: theme.palette.mode === 'dark' ? theme.palette.text.secondary : undefined,
        },
        title: {
            fontWeight: 400,
        },
        titleActive: {
            fontWeight: 600,
        },
        flipIcon:
            theme.direction === 'rtl'
                ? {
                      transform: 'scaleX(-1)',
                  }
                : {},
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
    const fivePercentOpacityPrimary = color(
        theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main
    )
        .fade(0.95)
        .string();
    const twentyPercentOpacityPrimary = color(
        theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main
    )
        .fade(0.8)
        .string();
    // approximating primary[200] but we don't have access to it directly from the theme
    const lightenedPrimary = color(
        theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main
    )
        .lighten(0.83)
        .desaturate(0.39)
        .string();

    // Destructure the props
    const {
        activeItemBackgroundColor = theme.palette.mode === 'light'
            ? fivePercentOpacityPrimary
            : twentyPercentOpacityPrimary,
        activeItemBackgroundShape = 'square',
        activeItemFontColor = theme.palette.mode === 'light' ? theme.palette.primary.main : lightenedPrimary,
        activeItemIconColor = theme.palette.mode === 'light' ? theme.palette.primary.main : lightenedPrimary,
        backgroundColor,
        chevron,
        chevronColor,
        children,
        classes = {},
        collapseIcon,
        depth = 0,
        disableActiveItemParentStyles = false,
        divider,
        expandIcon = props.depth ? <ArrowDropDown /> : <ExpandMore />,
        hidePadding,
        icon: itemIcon,
        InfoListItemProps = {} as BLUIInfoListItemProps,
        isInActiveTree,
        itemID,
        itemFontColor = theme.palette.text.primary,
        itemIconColor = theme.palette.text.primary,
        items,
        nestedBackgroundColor,
        nestedDivider,
        notifyActiveParent = (): void => {},
        onClick,
        rightComponent = props.chevron && !props.items && !props.children ? (
            <ChevronRight className={clsx(defaultClasses.chevron, defaultClasses.flipIcon)} />
        ) : undefined,
        ripple = true,
        statusColor,
        subtitle: itemSubtitle,
        title: itemTitle,
    } = props;

    const [expanded, setExpanded] = useState(isInActiveTree);
    const active = activeItem === itemID;
    const hasAction = Boolean(onItemSelect || onClick || (items && items.length > 0) || Boolean(children));
    // only allow icons for the top level items
    const icon = !depth ? itemIcon : undefined;
    const showDivider =
        depth > 0 ? (nestedDivider !== undefined ? nestedDivider : false) : divider !== undefined ? divider : false;

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
        (e: React.MouseEvent<HTMLElement>): void => {
            if (onItemSelect) {
                onItemSelect(itemID);
            }
            if (onClick) {
                onClick(e);
            } else if ((items && items.length > 0) || Boolean(children)) {
                setExpanded(!expanded);
            }
        },
        [onItemSelect, onClick, itemID, items, expanded, setExpanded]
    );

    const getActionComponent = useCallback((): JSX.Element => {
        if (!items && !children) {
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
    }, [items, children, classes, defaultClasses, collapseIcon, expanded, expandIcon]);
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
                              chevronColor: mergeStyleProp(chevronColor, child.props.chevronColor),
                              // we use props. because we don't want to pass the destructured default as the value to children
                              collapseIcon: mergeStyleProp(props.collapseIcon, child.props.collapseIcon),
                              disableActiveItemParentStyles: mergeStyleProp(
                                  disableActiveItemParentStyles,
                                  child.props.disableActiveItemParentStyles
                              ),
                              divider: mergeStyleProp(divider, child.props.divider),
                              // we use props. because we don't want to pass the destructured default as the value to children
                              expandIcon: mergeStyleProp(props.expandIcon, child.props.expandIcon),
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
                              isInActiveTree: activeHierarchy.includes(child.props.itemID),
                              notifyActiveParent: (ids: string[] = []): void => {
                                  notifyActiveParent(ids.concat(itemID));
                              },
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
            activeHierarchy,
            backgroundColor,
            chevron,
            chevronColor,
            collapseIcon,
            disableActiveItemParentStyles,
            divider,
            expandIcon,
            hidePadding,
            itemFontColor,
            itemIconColor,
            nestedBackgroundColor,
            nestedDivider,
            notifyActiveParent,
            ripple,
            children,
        ]
    );

    // Combine the classes to pass down the the InfoListItem
    const infoListItemClasses = {
        root: ripple && hasAction ? undefined : clsx(defaultClasses.infoListItemRoot, classes.infoListItemRoot),
        listItemButtonRoot:
            ripple && hasAction ? clsx(defaultClasses.infoListItemRoot, classes.infoListItemRoot) : undefined,
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
            [defaultClasses.textSecondary]: !active,
            [defaultClasses.noIconTitle]: hidePadding && !icon,
            [defaultClasses.drawerOpen]: drawerOpen,
        }),
        info: clsx({
            [defaultClasses.textSecondary]: !active,
        }),
    };

    return (
        <>
            {!props.hidden && (
                <div ref={ref} style={{ position: 'relative' }} className={clsx(defaultClasses.root, classes.root)}>
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
                        backgroundColor={'transparent'}
                        onClick={hasAction ? onClickAction : undefined}
                        hidePadding={hidePadding}
                        ripple={ripple}
                        ListItemButtonProps={{ ...RippleProps }}
                        {...InfoListItemProps}
                        classes={Object.assign(infoListItemClasses, InfoListItemProps.classes)}
                    />
                </div>
            )}
            {/* If the NavItem has child items defined, render them in a collapse panel */}
            {((items && items.length > 0) || Boolean(children)) && (
                <Collapse in={expanded && drawerOpen !== false} key={`${itemTitle}_group_${depth}`}>
                    <List className={clsx(defaultClasses.nestedListGroup, classes.nestedListGroup)}>
                        {items &&
                            items.map((subItem: DrawerNavItemProps, index: number) => (
                                // eslint-disable-next-line @typescript-eslint/no-use-before-define
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
                                    activeItemFontColor={mergeStyleProp(
                                        activeItemFontColor,
                                        subItem.activeItemFontColor
                                    )}
                                    activeItemIconColor={mergeStyleProp(
                                        activeItemIconColor,
                                        subItem.activeItemIconColor
                                    )}
                                    backgroundColor={mergeStyleProp(backgroundColor, subItem.backgroundColor)}
                                    chevron={mergeStyleProp(chevron, subItem.chevron)}
                                    chevronColor={mergeStyleProp(chevronColor, subItem.chevronColor)}
                                    // we use props. because we don't want to pass the destructured default as the value to the children
                                    collapseIcon={mergeStyleProp(props.collapseIcon, subItem.collapseIcon)}
                                    disableActiveItemParentStyles={mergeStyleProp(
                                        disableActiveItemParentStyles,
                                        subItem.disableActiveItemParentStyles
                                    )}
                                    divider={mergeStyleProp(divider, subItem.divider)}
                                    // we use props. because we don't want to pass the destructured default as the value to the children
                                    expandIcon={mergeStyleProp(props.expandIcon, subItem.expandIcon)}
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
                                    notifyActiveParent={(ids: string[] = []): void => {
                                        notifyActiveParent(ids.concat(itemID));
                                    }}
                                />
                            ))}
                        {getChildren()}
                    </List>
                </Collapse>
            )}
        </>
    );
};
/**
 * [DrawerNavItem](https://brightlayer-ui-components.github.io/react/?path=/info/components-drawer--get-read-me-story) component
 *
 * The `<DrawerNavItem>` is an individual line item in the `<Drawer>`. These can be generated for you by using the `items` prop of the `<DrawerNavGroup>` and passing in an array of objects with the following API. You can also create these line items by directly passing them as children to the `<DrawerNavGroup>`. Each `<DrawerNavItem>` also supports the ability to nest items (using its own `items` prop or children). When using the rail variant of the `<Drawer>`, you should use `<DrawerRailItem>` instead.
 */
export const DrawerNavItem = React.forwardRef(DrawerNavItemRender);
DrawerNavItem.displayName = 'DrawerNavItem';
DrawerNavItem.propTypes = {
    ...SharedStylePropTypes,
    ...NavItemSharedStylePropTypes,
    classes: PropTypes.shape({
        active: PropTypes.string,
        expandIcon: PropTypes.string,
        infoListItemRoot: PropTypes.string,
        nestedListGroup: PropTypes.string,
        nestedTitle: PropTypes.string,
        ripple: PropTypes.string,
        root: PropTypes.string,
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
    InfoListItemProps: PropTypes.object,
};
