import { DrawerProps } from '@material-ui/core';

export type DrawerVariant = DrawerProps['variant'] | 'rail';

export type DrawerContextProps = {
    open: boolean;
    variant: DrawerVariant;
    condensed: boolean;
    activeItem: string;
    onItemSelect?: (itemID: string) => void;
    width?: number;
};

export type SharedStyleProps = {
    // Background color for the 'active' item
    activeItemBackgroundColor?: string;

    // Font color for the 'active' item
    activeItemFontColor?: string;

    // Icon color for the 'active' item
    activeItemIconColor?: string;

    // Whether to show a line between all items
    divider?: boolean;

    // The color used for the item text
    itemFontColor?: string;

    // The color used for the icon
    itemIconColor?: string;

    // Whether to apply material ripple effect to items
    ripple?: boolean;
};

export type NavItemSharedStyleProps = {
    // shape of the active item background
    activeItemBackgroundShape?: 'round' | 'square';

    // Whether to have chevrons for all menu items
    chevron?: boolean;

    // Icon used to collapse drawer
    // default is expandIcon rotated 180 degrees
    collapseIcon?: JSX.Element;

    // Icon used to expand drawer
    expandIcon?: JSX.Element;

    // Whether to hide the paddings reserved for menu item icons
    hidePadding?: boolean;

    // Disables the semi-bold style on parent elements in the selected item hierarchy
    disableActiveItemParentStyles?: boolean;

    // background color for a nested section of menu items
    nestedBackgroundColor?: string;

    // Whether to apply a dividing line under nested navigation items
    nestedDivider?: boolean;
};
