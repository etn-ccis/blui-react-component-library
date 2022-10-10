import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useTheme, styled } from '@mui/material/styles';
import MUIDrawer, { DrawerProps as MUIDrawerProps } from '@mui/material/Drawer';
import { DrawerBodyProps } from './DrawerBody';
import { useDrawerLayout } from '../DrawerLayout/contexts/DrawerLayoutContextProvider';
import { DrawerContext } from './DrawerContext';
import { NavItemSharedStyleProps, NavItemSharedStylePropTypes, SharedStyleProps, SharedStylePropTypes } from './types';
import { findChildByType, mergeStyleProp } from './utilities';
import clsx from 'clsx';
import { cx } from '@emotion/css';
import drawerClasses, { DrawerClasses, DrawerClassKey, getDrawerUtilityClass } from './DrawerClasses';
import { unstable_composeClasses as composeClasses } from '@mui/base';
import Box from '@mui/material/Box';

export const RAIL_WIDTH = 'calc(3.5rem + 16px)'; // 72;
export const RAIL_WIDTH_CONDENSED = 'calc(1.5rem + 32px)'; //56;

const useUtilityClasses = (ownerState: DrawerProps): Record<DrawerClassKey, string> => {
    const { classes } = ownerState;

    const slots = {
        root: ['root'],
        content: ['content'],
        expanded: ['expanded'],
        paper: ['paper'],
        sideBorder: ['sideBorder'],
    };

    return composeClasses(slots, getDrawerUtilityClass, classes);
};

export type DrawerProps = Omit<MUIDrawerProps, 'translate' | 'variant'> &
    SharedStyleProps &
    NavItemSharedStyleProps & {
        /** The itemID for the 'active' item */
        activeItem?: string;

        /** Custom classes for default style overrides */
        classes?: DrawerClasses;

        /**  Enables a condensed view for the `rail` variant which removes NavItem labels and shows tooltips instead
         *
         * Default: false
         */
        condensed?: boolean;

        /** Describes if this Drawer is used outside of a DrawerLayout
         *
         * Default: false
         */
        noLayout?: boolean;

        /** A callback function to execute whenever an item is clicked */
        onItemSelect?: (id: string) => void;

        /** Controls the open/closed state of the drawer */
        open: boolean;

        /** Automatically open the drawer on hover when closed (persistent variant only)
         *
         * Default: true
         */
        openOnHover?: boolean;

        /** Delay (ms) before triggering open on hover (persistent variant only)
         *
         * Default: 500
         */
        openOnHoverDelay?: number;

        /** Whether to use a side border for the drawer instead of a shadow
         *
         * Default: false
         */
        sideBorder?: boolean;
        /**
         * Behavior of the drawer:
         * - 'permanent': Always open, even when `open` is set to false.
         * - 'persistent': When `open` is set to false, the `<Drawer>` collapses itself as a navigation rail, and hover will make it expand temporarily; when `open` is set to true, it behaves like a permanent `<Drawer>`.
         * - 'temporary': When `open` is set to false, the `<Drawer>` is hidden; when `open` is set to true, it slides in.
         * - 'rail': An always collapsed version of the `<Drawer>` that only displays an icons and titles.
         *
         * Default: 'persistent
         */
        variant?: 'persistent' | 'permanent' | 'temporary' | 'rail';

        /** Sets the width of the drawer when open
         *
         * Default: 22.5rem (360px)
         */
        width?: number | string;
    };
export type DrawerComponentProps = DrawerProps; // alias

const Root = styled(MUIDrawer, {
    name: 'drawer',
    slot: 'root',
    shouldForwardProp: (prop) => prop !== 'backgroundColor' && prop !== 'sideBorder',
})<Pick<DrawerProps, 'backgroundColor' | 'sideBorder' | 'open'>>(({ backgroundColor, sideBorder, open, theme }) => ({
    minHeight: '100%',
    backgroundColor: backgroundColor || 'transparent',
    transition: open
        ? theme.transitions.create('width', {
              duration: theme.transitions.duration.enteringScreen,
          })
        : theme.transitions.create('width', { duration: theme.transitions.duration.leavingScreen }),
    [`& .${drawerClasses.paper}`]: {
        overflow: 'hidden',
        position: 'relative',
        boxShadow: sideBorder ? 'none' : theme.shadows[4],
        borderWidth: sideBorder ? 1 : 0,
        zIndex: 'auto',
    },
}));

const Content = styled(Box, {
    name: 'drawer',
    slot: 'content',
})(() => ({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
}));

const DrawerRenderer: React.ForwardRefRenderFunction<unknown, DrawerProps> = (props: DrawerProps, ref: any) => {
    let hoverDelay: NodeJS.Timeout;
    const defaultClasses = useUtilityClasses(props);
    const theme = useTheme();
    const { setPadding, setDrawerOpen } = useDrawerLayout();
    const [hover, setHover] = useState(false);
    const {
        // Inheritable Props
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
        // Drawer-specific props
        activeItem,
        classes,
        className,
        condensed,
        noLayout = false,
        open,
        openOnHover,
        openOnHoverDelay,
        onItemSelect,
        sideBorder = false,
        variant: variantProp,
        width,
        // Other MUI Drawer Props
        ...drawerProps
    } = props;

    const variant = variantProp || 'persistent'; // to allow drawerLayout to override this
    const isRail = variant === 'rail';

    const isDrawerOpen = useCallback((): boolean => {
        if (variant === 'persistent') return hover || open;
        if (variant === 'permanent' || variant === 'rail') return true;
        return open;
    }, [variant, hover, open]);

    const getHeader = useCallback(
        (): JSX.Element[] =>
            findChildByType(props.children, ['DrawerHeader'])
                .slice(0, 1)
                .map((child) => React.cloneElement(child)),
        [props.children]
    );

    const getSubHeader = useCallback(
        (): JSX.Element[] =>
            findChildByType(props.children, ['DrawerSubheader'])
                .slice(0, 1)
                .map((child) => React.cloneElement(child)),
        [props.children]
    );

    const getBody = useCallback(
        (): JSX.Element[] =>
            findChildByType(props.children, ['DrawerBody'])
                .slice(0, 1)
                .map((child) =>
                    React.cloneElement(child, {
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
                        nestedBackgroundColor: mergeStyleProp(nestedBackgroundColor, child.props.nestedBackgroundColor),
                        nestedDivider: mergeStyleProp(nestedDivider, child.props.nestedDivider),
                        ripple: mergeStyleProp(ripple, child.props.ripple),
                    } as DrawerBodyProps)
                ),
        [
            activeItemBackgroundColor,
            activeItemBackgroundShape,
            activeItemFontColor,
            activeItemIconColor,
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
            onItemSelect,
            props.children,
        ]
    );

    const getFooter = useCallback(
        (): JSX.Element[] =>
            findChildByType(props.children, ['DrawerFooter'])
                .slice(0, 1)
                .map((child) => React.cloneElement(child)),
        [props.children]
    );

    const getDrawerContents = useCallback(
        (): JSX.Element => (
            <>
                {getHeader()}
                <div
                    style={{ flexDirection: 'column', flex: '1 1 0px', display: 'flex' }}
                    onMouseEnter={
                        openOnHover
                            ? (): void => {
                                  hoverDelay = setTimeout(() => setHover(true), openOnHoverDelay);
                              }
                            : undefined
                    }
                    onMouseLeave={
                        openOnHover
                            ? (): void => {
                                  clearTimeout(hoverDelay);
                                  setHover(false);
                              }
                            : undefined
                    }
                >
                    {getSubHeader()}
                    {getBody()}
                    {getFooter()}
                </div>
            </>
        ),
        [setHover, openOnHover, openOnHoverDelay, getSubHeader, getBody, getFooter]
    );

    /* Default Drawer Sizes */
    const EXPANDED_DRAWER_WIDTH_DEFAULT = '22.5rem'; // theme.spacing(45);
    const COLLAPSED_DRAWER_WIDTH_DEFAULT = 'calc(1.5rem + 32px)'; //theme.spacing(7);

    // Determine the visible width of the drawer
    const getDrawerWidth = useCallback((): number | string => {
        if (isRail) return condensed ? RAIL_WIDTH_CONDENSED : RAIL_WIDTH;
        if (isDrawerOpen()) return width || EXPANDED_DRAWER_WIDTH_DEFAULT;
        return COLLAPSED_DRAWER_WIDTH_DEFAULT;
    }, [isRail, condensed, theme, isDrawerOpen, width]);

    // Get the width of the content inside the drawer - if the drawer is collapsed, content maintains its size in order to clip
    const getContentWidth = useCallback((): number | string => {
        if (isRail) return condensed ? RAIL_WIDTH_CONDENSED : RAIL_WIDTH;
        return width || EXPANDED_DRAWER_WIDTH_DEFAULT;
    }, [isRail, condensed, width, theme]);

    // Update the drawer layout padding when the drawer changes
    useEffect(() => {
        if (!noLayout) {
            setPadding(variant === 'temporary' ? 0 : getDrawerWidth());
            setDrawerOpen(isDrawerOpen());
        }
    }, [variant, noLayout, isDrawerOpen, getDrawerWidth]);

    return (
        <Root
            ref={ref}
            {...drawerProps}
            variant={variant === 'temporary' ? variant : 'permanent'}
            open={isDrawerOpen()}
            classes={{
                root: clsx(defaultClasses.root, classes.root, className, {
                    [defaultClasses.expanded]: isDrawerOpen(),
                    [classes.expanded]: isDrawerOpen() && classes.expanded,
                }),
                paper: clsx(defaultClasses.paper, classes.paper, {
                    [defaultClasses.sideBorder]: sideBorder,
                    [classes.sideBorder]: sideBorder && classes.sideBorder,
                }),
            }}
            backgroundColor={backgroundColor}
            style={Object.assign(
                {
                    width: getDrawerWidth(),
                },
                drawerProps.style
            )}
            sideBorder={sideBorder}
        >
            <DrawerContext.Provider
                value={{
                    open: isDrawerOpen(),
                    variant: variant,
                    condensed: condensed,
                    activeItem: activeItem,
                }}
            >
                <Content className={cx(defaultClasses.content, classes.content)} style={{ width: getContentWidth() }}>
                    {getDrawerContents()}
                </Content>
            </DrawerContext.Provider>
        </Root>
    );
};
/**
 * [Drawer](https://brightlayer-ui-components.github.io/react/?path=/info/components-drawer--get-read-me-story) component
 *
 * The `<Drawer>` component is a wrapper around the [Material UI Drawer](https://material-ui.com/api/drawer/) that adds specific Brightlayer UI functionality and styling. It is used to organize content (typically navigation links) in a collapsible side panel.
 *
 * The Brightlayer UI Drawer includes helper components for `<DrawerHeader>`, `<DrawerSubheader>`, `<DrawerBody>`, `<DrawerNavGroup>`, `<DrawerNavItem>`, `<DrawerRailItem>`, `<DrawerFooter>`, and `<DrawerLayout>` to help organize the content.
 */
export const Drawer = React.forwardRef(DrawerRenderer);
Drawer.displayName = 'BLUIDrawer';
// @ts-ignore
Drawer.propTypes = {
    ...SharedStylePropTypes,
    ...NavItemSharedStylePropTypes,
    activeItem: PropTypes.string,
    classes: PropTypes.shape({
        root: PropTypes.string,
        content: PropTypes.string,
        expanded: PropTypes.string,
        paper: PropTypes.string,
        sideBorder: PropTypes.string,
    }),
    condensed: PropTypes.bool,
    noLayout: PropTypes.bool,
    onItemSelect: PropTypes.func,
    open: PropTypes.bool.isRequired,
    openOnHover: PropTypes.bool,
    openOnHoverDelay: PropTypes.number,
    sideBorder: PropTypes.bool,
    variant: PropTypes.oneOf(['persistent', 'permanent', 'temporary', 'rail']),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
Drawer.defaultProps = {
    classes: {},
    openOnHover: true,
    sideBorder: false,
    variant: 'persistent',
    condensed: false,
    openOnHoverDelay: 500,
};
