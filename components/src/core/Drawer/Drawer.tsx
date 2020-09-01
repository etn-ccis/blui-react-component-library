import React, { useEffect, useState, useCallback, ReactNode } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, DrawerProps } from '@material-ui/core';
import { DrawerBodyProps } from './DrawerBody';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { InfoListItemProps as BaseInfoListItemProps } from '../InfoListItem';
import { useDrawerLayout } from '../DrawerLayout/contexts/DrawerLayoutContextProvider';

const useStyles = makeStyles({
    paper: {
        overflow: 'hidden',
        position: 'inherit',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
    },
});

type DrawerClasses = {
    root?: string;
    content?: string;
    paper?: string;
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

    // background color for nested menu items
    nestedBackgroundColor?: string;

    // Whether to show a line between nested menu items
    nestedDivider?: boolean;

    // Font color for group header
    titleColor?: string;
} & PXBlueDrawerInheritableProperties;

export type DrawerComponentProps = {
    classes?: DrawerClasses;

    // Describes if this Drawer is used outside of a DrawerLayout
    noLayout?: boolean;

    // Controls the open/closed state of the drawer
    open: boolean;

    // Sets the width of the drawer (in px) when open
    width?: number;
} & PXBlueDrawerNavGroupInheritableProperties &
    Omit<DrawerProps, 'translate'>;

const DrawerRenderer: React.ForwardRefRenderFunction<unknown, DrawerComponentProps> = (
    props: DrawerComponentProps,
    ref: any
) => {
    let hoverDelay: NodeJS.Timeout;
    const defaultClasses = useStyles(props);
    const theme = useTheme();
    const { onPaddingChange } = useDrawerLayout();
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
        titleColor,
        width,
        ...drawerProps // for Material-UI's Drawer component
    } = props;

    const variant = props.variant || 'persistent'; // to allow drawerLayout to override this
    const isDrawerOpen = useCallback((): boolean => {
        if (variant === 'persistent') return hover || open;
        if (variant === 'permanent') return true;
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

    const defaultContentWidth = theme.spacing(45);
    const defaultNavigationRailWidth = theme.spacing(7);

    const containerWidth = isDrawerOpen() ? width || defaultContentWidth : defaultNavigationRailWidth;
    const contentWidth = width || defaultContentWidth;

    useEffect(() => {
        if (!noLayout) onPaddingChange(variant === 'temporary' ? 0 : containerWidth);
    }, [containerWidth, variant, noLayout]);

    return (
        <Drawer
            ref={ref}
            {...drawerProps}
            variant={variant === 'temporary' ? variant : 'permanent'}
            open={isDrawerOpen()}
            classes={{ root: clsx(classes.root), paper: clsx(defaultClasses.paper, classes.paper) }}
            style={Object.assign(
                {
                    minHeight: '100%',
                    width: containerWidth,
                    transition: 'width 175ms cubic-bezier(.4, 0, .2, 1)',
                },
                drawerProps.style
            )}
        >
            <div
                className={clsx(
                    defaultClasses.content,
                    classes.content,
                    'pxb-drawer-content',
                    isDrawerOpen() && 'pxb-drawer-open'
                )}
                style={{ width: contentWidth }}
            >
                {getDrawerContents()}
            </div>
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
    open: PropTypes.bool.isRequired,
    width: PropTypes.number,
    ...PXBlueDrawerNavGroupInheritablePropertiesPropTypes,
};
DrawerComponent.defaultProps = {
    classes: {},
};
