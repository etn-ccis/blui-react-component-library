import { DrawerProps } from '@material-ui/core/Drawer';
import PropTypes from 'prop-types';

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
    /** Background color for the 'active' item */
    activeItemBackgroundColor?: string;

    /** Font color for the 'active' item */
    activeItemFontColor?: string;

    /** Icon color for the 'active' item */
    activeItemIconColor?: string;

    /** Background color for the item(s) */
    backgroundColor?: string;

    /** Whether to show a line between all items */
    divider?: boolean;

    /** The color used for the item text */
    itemFontColor?: string;

    /** The color used for the icon */
    itemIconColor?: string;

    /** Whether to apply material ripple effect to items */
    ripple?: boolean;
};

export type NavItemSharedStyleProps = {
    /** shape of the active item background */
    activeItemBackgroundShape?: 'round' | 'square';

    /** Whether to have chevrons for all menu items */
    chevron?: boolean;

    /** Icon used to collapse nav group
     *
     * Default: expandIcon rotated 180 degrees
     */
    collapseIcon?: JSX.Element;

    /** Icon used to expand nav group */
    expandIcon?: JSX.Element;

    /** Whether to hide the paddings reserved for menu item icons */
    hidePadding?: boolean;

    /** Disables the semi-bold style on parent elements in the selected item hierarchy */
    disableActiveItemParentStyles?: boolean;

    /** background color for a nested section of menu items */
    nestedBackgroundColor?: string;

    /** Whether to apply a dividing line under nested navigation items */
    nestedDivider?: boolean;
};

export const SharedStylePropTypes = {
    activeItemBackgroundColor: PropTypes.string,
    activeItemFontColor: PropTypes.string,
    activeItemIconColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    divider: PropTypes.bool,
    itemFontColor: PropTypes.string,
    itemIconColor: PropTypes.string,
    ripple: PropTypes.bool,
};

export const NavItemSharedStylePropTypes = {
    activeItemBackgroundShape: PropTypes.oneOf(['round', 'square']),
    chevron: PropTypes.bool,
    collapseIcon: PropTypes.element,
    expandIcon: PropTypes.element,
    hidePadding: PropTypes.bool,
    disableActiveItemParentStyles: PropTypes.bool,
    nestedBackgroundColor: PropTypes.string,
    nestedDivider: PropTypes.bool,
};
