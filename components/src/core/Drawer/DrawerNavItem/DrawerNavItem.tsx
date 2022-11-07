import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDrawerContext } from '../DrawerContext';
import { useNavGroupContext } from '../NavGroupContext';
import { usePrevious } from '../../hooks/usePrevious';
import { Theme, useTheme, styled, SxProps } from '@mui/material/styles';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import { InfoListItem, InfoListItemProps as BLUIInfoListItemProps } from '../../InfoListItem';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import ChevronRight from '@mui/icons-material/ChevronRight';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { NavItemSharedStyleProps, NavItemSharedStylePropTypes, SharedStyleProps, SharedStylePropTypes } from '../types';
import color from 'color';
import { findChildByType, mergeStyleProp } from '../utilities';
import { white, darkBlack } from '@brightlayer-ui/colors';
import { DrawerRailItemProps } from '../DrawerRailItem';
import { cx } from '@emotion/css';
import drawerNavItemClasses, {
    DrawerNavItemClasses,
    DrawerNavItemClassKey,
    getDrawerNavItemUtilityClass,
} from './DrawerNavItemClasses';
import Box, { BoxProps } from '@mui/material/Box';
import { unstable_composeClasses as composeClasses } from '@mui/base';

const useUtilityClasses = (ownerState: DrawerNavItemProps): Record<DrawerNavItemClassKey, string> => {
    const { classes } = ownerState;

    const slots = {
        root: ['root'],
        active: ['active'],
        chevron: ['chevron'],
        expandIcon: ['expandIcon'],
        infoListItemRoot: ['infoListItemRoot'],
        nestedListGroup: ['nestedListGroup'],
        nestedTitle: ['nestedTitle'],
        title: ['title'],
        titleActive: ['titleActive'],
        ripple: ['ripple'],
    };

    return composeClasses(slots, getDrawerNavItemUtilityClass, classes);
};

export type DrawerNavItemProps = SharedStyleProps &
    NavItemSharedStyleProps & {
        /** Custom classes for default style overrides */
        classes?: DrawerNavItemClasses;
        /** class for root default style overrides */
        className?: string;
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
        /** Used to override [InfoListItem](https://brightlayer-ui-components.github.io/react/components/info-list-item) default props */
        InfoListItemProps?: Partial<BLUIInfoListItemProps>;
        /** Optional sx props to apply style overrides */
        sx?: SxProps<Theme>;
    } & Pick<BoxProps, 'children' | 'style'>;
export type NestedDrawerNavItemProps = Omit<DrawerNavItemProps, 'icon'>;
// aliases
export type NavItem = DrawerNavItemProps;
export type NestedNavItem = NestedDrawerNavItemProps;

// First nested item has no additional indentation.  All items start with 16px indentation.
const calcNestedPadding = (theme: Theme, depth: number): string => {
    const calculatePaddingInt = parseInt(theme.spacing(depth ? (depth - 1) * 4 : 0)) + parseInt(theme.spacing(2));
    return `${calculatePaddingInt}px`;
};

const Root = styled(Box, {
    name: 'drawer-nav-item',
    slot: 'value',
    shouldForwardProp: (prop) => prop !== 'nestedBackgroundColor',
})<Pick<DrawerNavItemProps, 'depth' | 'nestedBackgroundColor' | 'backgroundColor'>>(
    ({ depth, nestedBackgroundColor, backgroundColor }) => ({
        backgroundColor: (depth > 0 ? nestedBackgroundColor : backgroundColor) || 'transparent',
    })
);

const ActiveItem = styled(Box, {
    name: 'drawer-nav-item',
    slot: 'active',
    shouldForwardProp: (prop) => prop !== 'activeItemBackgroundShape',
})<Pick<DrawerNavItemProps, 'activeItemBackgroundShape'>>(({ activeItemBackgroundShape, theme }) => ({
    content: '""',
    zIndex: 0,
    position: 'absolute',
    height: '100%',
    width: activeItemBackgroundShape === 'square' ? '100%' : `calc(100% - ${theme.spacing(1)})`,
    left: 0,
    top: 0,
    borderRadius: activeItemBackgroundShape === 'square' ? 0 : `0px 1.625rem 1.625rem 0px`,
    opacity: 0.9,
}));

const InfoListItemRoot = styled(InfoListItem, {
    name: 'drawer-nav-item',
    slot: 'info-list-item-root',
    shouldForwardProp: (prop) => prop !== 'drawerOpen' && prop !== 'active',
})<
    Pick<DrawerNavItemProps, 'depth' | 'hidePadding' | 'icon'> & {
        drawerOpen: boolean;
        active: boolean;
    }
>(({ depth, hidePadding, icon, drawerOpen, active, theme }) => ({
    '& .MuiListItemButton-root': {
        // Have to specify both of these. JSS doesn't like to automatically flip the rule when it's calculated from a function
        paddingLeft: theme.direction === 'rtl' ? theme.spacing(2) : calcNestedPadding(theme, depth),
        paddingRight: theme.direction === 'ltr' ? theme.spacing(2) : calcNestedPadding(theme, depth),
    },
    [`& .${drawerNavItemClasses.nestedTitle}`]: {
        fontWeight: 400,
    },
    [`& .${drawerNavItemClasses.title}`]: {
        fontWeight: 400,
    },
    [`& .${drawerNavItemClasses.titleActive}`]: {
        fontWeight: 600,
    },
    '& .BluiInfoListItem-title': {
        opacity: hidePadding && !icon && drawerOpen ? 1 : hidePadding && !icon ? 0 : 'inherit',
        transition: hidePadding && !icon ? theme.transitions.create('opacity') : '',
    },
    '& .BluiInfoListItem-subtitle': {
        opacity: hidePadding && !icon && drawerOpen ? 1 : hidePadding && !icon ? 0 : 'inherit',
        transition: hidePadding && !icon ? theme.transitions.create('opacity') : '',
        color: !active && theme.palette.mode === 'dark' ? theme.palette.text.secondary : undefined,
    },
    '& .BluiInfoListItem-info': {
        color: !active && theme.palette.mode === 'dark' ? theme.palette.text.secondary : undefined,
    },
    [`&. ${drawerNavItemClasses.ripple}`]: {
        backgroundColor: theme.palette.primary.main,
    },
}));

const Chevron = styled(ChevronRight, {
    name: 'drawer-nav-item',
    slot: 'chevron',
    shouldForwardProp: (prop) => prop !== 'chevronColor',
})<Pick<DrawerNavItemProps, 'chevronColor'>>(({ chevronColor, theme }) => ({
    color: chevronColor ? chevronColor : theme.palette.text.secondary,
    transform: theme.direction === 'rtl' ? 'scaleX(-1)' : '',
}));

const ActiveComponent = styled(Box, {
    name: 'drawer-nav-item',
    slot: 'active-component',
})<Pick<DrawerNavItemProps, 'collapseIcon'> & { expanded: boolean }>(({ collapseIcon, expanded, theme }) => ({
    transitionDuration: `${theme.transitions.duration.standard}ms`,
    cursor: 'inherit',
    display: 'flex',
    padding: '1rem',
    marginRight: '-1rem',
    alignItems: 'center',
    justifyContent: 'center',
    transform: !collapseIcon && expanded ? 'rotate(180deg)' : '',
}));

const NestedListGroup = styled(List, {
    name: 'drawer-nav-item',
    slot: 'nested-list-group',
    shouldForwardProp: (prop) => prop !== 'nestedBackgroundColor',
})<Pick<DrawerNavItemProps, 'nestedBackgroundColor'>>(({ nestedBackgroundColor, theme }) => ({
    backgroundColor: nestedBackgroundColor || (theme.palette.mode === 'light' ? white[200] : darkBlack[500]),
    paddingBottom: 0,
    paddingTop: 0,
}));

const DrawerNavItemRender: React.ForwardRefRenderFunction<HTMLElement, DrawerNavItemProps> = (
    props: DrawerNavItemProps,
    ref: any
) => {
    const theme = useTheme();
    const defaultClasses = useUtilityClasses(props);
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
        className,
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
            <Chevron chevronColor={chevronColor} className={cx(defaultClasses.chevron, classes.chevron)} />
        ) : undefined,
        ripple = true,
        statusColor,
        subtitle: itemSubtitle,
        title: itemTitle,
        sx,
        style,
    } = props;

    const [expanded, setExpanded] = useState(isInActiveTree);
    const active: boolean = activeItem === itemID;
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
                          child: cx(defaultClasses.ripple, classes.ripple),
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
            <ActiveComponent
                onClick={(e): void => {
                    if (e) {
                        setExpanded(!expanded);
                        e.stopPropagation();
                    }
                }}
                className={cx(defaultClasses.expandIcon, classes.expandIcon)}
                collapseIcon={collapseIcon}
                expanded={expanded}
            >
                {collapseIcon && expanded ? collapseIcon : expandIcon}
            </ActiveComponent>
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
                              sx: mergeStyleProp(sx, child.props.sx),
                              style: mergeStyleProp(style, child.props.style),
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
                              sx: mergeStyleProp(sx, child.props.sx),
                              style: mergeStyleProp(style, child.props.style),
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
        root: ripple && hasAction ? undefined : cx(defaultClasses.infoListItemRoot, classes.infoListItemRoot),
        listItemButtonRoot:
            ripple && hasAction ? cx(defaultClasses.infoListItemRoot, classes.infoListItemRoot) : undefined,
        title: cx(
            defaultClasses.title,
            classes.title,
            active || (!disableActiveItemParentStyles && isInActiveTree) ? defaultClasses.titleActive : undefined,
            (active || (!disableActiveItemParentStyles && isInActiveTree)) && classes.titleActive
                ? classes.titleActive
                : undefined,
            depth > 0 ? defaultClasses.nestedTitle : undefined,
            depth > 0 && classes.nestedTitle ? classes.nestedTitle : undefined
        ),
    };

    return (
        <>
            {!props.hidden && (
                <Root
                    ref={ref}
                    style={{ ...style, position: 'relative' }}
                    className={cx(defaultClasses.root, className, classes.root)}
                    depth={depth}
                    nestedBackgroundColor={nestedBackgroundColor}
                    backgroundColor={backgroundColor}
                    sx={sx}
                >
                    {active && (
                        <ActiveItem
                            className={cx(defaultClasses.active, classes.active)}
                            style={{
                                backgroundColor: activeItemBackgroundColor,
                            }}
                            activeItemBackgroundShape={activeItemBackgroundShape}
                        />
                    )}
                    <InfoListItemRoot
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
                        depth={depth}
                        drawerOpen={drawerOpen}
                        active={active}
                        ListItemButtonProps={{ ...RippleProps }}
                        {...InfoListItemProps}
                        classes={Object.assign(infoListItemClasses, InfoListItemProps.classes)}
                    />
                </Root>
            )}
            {/* If the NavItem has child items defined, render them in a collapse panel */}
            {((items && items.length > 0) || Boolean(children)) && (
                <Collapse in={expanded && drawerOpen !== false} key={`${itemTitle}_group_${depth}`}>
                    <NestedListGroup
                        className={cx(defaultClasses.nestedListGroup, classes.nestedListGroup)}
                        nestedBackgroundColor={nestedBackgroundColor}
                    >
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
                    </NestedListGroup>
                </Collapse>
            )}
        </>
    );
};
/**
 * [DrawerNavItem](https://brightlayer-ui-components.github.io/react/components/drawer-nav-item) component
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
        chevron: PropTypes.string,
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
