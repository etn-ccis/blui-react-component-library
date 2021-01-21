import clsx from 'clsx';
import React, { ReactNode, useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import List, { ListProps } from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import { white, darkBlack } from '@pxblue/colors';
import { useDrawerContext } from './DrawerContext';
import { NewNestedDrawerNavItem, NewDrawerNavItem } from './NewDrawerNavItem';
import { DrawerNavGroupContext } from './DrawerNavGroupContext';
import { NavItemSharedStyleProps, SharedStyleProps } from './types';

export type NewDrawerNavGroupProps = SharedStyleProps &
    NavItemSharedStyleProps &
    ListProps & {
        // color to use for the background
        backgroundColor?: string;

        // Custom classes to override default styles
        classes?: NewDrawerNavGroupClasses;

        // List of navigation items to render
        items: NewDrawerNavItem[];

        // Text to display in the group header
        title?: string;

        // Color to use for the group title text
        titleColor?: string;

        // Custom element, substitute for title
        titleContent?: ReactNode;
    };

type NewDrawerNavGroupClasses = {
    active?: string;
    expandIcon?: string;
    groupHeader?: string;
    listGroup?: string;
    listItemContainer?: string;
    nestedListGroup?: string;
    subheader?: string;
    title?: string;
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
        nestedListGroup: {
            backgroundColor: (props: NewDrawerNavGroupProps): string =>
                props.nestedBackgroundColor || (theme.palette.type === 'light' ? white[200] : darkBlack[100]),
            paddingBottom: 0,
            paddingTop: 0,
        },
        listGroup: {
            backgroundColor: (props: NewDrawerNavGroupProps): string => props.backgroundColor,
            paddingBottom: 0,
            paddingTop: 0,
        },
    })
);

const findID = (item: NewDrawerNavItem | NewNestedDrawerNavItem, activeItem: string): boolean => {
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

// Use the child prop if it exists, or inherit from the parent prop
export const mergeStyleProp = <T extends unknown>(parentValue: T, childValue: T): T | undefined =>
    childValue !== undefined ? childValue : parentValue;

    
const NewDrawerNavGroupRender: React.ForwardRefRenderFunction<unknown, NewDrawerNavGroupProps> = (
    props: NewDrawerNavGroupProps,
    ref: any
) => {
    const defaultClasses = useStyles(props);
    const theme = useTheme();
    const {
        // Nav Group Props
        backgroundColor, // eslint-disable-line @typescript-eslint/no-unused-vars
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
        if (!findID({ items: props.items } as NewDrawerNavItem, activeItem)) setActiveHierarchyItems([]);
    }, [activeItem]);

    return (
        <DrawerNavGroupContext.Provider value={{ activeHierarchy: activeHierarchyItems }}>
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
                {items.map((item: NewDrawerNavItem, index: number) =>
                    variant === 'rail' ? (
                        // <NewDrawerRailItem
                        //     key={`itemList_${index}`}
                        //     // inherited props
                        //     activeItemBackgroundColor={item.activeItemBackgroundColor || props.activeItemBackgroundColor}
                        //     activeItemFontColor={item.activeItemFontColor || props.activeItemFontColor}
                        //     activeItemIconColor={item.activeItemIconColor || props.activeItemIconColor}
                        //     divider={item.divider !== undefined ? item.divider : props.divider}
                        //     itemFontColor={item.itemFontColor || props.itemFontColor}
                        //     itemIconColor={item.itemIconColor || props.itemIconColor}
                        //     onItemSelect={item.onItemSelect ? item.onItemSelect : props.onItemSelect}
                        //     ripple={item.ripple !== undefined ? item.ripple : props.ripple}
                        //     ButtonBaseProps={
                        //         item.ButtonBaseProps !== undefined ? item.ButtonBaseProps : props.ButtonBaseProps
                        //     }
                        //     // rail item props
                        //     activeItem={activeItem}
                        //     condensed={condensed}
                        //     hidden={item.hidden}
                        //     icon={item.icon}
                        //     itemID={item.itemID}
                        //     onClick={item.onClick}
                        //     statusColor={item.statusColor}
                        //     title={item.title}
                        //     classes={classes}
                        // />
                        <Typography>TODO</Typography>
                    ) : (
                        <NewDrawerNavItem
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
        </DrawerNavGroupContext.Provider>
    );
};
export const NewDrawerNavGroup = React.forwardRef(NewDrawerNavGroupRender);
NewDrawerNavGroup.displayName = 'NewDrawerNavGroup';
// TODO FIX ME
NewDrawerNavGroup.propTypes = {
    backgroundColor: PropTypes.string,
    classes: PropTypes.shape({
        active: PropTypes.string,
        expandIcon: PropTypes.string,
        groupHeader: PropTypes.string,
        listGroup: PropTypes.string,
        listItemContainer: PropTypes.string,
        nestedListGroup: PropTypes.string,
        subheader: PropTypes.string,
    }),
    drawerOpen: PropTypes.bool,
    // @ts-ignore
    items: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.element,
            itemID: PropTypes.string.isRequired,
            subtitle: PropTypes.string,
            title: PropTypes.string.isRequired,
            onClick: PropTypes.func,
            rightComponent: PropTypes.element,
            statusColor: PropTypes.string,
        })
    ).isRequired,
};
NewDrawerNavGroup.defaultProps = {
    classes: {},
};
