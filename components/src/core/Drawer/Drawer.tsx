import React, { useState } from 'react';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import { Drawer, DrawerProps } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            overflow: 'hidden',
            position: 'unset',
        },
        drawer: {
            maxWidth: '85%',
            width: theme.spacing(45),
        },
        smooth: {
            height: '100%',
            transition: 'width 175ms cubic-bezier(.4, 0, .2, 1)',
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
        },
    })
);

// type shared by Drawer, DrawerBody, DrawerNavGroup, NestedNavItem
// these types are inherited from the Drawer level to the NestedNavItem
// parent props will be overriden by the child props if defined
export type PXBlueDrawerInheritableProperties = {
    // Background color for the 'active' item
    activeItemBackgroundColor?: string;

    // Font color for the 'active' item
    activeItemFontColor?: string;

    // Icon color for the 'active' item
    activeItemIconColor?: string;

    // shape of the active item background
    activeItemBackgroundShape?: 'rounded' | 'square';

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

    // Whether to apply material ripple effect to items
    ripple?: boolean;
};

// type shared by Drawer, DrawerBody, DrawerNavGroup
// inheritable props but not for NestedNavItem
export type PXBlueDrawerInheritableGroupProperties = {
    // itemID for the 'active' item
    activeItem?: string;

    // Whether to show a line between nested menu items
    nestedDivider?: boolean;

    // internal API
    // will apply to all menu items when onClick
    onSelect?: () => void;

    // internal API (only public for Drawer)
    // Whether the group is expanded
    open?: boolean;

    // Font color for group header
    titleColor?: string;
} & PXBlueDrawerInheritableProperties;

export type DrawerComponentProps = {
    // drawer width
    width?: number;

    // types of drawer
    // only open or variant is allowed but not both
    variant?: 'permanent' | 'persistent' | 'temporary';
} & PXBlueDrawerInheritableGroupProperties &
    Omit<DrawerProps, 'translate'>;

export const DrawerComponent: React.FC<DrawerComponentProps> = (props) => {
    let hoverDelay: NodeJS.Timeout;
    const classes = useStyles(props);
    const theme = useTheme();
    const [hover, setHover] = useState(false);
    const {
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
        nestedDivider,
        open,
        onSelect,
        ripple,
        titleColor,
        variant,
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
            .map((child) => React.cloneElement(child, { open: isDrawerOpen() }));

    const getBody = (): JSX.Element[] =>
        findChildByType('DrawerBody')
            .slice(0, 1)
            .map((child) => {
                return React.cloneElement(child, {
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
                    nestedDivider,
                    ripple,
                    titleColor,
                    open: isDrawerOpen(),
                    onSelect: () => {
                        if (onSelect) {
                            onSelect();
                        }
                        setHover(false);
                    },
                });
            });

    const getFooter = (): JSX.Element[] =>
        findChildByType('DrawerFooter')
            .slice(0, 1)
            .map((child) => React.cloneElement(child, { open: isDrawerOpen() }));

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
        <Drawer {...drawerProps} open={isDrawerOpen()} classes={{ paper: classes.drawer }}>
            <div className={`${classes.smooth} ${classes.content}`} style={{ width: '100%' }}>
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
                    variant={variant}
                    open={isDrawerOpen()}
                    classes={{ paper: classes.paper }}
                    style={{ minHeight: '100%' }}
                >
                    <div className={classes.smooth} style={{ width: containerWidth }}>
                        <div className={classes.content} style={{ width: contentWidth }}>
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
DrawerComponent.propTypes = {
    chevron: PropTypes.bool,
    collapseIcon: PropTypes.element,
    expandIcon: PropTypes.element,
    open: PropTypes.bool,
    ripple: PropTypes.bool,
    width: PropTypes.number,
};
DrawerComponent.defaultProps = {
    variant: 'permanent',
};
