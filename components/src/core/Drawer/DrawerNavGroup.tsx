import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDrawerContext } from './DrawerContext';
import { NavGroupContext } from './NavGroupContext';
import {
    createStyles,
    makeStyles,
    Theme,
    useTheme,
    List,
    ListProps,
    Typography,
    ListSubheader,
    Divider,
} from '@material-ui/core';
import { NavItemSharedStyleProps, NavItemSharedStylePropTypes, SharedStyleProps, SharedStylePropTypes } from './types';
import { DrawerNavItem, DrawerNavItemProps, NestedDrawerNavItemProps } from './DrawerNavItem';
import { DrawerRailItem, DrawerRailItemProps, ExtendedNavItem } from './DrawerRailItem';
import { findChildByType, mergeStyleProp } from './utilities';
import clsx from 'clsx';

export type DrawerNavGroupProps = SharedStyleProps &
    NavItemSharedStyleProps &
    ListProps & {
        // Custom classes to override default styles
        classes?: DrawerNavGroupClasses;

        // List of navigation items to render
        items?: ExtendedNavItem[];

        // Text to display in the group header
        title?: string;

        // Color to use for the group title text
        titleColor?: string;

        // Custom element, substitute for title
        titleContent?: ReactNode;
    };

type DrawerNavGroupClasses = {
    root?: string;
    subheader?: string;
    title?: string;
};
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: (props: DrawerNavGroupProps): string => props.backgroundColor,
            paddingBottom: 0,
            paddingTop: 0,
        },
        title: {
            display: 'block',
            alignItems: 'center',
            lineHeight: '3rem',
            height: theme.spacing(6),
            fontWeight: 600,
        },
        subheader: {
            paddingBottom: 0,
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            position: 'inherit',
            cursor: 'text',
        },
    })
);

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
    const defaultClasses = useStyles(props);
    const theme = useTheme();
    const {
        // Nav Group Props
        children,
        classes,
        items = [],
        title,
        titleColor = theme.palette.text.primary,
        titleContent,
        // Shared Style Props
        activeItemBackgroundColor,
        activeItemBackgroundShape,
        activeItemFontColor,
        activeItemIconColor,
        backgroundColor, // eslint-disable-line @typescript-eslint/no-unused-vars
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
        ...otherListProps
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
            <List
                ref={ref}
                className={clsx(defaultClasses.root, classes.root)}
                subheader={
                    variant !== 'rail' && (
                        <ListSubheader
                            className={clsx(defaultClasses.subheader, classes.subheader)}
                            style={{
                                color: drawerOpen ? titleColor : 'transparent',
                            }}
                        >
                            {title && (
                                <Typography
                                    noWrap
                                    variant={'overline'}
                                    className={clsx(defaultClasses.title, classes.title)}
                                >
                                    {title}
                                </Typography>
                            )}
                            {titleContent}
                        </ListSubheader>
                    )
                }
                {...otherListProps}
            >
                {variant !== 'rail' && <div key={`${title}_title`}>{(title || titleContent) && <Divider />}</div>}
                {items.map((item: ExtendedNavItem, index: number) =>
                    variant === 'rail' ? (
                        <DrawerRailItem
                            key={`itemList_${index}`}
                            // {...item}
                            // inherited props
                            activeItemBackgroundColor={mergeStyleProp(
                                activeItemBackgroundColor,
                                item.activeItemBackgroundColor
                            )}
                            activeItemFontColor={mergeStyleProp(activeItemFontColor, item.activeItemFontColor)}
                            activeItemIconColor={mergeStyleProp(activeItemIconColor, item.activeItemIconColor)}
                            backgroundColor={mergeStyleProp(backgroundColor, item.backgroundColor)}
                            divider={mergeStyleProp(divider, item.divider)}
                            itemFontColor={mergeStyleProp(itemFontColor, item.itemFontColor)}
                            itemIconColor={mergeStyleProp(itemIconColor, item.itemIconColor)}
                            ripple={mergeStyleProp(ripple, item.ripple)}
                            ButtonBaseProps={item.ButtonBaseProps}
                            // rail item props
                            hidden={item.hidden}
                            icon={item.icon}
                            itemID={item.itemID}
                            onClick={item.onClick}
                            statusColor={item.statusColor}
                            title={item.title}
                        />
                    ) : (
                        <DrawerNavItem
                            key={`itemList_${index}`}
                            {...item}
                            activeItemBackgroundColor={mergeStyleProp(
                                activeItemBackgroundColor,
                                item.activeItemBackgroundColor
                            )}
                            activeItemBackgroundShape={mergeStyleProp(
                                activeItemBackgroundShape,
                                item.activeItemBackgroundShape
                            )}
                            activeItemFontColor={mergeStyleProp(activeItemFontColor, item.activeItemFontColor)}
                            activeItemIconColor={mergeStyleProp(activeItemIconColor, item.activeItemIconColor)}
                            backgroundColor={mergeStyleProp(backgroundColor, item.backgroundColor)}
                            chevron={mergeStyleProp(chevron, item.chevron)}
                            collapseIcon={mergeStyleProp(collapseIcon, item.collapseIcon)}
                            disableActiveItemParentStyles={mergeStyleProp(
                                disableActiveItemParentStyles,
                                item.disableActiveItemParentStyles
                            )}
                            divider={mergeStyleProp(divider, item.divider)}
                            expandIcon={mergeStyleProp(expandIcon, item.expandIcon)}
                            hidePadding={mergeStyleProp(hidePadding, item.hidePadding)}
                            itemFontColor={mergeStyleProp(itemFontColor, item.itemFontColor)}
                            itemIconColor={mergeStyleProp(itemIconColor, item.itemIconColor)}
                            nestedBackgroundColor={mergeStyleProp(nestedBackgroundColor, item.nestedBackgroundColor)}
                            nestedDivider={mergeStyleProp(nestedDivider, item.nestedDivider)}
                            ripple={mergeStyleProp(ripple, item.ripple)}
                            depth={0}
                            isInActiveTree={activeHierarchyItems.includes(item.itemID)}
                            notifyActiveParent={(ids: string[]): void => {
                                if (JSON.stringify(activeHierarchyItems) !== JSON.stringify(ids)) {
                                    // Sets the list of active IDs when we get a callback from an active child
                                    setActiveHierarchyItems(ids.concat(item.itemID));
                                }
                            }}
                        />
                    )
                )}
                {getChildren()}
            </List>
        </NavGroupContext.Provider>
    );
};
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
        })
    ),
    title: PropTypes.string,
    titleColor: PropTypes.string,
    titleContent: PropTypes.element,
};
DrawerNavGroup.defaultProps = {
    classes: {},
    items: [],
};
