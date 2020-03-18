import React, { useState } from 'react';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import { Drawer, DrawerProps } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';
import { DrawerBodyProps } from './DrawerBody';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            overflow: 'hidden',
            position: 'unset',
        },
        paperMobile: {
            maxWidth: '85%',
            width: theme.spacing(45),
        },
        smooth: {
            transition: 'width 175ms cubic-bezier(.4, 0, .2, 1)',
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
           width: '100%'
        },
    })
);

type DrawerClasses = {
    root?: string;
    content?: string;
    drawer?: string;
    paper?: string;
    smooth?: string;
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
    // Controls the open/closed state of the drawer
    open: boolean;

    // Sets the width of the drawer (in px) when open
    width?: number;
} & PXBlueDrawerNavGroupInheritableProperties &
    Omit<DrawerProps, 'translate'>;

export const DrawerComponent: React.FC<DrawerComponentProps> = (props) => {
    let hoverDelay: NodeJS.Timeout;
    const defaultClasses = useStyles(props);
    const theme = useTheme();
    const [hover, setHover] = useState(false);
    const {
        activeItem,
        activeItemBackgroundColor,
        activeItemFontColor,
        activeItemIconColor,
        activeItemBackgroundShape,
        chevron,
        classes,
        collapseIcon,
        divider,
        expandIcon,
        hidePadding,
        itemFontColor,
        itemIconColor,
        nestedBackgroundColor,
        nestedDivider,
        open,
        onItemSelect,
        ripple,
        titleColor,
        width,
        ...drawerProps // for Material-UI's Drawer component
    } = props;

    const isDrawerOpen = (): boolean => hover || open;

    const findChildByType = (type: string): JSX.Element[] =>
        React.Children.map(props.children, (child: any) => {
            if (child && child.type) {
                const name = child.type.displayName;
                if (name && name.includes(type)) {
                    return child;
                }
            }
        }) || [];

    const getHeader = (): JSX.Element[] =>
        findChildByType('DrawerHeader')
            .slice(0, 1)
            .map((child) => React.cloneElement(child));

    const getSubHeader = (): JSX.Element[] =>
        findChildByType('DrawerSubheader')
            .slice(0, 1)
            .map((child) => React.cloneElement(child, { drawerOpen: isDrawerOpen() }));

    const getBody = (): JSX.Element[] =>
        findChildByType('DrawerBody')
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
            );

    const getFooter = (): JSX.Element[] =>
        findChildByType('DrawerFooter')
            .slice(0, 1)
            .map((child) => React.cloneElement(child, { drawerOpen: isDrawerOpen() }));

    const getDrawerContents = (): JSX.Element => (
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
    );

    const getMobileNavigationMenu = (): JSX.Element => (
        <Drawer {...props} open={isDrawerOpen()} classes={{ paper: clsx(defaultClasses.paperMobile, props.classes.paper) }}>
            <div className={clsx(defaultClasses.smooth, classes.smooth, defaultClasses.content, classes.content)}>
                {getDrawerContents()}
            </div>
        </Drawer>
    );

    const getDesktopNavigationMenu = (): JSX.Element => {
        const containerWidth = isDrawerOpen() ? width || theme.spacing(45) : theme.spacing(7);
        const contentWidth = width || theme.spacing(45);
        return (
            <>
                <Drawer
                    {...drawerProps}
                    variant={'permanent'}
                    open={isDrawerOpen()}
                    classes={{ paper: clsx(defaultClasses.paper, props.classes.paper) }}
                    style={{ minHeight: '100%' }}
                >
                    <div
                        className={clsx(defaultClasses.smooth, classes.smooth)}
                        style={{ width: containerWidth, height: '100%' }}
                    >
                        <div className={clsx(defaultClasses.content, classes.content)} style={{ width: contentWidth }}>
                            {getDrawerContents()}
                        </div>
                    </div>
                </Drawer>
            </>
        );
    };

    return (
        <>
            <Hidden smUp>{getMobileNavigationMenu()}</Hidden>
            <Hidden xsDown>{getDesktopNavigationMenu()}</Hidden>
        </>
    );
};

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
        paperMobile: PropTypes.string,
        smooth: PropTypes.string,
    }),
    open: PropTypes.bool.isRequired,
    width: PropTypes.number,
    ...PXBlueDrawerNavGroupInheritablePropertiesPropTypes,
};
DrawerComponent.defaultProps = {
    variant: 'permanent',
};
DrawerComponent.defaultProps = {
    classes: {},
};
