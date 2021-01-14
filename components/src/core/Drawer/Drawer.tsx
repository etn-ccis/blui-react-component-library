import React, { useEffect, useState, useCallback, ReactNode } from 'react';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import { Drawer, DrawerProps } from '@material-ui/core';
import { DrawerBodyProps } from './DrawerBody';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { InfoListItemProps as BaseInfoListItemProps } from '../InfoListItem';
import { useDrawerLayout } from '../DrawerLayout/contexts/DrawerLayoutContextProvider';
import { DrawerContext } from './DrawerContext';

export const RAIL_WIDTH = 72;
export const RAIL_WIDTH_CONDENSED = 56;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            transition: theme.transitions.create('width', { duration: theme.transitions.duration.leavingScreen }),
            minHeight: '100%',
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
    sideBorder?: string;
};

// type shared by Drawer, DrawerBody, DrawerNavGroup, NestedNavItem
// these types are inherited from the Drawer level to the NestedNavItem
// parent props will be overriden by the child props if defined
export type PXBlueDrawerInheritableProperties = {
    // Background color for the 'active' item
    activeItemBackgroundColor?: string;

    // shape of the active item background
    activeItemBackgroundShape?: 'round' | 'square';

    // Font color for the 'active' item
    activeItemFontColor?: string;

    // Icon color for the 'active' item
    activeItemIconColor?: string;

    // Whether to have chevrons for all menu items
    chevron?: boolean;

    // Icon used to collapse drawer
    // default is expandIcon rotated 180 degrees
    collapseIcon?: JSX.Element;

    // Whether to show a line between all items
    divider?: boolean;

    // Icon used to expand drawer
    expandIcon?: JSX.Element;

    // Whether to hide the paddings reserved for menu item icons
    hidePadding?: boolean;

    // InfoListItem overrides for NavItem
    InfoListItemProps?: Partial<BaseInfoListItemProps>;

    // The color used for the item text
    itemFontColor?: string;

    // The color used for the icon
    itemIconColor?: string;

    // internal API
    // will apply to all menu items when onClick
    onItemSelect?: () => void;

    // Whether to apply material ripple effect to items
    ripple?: boolean;
};

const findChildByType = (children: ReactNode, type: string): JSX.Element[] =>
    React.Children.map(children, (child: any) => {
        if (child && child.type) {
            const name = child.type.displayName;
            if (name && name.includes(type)) {
                return child;
            }
        }
    }) || [];

// type shared by Drawer, DrawerBody, DrawerNavGroup
// inheritable props but not for NestedNavItem
export type PXBlueDrawerNavGroupInheritableProperties = {
    // itemID for the 'active' item
    activeItem?: string;

    // If true, disable semi-bold title styling for the active item's parents in the drawer hierarchy
    disableActiveItemParentStyles?: boolean;

    // background color for nested menu items
    nestedBackgroundColor?: string;

    // Whether to show a line between nested menu items
    nestedDivider?: boolean;

    // Font color for group header
    titleColor?: string;
} & PXBlueDrawerInheritableProperties;

export type DrawerComponentProps = {
    classes?: DrawerClasses;

    // Sets a smaller width when the drawer is using the rail variant
    condensed?: boolean;

    // Describes if this Drawer is used outside of a DrawerLayout
    noLayout?: boolean;

    // Controls the open/closed state of the drawer
    open: boolean;

    // Toggles the drawer side border instead of a drop shadow
    sideBorder?: boolean;

    // Drawer variant type
    variant?: 'persistent' | 'permanent' | 'temporary' | 'rail';

    // Sets the width of the drawer (in px) when open
    width?: number;
} & PXBlueDrawerNavGroupInheritableProperties &
    Omit<DrawerProps, 'translate' | 'variant'>;

const DrawerRenderer: React.ForwardRefRenderFunction<unknown, DrawerComponentProps> = (
    props: DrawerComponentProps,
    ref: any
) => {
    let hoverDelay: NodeJS.Timeout;
    const defaultClasses = useStyles(props);
    const theme = useTheme();
    const { setPadding, setDrawerOpen } = useDrawerLayout();
    const [hover, setHover] = useState(false);
    const {
        activeItem,
        activeItemBackgroundColor,
        activeItemBackgroundShape,
        activeItemFontColor,
        activeItemIconColor,
        chevron,
        classes,
        collapseIcon,
        /* eslint-disable @typescript-eslint/no-unused-vars */
        condensed,
        disableActiveItemParentStyles,
        /* eslint-enable @typescript-eslint/no-unused-vars */
        divider,
        expandIcon,
        hidePadding,
        InfoListItemProps,
        itemFontColor,
        itemIconColor,
        nestedBackgroundColor,
        nestedDivider,
        noLayout = false,
        open,
        onItemSelect,
        ripple,
        sideBorder = false,
        titleColor,
        variant: variantProp,
        width,
        ...drawerProps // for Material-UI's Drawer component
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
            findChildByType(props.children, 'DrawerHeader')
                .slice(0, 1)
                .map((child) => React.cloneElement(child)),
        [props.children]
    );

    const getSubHeader = useCallback(
        (): JSX.Element[] =>
            findChildByType(props.children, 'DrawerSubheader')
                .slice(0, 1)
                .map((child) => React.cloneElement(child, { drawerOpen: isDrawerOpen() })),
        [isDrawerOpen, props.children]
    );

    const getBody = useCallback(
        (): JSX.Element[] =>
            findChildByType(props.children, 'DrawerBody')
                .slice(0, 1)
                .map((child) =>
                    React.cloneElement(child, {
                        activeItem,
                        activeItemBackgroundColor,
                        activeItemFontColor,
                        activeItemIconColor,
                        activeItemBackgroundShape,
                        chevron,
                        collapseIcon,
                        divider,
                        expandIcon,
                        hidePadding,
                        InfoListItemProps,
                        itemFontColor,
                        itemIconColor,
                        nestedBackgroundColor,
                        nestedDivider,
                        ripple,
                        titleColor,
                        drawerOpen: isDrawerOpen(),
                        onItemSelect: () => {
                            if (onItemSelect) {
                                onItemSelect();
                            }
                            setHover(false);
                        },
                    } as DrawerBodyProps)
                ),
        [
            activeItem,
            activeItemBackgroundColor,
            activeItemFontColor,
            activeItemIconColor,
            activeItemBackgroundShape,
            chevron,
            collapseIcon,
            divider,
            expandIcon,
            hidePadding,
            InfoListItemProps,
            itemFontColor,
            itemIconColor,
            nestedBackgroundColor,
            nestedDivider,
            ripple,
            titleColor,
            isDrawerOpen,
            onItemSelect,
            setHover,
            props.children,
        ]
    );

    const getFooter = useCallback(
        (): JSX.Element[] =>
            findChildByType(props.children, 'DrawerFooter')
                .slice(0, 1)
                .map((child) => React.cloneElement(child, { drawerOpen: isDrawerOpen() })),
        [isDrawerOpen, props.children]
    );

    const getDrawerContents = useCallback(
        (): JSX.Element => (
            <>
                {getHeader()}
                <div
                    style={{ flexDirection: 'column', flex: '1 1 0px', display: 'flex' }}
                    onMouseEnter={(): void => {
                        hoverDelay = setTimeout(() => setHover(true), 500);
                    }}
                    onMouseLeave={(): void => {
                        clearTimeout(hoverDelay);
                        setHover(false);
                    }}
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
    const EXPANDED_DRAWER_WIDTH_DEFAULT = theme.spacing(45);
    const COLLAPSED_DRAWER_WIDTH_DEFAULT = theme.spacing(7);

    // Determine the visible width of the drawer
    const getDrawerWidth = useCallback((): number => {
        if (isRail) return condensed ? RAIL_WIDTH_CONDENSED : RAIL_WIDTH;
        if (isDrawerOpen()) return width || EXPANDED_DRAWER_WIDTH_DEFAULT;
        return COLLAPSED_DRAWER_WIDTH_DEFAULT;
    }, [isRail, condensed, theme, isDrawerOpen, width]);

    // Get the width of the content inside the drawer - if the drawer is collapsed, content maintains its size in order to clip
    const getContentWidth = useCallback((): number => {
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
        <Drawer
            ref={ref}
            {...drawerProps}
            variant={variant === 'temporary' ? variant : 'permanent'}
            open={isDrawerOpen()}
            classes={{
                root: clsx(defaultClasses.root, classes.root, {
                    [defaultClasses.expanded]: isDrawerOpen(),
                    [classes.expanded]: isDrawerOpen(),
                }),
                paper: clsx(defaultClasses.paper, classes.paper, {
                    [defaultClasses.sideBorder]: sideBorder,
                    [classes.sideBorder]: sideBorder,
                }),
            }}
            style={Object.assign(
                {
                    width: getDrawerWidth(),
                },
                drawerProps.style
            )}
        >
            <DrawerContext.Provider value={{ isOpen: isDrawerOpen(), variant: variant, condensed: condensed }}>
                <div className={clsx(defaultClasses.content, classes.content)} style={{ width: getContentWidth() }}>
                    {getDrawerContents()}
                </div>
            </DrawerContext.Provider>
        </Drawer>
    );
};

export const DrawerComponent = React.forwardRef(DrawerRenderer);
DrawerComponent.displayName = 'PXBlueDrawer';

export const PXBlueDrawerInheritablePropertiesPropTypes = {
    activeItemBackgroundColor: PropTypes.string,
    activeItemFontColor: PropTypes.string,
    activeItemIconColor: PropTypes.string,
    activeItemBackgroundShape: PropTypes.oneOf(['round', 'square']),
    chevron: PropTypes.bool,
    collapseIcon: PropTypes.element,
    divider: PropTypes.bool,
    expandIcon: PropTypes.element,
    hidePadding: PropTypes.bool,
    InfoListItemProps: PropTypes.object,
    itemFontColor: PropTypes.string,
    itemIconColor: PropTypes.string,
    ripple: PropTypes.bool,
};
export const PXBlueDrawerNavGroupInheritablePropertiesPropTypes = {
    activeItem: PropTypes.string,
    nestedDivider: PropTypes.bool,
    onItemSelect: PropTypes.func,
    titleColor: PropTypes.string,
    ...PXBlueDrawerInheritablePropertiesPropTypes,
};

// @ts-ignore
DrawerComponent.propTypes = {
    classes: PropTypes.shape({
        root: PropTypes.string,
        content: PropTypes.string,
        paper: PropTypes.string,
    }),
    condensed: PropTypes.bool,
    open: PropTypes.bool.isRequired,
    sideBorder: PropTypes.bool,
    variant: PropTypes.oneOf(['persistent', 'permanent', 'temporary', 'rail']),
    width: PropTypes.number,
    ...PXBlueDrawerNavGroupInheritablePropertiesPropTypes,
};
DrawerComponent.defaultProps = {
    classes: {},
    sideBorder: false,
    variant: 'persistent',
    condensed: false,
};
