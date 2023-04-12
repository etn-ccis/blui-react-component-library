import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDrawerContext } from '../DrawerContext';
import { NavGroupContext } from '../NavGroupContext';
import { useTheme, styled } from '@mui/material/styles';
import List, { ListProps } from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import { NavItemSharedStyleProps, NavItemSharedStylePropTypes, SharedStyleProps, SharedStylePropTypes } from '../types';
import { DrawerNavItem, DrawerNavItemProps, NestedDrawerNavItemProps } from '../DrawerNavItem';
import { DrawerRailItem, DrawerRailItemProps } from '../DrawerRailItem';
import { findChildByType, mergeStyleProp } from '../utilities';
import { cx } from '@emotion/css';
import { DrawerNavGroupClasses, DrawerNavGroupClassKey, getDrawerNavGroupUtilityClass } from './DrawerNavGroupClasses';
import { unstable_composeClasses as composeClasses } from '@mui/base';

const useUtilityClasses = (ownerState: DrawerNavGroupProps): Record<DrawerNavGroupClassKey, string> => {
    const { classes } = ownerState;

    const slots = {
        root: ['root'],
        subheader: ['subheader'],
        title: ['title'],
    };

    return composeClasses(slots, getDrawerNavGroupUtilityClass, classes);
};

export type DrawerNavGroupProps = SharedStyleProps &
    NavItemSharedStyleProps &
    ListProps & {
        /** Custom classes for default style overrides */
        classes?: DrawerNavGroupClasses;

        /** List of items to render */
        items?: Array<DrawerNavItemProps | DrawerRailItemProps>;

        /** Text to display in the group header */
        title?: string;

        /** Color used for the title text */
        titleColor?: string;

        /** Custom element, substitute for title */
        titleContent?: ReactNode;

        /** Divider for the title */
        titleDivider?: boolean;
    };

const Root = styled(List, {
    shouldForwardProp: (prop) => prop !== 'backgroundColor',
})<Pick<DrawerNavGroupProps, 'backgroundColor'>>(({ backgroundColor }) => ({
    backgroundColor: backgroundColor,
    paddingBottom: 0,
    paddingTop: 0,
}));

const SubHeader = styled(
    ListSubheader,
    {}
)(({ theme }) => ({
    paddingBottom: 0,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    position: 'inherit',
    cursor: 'text',
}));

const Title = styled(
    Typography,
    {}
)(() => ({
    display: 'block',
    alignItems: 'center',
    lineHeight: '3rem',
    height: `3rem`,
    fontWeight: 600,
}));

const findID = (item: DrawerNavItemProps | NestedDrawerNavItemProps, activeItem: string): boolean => {
    // if leaf node, return
    if (!item.items && !item.children) {
        return item.itemID === activeItem;
    }

    // else, loop through the branches by items
    if (item.items) {
        for (let i = 0; i < item.items.length; i++) {
            if (findID(item.items[i], activeItem)) {
                return true;
            }
        }
    }
    // and by children
    if (item.children) {
        const childItems = findChildByType(item.children, ['DrawerNavItem']);
        for (let i = 0; i < childItems.length; i++) {
            if (findID(childItems[i].props, activeItem)) {
                return true;
            }
        }
    }

    // no active items found, return false
    return false;
};

const DrawerNavGroupRender: React.ForwardRefRenderFunction<unknown, DrawerNavGroupProps> = (
    props: DrawerNavGroupProps,
    ref: any
) => {
    const defaultClasses = useUtilityClasses(props);
    const theme = useTheme();
    const {
        // Nav Group Props
        children,
        classes,
        className: userClassName,
        items = [],
        title,
        titleColor = theme.palette.text.primary,
        titleContent,
        titleDivider = true,
        // Shared Style Props
        activeItemBackgroundColor,
        activeItemBackgroundShape,
        activeItemFontColor,
        activeItemIconColor,
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
        ripple,
        ...otherProps
    } = props;

    const { variant, open: drawerOpen = true, activeItem } = useDrawerContext();

    /* Keeps track of which group of IDs are in the 'active hierarchy' */
    const [activeHierarchyItems, setActiveHierarchyItems] = useState<string[]>([]);

    /* Clear the active hierarchy array if the new active Item cannot be found in the tree */
    useEffect(() => {
        if (!findID({ items: props.items, children: props.children } as DrawerNavItemProps, activeItem))
            setActiveHierarchyItems([]);
    }, [activeItem]);

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
                              depth: 0,
                              isInActiveTree: activeHierarchyItems.includes(child.props.itemID),
                              notifyActiveParent: (ids: string[]): void => {
                                  if (JSON.stringify(activeHierarchyItems) !== JSON.stringify(ids)) {
                                      // Sets the list of active IDs when we get a callback from an active child
                                      setActiveHierarchyItems(ids.concat(child.props.itemID));
                                  }
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
            activeHierarchyItems,
            activeItemBackgroundColor,
            activeItemBackgroundShape,
            activeItemFontColor,
            activeItemIconColor,
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
            ripple,
            setActiveHierarchyItems,
            children,
        ]
    );

    return (
        <NavGroupContext.Provider value={{ activeHierarchy: activeHierarchyItems }}>
            <Root
                ref={ref}
                data-testid={'blui-drawer-nav-group'}
                className={cx(defaultClasses.root, classes.root, userClassName)}
                subheader={
                    variant !== 'rail' && (
                        <SubHeader
                            className={cx(defaultClasses.subheader, classes.subheader)}
                            style={{
                                color: drawerOpen ? titleColor : 'transparent',
                            }}
                        >
                            {title && (
                                <Title noWrap variant={'overline'} className={cx(defaultClasses.title, classes.title)}>
                                    {title}
                                </Title>
                            )}
                            {titleContent}
                        </SubHeader>
                    )
                }
                backgroundColor={backgroundColor}
                {...otherProps}
            >
                {variant !== 'rail' && (
                    <div key={`${title}_title`}>{(title || titleContent) && titleDivider && <Divider />}</div>
                )}
                {items.map((drawerItem: DrawerNavItemProps | DrawerRailItemProps, index: number) => {
                    if (variant === 'rail') {
                        const railItem = drawerItem as DrawerRailItemProps;
                        if (railItem.icon === undefined) {
                            // eslint-disable-next-line no-console
                            console.warn(`Missing required prop 'icon' in DrawerRailItem.`);
                        }

                        return (
                            <DrawerRailItem
                                key={`itemList_${index}`}
                                // {...railItem}
                                // inherited props
                                activeItemBackgroundColor={mergeStyleProp(
                                    activeItemBackgroundColor,
                                    railItem.activeItemBackgroundColor
                                )}
                                activeItemFontColor={mergeStyleProp(activeItemFontColor, railItem.activeItemFontColor)}
                                activeItemIconColor={mergeStyleProp(activeItemIconColor, railItem.activeItemIconColor)}
                                backgroundColor={mergeStyleProp(backgroundColor, railItem.backgroundColor)}
                                divider={mergeStyleProp(divider, railItem.divider)}
                                itemFontColor={mergeStyleProp(itemFontColor, railItem.itemFontColor)}
                                itemIconColor={mergeStyleProp(itemIconColor, railItem.itemIconColor)}
                                ripple={mergeStyleProp(ripple, railItem.ripple)}
                                ButtonBaseProps={railItem.ButtonBaseProps}
                                // rail item props
                                hidden={railItem.hidden}
                                icon={railItem.icon}
                                itemID={railItem.itemID}
                                onClick={railItem.onClick}
                                statusColor={railItem.statusColor}
                                title={railItem.title}
                                disableRailTooltip={railItem.disableRailTooltip}
                                sx={railItem.sx}
                                style={railItem.style}
                            />
                        );
                    }
                    // else it's a regular nav item
                    const navItem = drawerItem as DrawerNavItemProps;
                    if (navItem.title === undefined) {
                        // eslint-disable-next-line no-console
                        console.warn(`Missing required prop 'title' in DrawerNavItem.`);
                    }

                    return (
                        <DrawerNavItem
                            key={`itemList_${index}`}
                            {...navItem}
                            activeItemBackgroundColor={mergeStyleProp(
                                activeItemBackgroundColor,
                                navItem.activeItemBackgroundColor
                            )}
                            activeItemBackgroundShape={mergeStyleProp(
                                activeItemBackgroundShape,
                                navItem.activeItemBackgroundShape
                            )}
                            activeItemFontColor={mergeStyleProp(activeItemFontColor, navItem.activeItemFontColor)}
                            activeItemIconColor={mergeStyleProp(activeItemIconColor, navItem.activeItemIconColor)}
                            backgroundColor={mergeStyleProp(backgroundColor, navItem.backgroundColor)}
                            chevron={mergeStyleProp(chevron, navItem.chevron)}
                            chevronColor={mergeStyleProp(chevronColor, navItem.chevronColor)}
                            collapseIcon={mergeStyleProp(collapseIcon, navItem.collapseIcon)}
                            disableActiveItemParentStyles={mergeStyleProp(
                                disableActiveItemParentStyles,
                                navItem.disableActiveItemParentStyles
                            )}
                            divider={mergeStyleProp(divider, navItem.divider)}
                            expandIcon={mergeStyleProp(expandIcon, navItem.expandIcon)}
                            hidePadding={mergeStyleProp(hidePadding, navItem.hidePadding)}
                            itemFontColor={mergeStyleProp(itemFontColor, navItem.itemFontColor)}
                            itemIconColor={mergeStyleProp(itemIconColor, navItem.itemIconColor)}
                            nestedBackgroundColor={mergeStyleProp(nestedBackgroundColor, navItem.nestedBackgroundColor)}
                            nestedDivider={mergeStyleProp(nestedDivider, navItem.nestedDivider)}
                            ripple={mergeStyleProp(ripple, navItem.ripple)}
                            depth={0}
                            isInActiveTree={activeHierarchyItems.includes(navItem.itemID)}
                            notifyActiveParent={(ids: string[]): void => {
                                if (JSON.stringify(activeHierarchyItems) !== JSON.stringify(ids)) {
                                    // Sets the list of active IDs when we get a callback from an active child
                                    setActiveHierarchyItems(ids.concat(navItem.itemID));
                                }
                            }}
                        />
                    );
                })}
                {getChildren()}
            </Root>
        </NavGroupContext.Provider>
    );
};
/**
 * [DrawerNavGroup](https://brightlayer-ui-components.github.io/react/components/drawer-nav-group) component
 *
 * A `<DrawerNavGroup>` is used inside of the `<DrawerBody>` to organize links/content. Each group consists of an (optional) group title and a series of navigation items. Most visual props are inherited from the `<DrawerBody>` but can be overridden at the NavGroup level if desired.
 */
export const DrawerNavGroup = React.forwardRef(DrawerNavGroupRender);
DrawerNavGroup.displayName = 'DrawerNavGroup';
// @ts-ignore
DrawerNavGroup.propTypes = {
    ...SharedStylePropTypes,
    ...NavItemSharedStylePropTypes,
    classes: PropTypes.shape({
        title: PropTypes.string,
        root: PropTypes.string,
        subheader: PropTypes.string,
    }),
    // @ts-ignore
    items: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.shape({
                ...SharedStylePropTypes,
                ...NavItemSharedStylePropTypes,
                icon: PropTypes.element,
                itemID: PropTypes.string.isRequired,
                subtitle: PropTypes.string,
                title: PropTypes.string.isRequired,
                onClick: PropTypes.func,
                rightComponent: PropTypes.element,
                statusColor: PropTypes.string,
            }),
            PropTypes.shape({
                ...SharedStylePropTypes,
                icon: PropTypes.element,
                itemID: PropTypes.string.isRequired,
                title: PropTypes.string,
                onClick: PropTypes.func,
            }),
        ])
    ),
    title: PropTypes.string,
    titleColor: PropTypes.string,
    titleContent: PropTypes.element,
    titleDivider: PropTypes.bool,
};
DrawerNavGroup.defaultProps = {
    classes: {},
    items: [],
};
