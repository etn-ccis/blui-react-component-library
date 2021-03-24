import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
    Drawer as MUIDrawer,
    DrawerProps as MUIDrawerProps,
    createStyles,
    makeStyles,
    Theme,
    useTheme,
} from '@material-ui/core';
import { DrawerBodyProps } from './DrawerBody';
import { useDrawerLayout } from '../DrawerLayout/contexts/DrawerLayoutContextProvider';
import { DrawerContext } from './DrawerContext';
import { NavItemSharedStyleProps, NavItemSharedStylePropTypes, SharedStyleProps, SharedStylePropTypes } from './types';
import { findChildByType, mergeStyleProp } from './utilities';
import clsx from 'clsx';

export const RAIL_WIDTH = 'calc(3.5rem + 16px)'; // 72;
export const RAIL_WIDTH_CONDENSED = 'calc(1.5rem + 32px)'; //56;

const useStyles = makeStyles<Theme, DrawerProps>((theme: Theme) =>
    createStyles({
        root: {
            transition: theme.transitions.create('width', { duration: theme.transitions.duration.leavingScreen }),
            minHeight: '100%',
            backgroundColor: (props): string => props.backgroundColor || 'transparent',
            '&$expanded': {
                transition: theme.transitions.create('width', {
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            width: '100%',
        },
        expanded: {},
        paper: {
            overflow: 'hidden',
            position: 'inherit',
            boxShadow: theme.shadows[4],
            borderWidth: 0,
            '&$sideBorder': {
                borderWidth: 1,
                boxShadow: 'none',
            },
        },
        sideBorder: {},
    })
);

type DrawerClasses = {
    /** Styles applied to the drawer content container */
    content?: string;

    /** Styles applied to the root element when the drawer is expanded */
    expanded?: string;

    /** MUI Drawer style override for the root element */
    root?: string;

    /** MUI Drawer style override for desktop viewports */
    paper?: string;

    /** Styles to apply to the root element when using side border */
    sideBorder?: string;
};

export type DrawerProps = Omit<MUIDrawerProps, 'translate' | 'variant'> &
    SharedStyleProps &
    NavItemSharedStyleProps & {
        // the id for the currently active item
        activeItem?: string;

        // custom classes for default style overrides
        classes?: DrawerClasses;

        // Sets a smaller width when the drawer is using the rail variant
        condensed?: boolean;

        // Describes if this Drawer is used outside of a DrawerLayout
        noLayout?: boolean;

        // Function called whenever a navigation item or rail item is clicked
        onItemSelect?: (id: string) => void;

        // Controls the open/closed state of the drawer
        open: boolean;

        // Enables Drawer to automatically open on hover for persistent variants.
        openOnHover?: boolean;

        // Toggles the drawer side border instead of a drop shadow
        sideBorder?: boolean;

        // Drawer variant type
        variant?: 'persistent' | 'permanent' | 'temporary' | 'rail';

        // Sets the width of the drawer (in px) when open
        width?: number | string;
    };
export type DrawerComponentProps = DrawerProps; // alias

const DrawerRenderer: React.ForwardRefRenderFunction<unknown, DrawerProps> = (props: DrawerProps, ref: any) => {
    let hoverDelay: NodeJS.Timeout;
    const defaultClasses = useStyles(props);
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
        condensed,
        noLayout = false,
        open,
        openOnHover,
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
                                  hoverDelay = setTimeout(() => setHover(true), 500);
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
        [setHover, hoverDelay, getSubHeader, getBody, getFooter]
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
        <MUIDrawer
            ref={ref}
            {...drawerProps}
            variant={variant === 'temporary' ? variant : 'permanent'}
            open={isDrawerOpen()}
            classes={{
                root: clsx(defaultClasses.root, classes.root, {
                    [defaultClasses.expanded]: isDrawerOpen(),
                    [classes.expanded]: isDrawerOpen() && classes.expanded,
                }),
                paper: clsx(defaultClasses.paper, classes.paper, {
                    [defaultClasses.sideBorder]: sideBorder,
                    [classes.sideBorder]: sideBorder && classes.sideBorder,
                }),
            }}
            style={Object.assign(
                {
                    width: getDrawerWidth(),
                },
                drawerProps.style
            )}
        >
            <DrawerContext.Provider
                value={{
                    open: isDrawerOpen(),
                    variant: variant,
                    condensed: condensed,
                    activeItem: activeItem,
                }}
            >
                <div className={clsx(defaultClasses.content, classes.content)} style={{ width: getContentWidth() }}>
                    {getDrawerContents()}
                </div>
            </DrawerContext.Provider>
        </MUIDrawer>
    );
};

export const Drawer = React.forwardRef(DrawerRenderer);
Drawer.displayName = 'PXBlueDrawer';
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
};
