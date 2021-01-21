import React, { ReactNode, useEffect, useState } from 'react';
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
import { NestedDrawerNavItem, DrawerNavItem } from './DrawerNavItem';
import { DrawerRailItem, ExtendedNavItem } from './DrawerRailItem';
import { mergeStyleProp } from './utilities';
import clsx from 'clsx';

export type DrawerNavGroupProps = SharedStyleProps &
    NavItemSharedStyleProps &
    ListProps & {
        // Custom classes to override default styles
        classes?: DrawerNavGroupClasses;

        // List of navigation items to render
        items: ExtendedNavItem[];

        // Text to display in the group header
        title?: string;

        // Color to use for the group title text
        titleColor?: string;

        // Custom element, substitute for title
        titleContent?: ReactNode;
    };

type DrawerNavGroupClasses = {
    groupHeader?: string;
    listGroup?: string;
    subheader?: string;
};
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        groupHeader: {
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
        listGroup: {
            backgroundColor: (props: DrawerNavGroupProps): string => props.backgroundColor,
            paddingBottom: 0,
            paddingTop: 0,
        },
    })
);

const findID = (item: DrawerNavItem | NestedDrawerNavItem, activeItem: string): boolean => {
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
};

const DrawerNavGroupRender: React.ForwardRefRenderFunction<unknown, DrawerNavGroupProps> = (
    props: DrawerNavGroupProps,
    ref: any
) => {
    const defaultClasses = useStyles(props);
    const theme = useTheme();
    const {
        // Nav Group Props
        classes,
        items,
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
        if (!findID({ items: props.items } as DrawerNavItem, activeItem)) setActiveHierarchyItems([]);
    }, [activeItem]);

    return (
        <NavGroupContext.Provider value={{ activeHierarchy: activeHierarchyItems }}>
            <List
                ref={ref}
                className={clsx(defaultClasses.listGroup, classes.listGroup)}
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
                                    className={clsx(defaultClasses.groupHeader, classes.groupHeader)}
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
            </List>
        </NavGroupContext.Provider>
    );
};
export const DrawerNavGroup = React.forwardRef(DrawerNavGroupRender);
DrawerNavGroup.displayName = 'DrawerNavGroup';
DrawerNavGroup.propTypes = {
    ...SharedStylePropTypes,
    ...NavItemSharedStylePropTypes,
    classes: PropTypes.shape({
        groupHeader: PropTypes.string,
        listGroup: PropTypes.string,
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
    ).isRequired,
    title: PropTypes.string,
    titleColor: PropTypes.string,
    titleContent: PropTypes.element,
};
DrawerNavGroup.defaultProps = {
    classes: {},
};
