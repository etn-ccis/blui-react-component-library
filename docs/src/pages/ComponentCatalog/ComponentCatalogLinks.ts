import AppBar from '../../assets/component-catalog/app-bar.png';
import ChannelValue from '../../assets/component-catalog/channel-value.png';
import CollapsibleHeaderLayout from '../../assets/component-catalog/collapsible-header-layout.png';
import Drawer from '../../assets/component-catalog/drawer.png';
import EmptyState from '../../assets/component-catalog/empty-state.png';
import Hero from '../../assets/component-catalog/hero.png';
import Icon from '../../assets/component-catalog/icon.png';
import InfoListItem from '../../assets/component-catalog/info-list-item.png';
import ListItemTag from '../../assets/component-catalog/list-item-tag.png';
import MobileStepper from '../../assets/component-catalog/mobile-stepper.png';
import Scorecard from '../../assets/component-catalog/scorecard.png';
import ThreeLiner from '../../assets/component-catalog/three-liner.png';
import ToolbarMenu from '../../assets/component-catalog/toolbar-menu.png';
import Typography from '../../assets/component-catalog/typography.png';
import UserMenu from '../../assets/component-catalog/user-menu.png';

const branchSuffix = window.location.hostname === 'brightlayer-ui.github.io' ? '' : '-dev';

type ComponentCatalogType = {
    title: string;
    /**
     * URL to Angular component doc, or description for why URL is not available
     */
    angular: string;
    /**
     * URL to React component doc, or description for why URL is not available
     */
    react: string;
    /**
     * URL to React Native component doc, or description for why URL is not available
     */
    reactNative: string;
    image: string;
};

export const componentCatalogLinks: ComponentCatalogType[] = [
    {
        title: 'App Bar / Header',
        angular: `https://brightlayer-ui-components.github.io/angular${branchSuffix}/components/app-bar/examples`,
        react: `https://brightlayer-ui-components.github.io/react${branchSuffix}/components/app-bar/examples`,
        reactNative: `https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--header`,
        image: AppBar,
    },
    {
        title: 'Channel Value',
        angular: `https://brightlayer-ui-components.github.io/angular${branchSuffix}/components/channel-value/examples`,
        react: `https://brightlayer-ui-components.github.io/react${branchSuffix}/components/channel-value/examples`,
        reactNative: `https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--channel-value`,
        image: ChannelValue,
    },
    {
        title: 'Collapsible Header Layout',
        angular: `Included as part of Brightlayer UI's App Bar Component`,
        react: `Included as part of Brightlayer UI's App Bar Component`,
        reactNative: `https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--collapsible-header-layout`,
        image: CollapsibleHeaderLayout,
    },
    {
        title: 'Drawer',
        angular: `https://brightlayer-ui-components.github.io/angular${branchSuffix}/components/drawer/examples`,
        react: `https://brightlayer-ui-components.github.io/react${branchSuffix}/components/drawer/examples`,
        reactNative: `https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--drawer`,
        image: Drawer,
    },
    {
        title: 'Empty State',
        angular: `https://brightlayer-ui-components.github.io/angular${branchSuffix}/components/empty-state/examples`,
        react: `https://brightlayer-ui-components.github.io/react${branchSuffix}/components/empty-state/examples`,
        reactNative: `https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--empty-state`,
        image: EmptyState,
    },
    {
        title: 'Hero',
        angular: `https://brightlayer-ui-components.github.io/angular${branchSuffix}/components/hero/examples`,
        react: `https://brightlayer-ui-components.github.io/react${branchSuffix}/components/hero/examples`,
        reactNative: `https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--hero`,
        image: Hero,
    },
    {
        title: 'Icon (wrapper for Brightlayer UI icons)',
        angular: `Offered by Angular Material's icon fonts and icon SVGs`,
        react: `Offered by MUI's icon fonts and icon components`,
        reactNative: `https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--icons`,
        image: Icon,
    },
    {
        title: 'Info List Item',
        angular: `https://brightlayer-ui-components.github.io/angular${branchSuffix}/components/info-list-item/examples`,
        react: `https://brightlayer-ui-components.github.io/react${branchSuffix}/components/info-list-item/examples`,
        reactNative: `https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--info-list-item`,
        image: InfoListItem,
    },
    {
        title: 'List Item Tag',
        angular: `https://brightlayer-ui-components.github.io/angular${branchSuffix}/components/list-item-tag/examples`,
        react: `https://brightlayer-ui-components.github.io/react${branchSuffix}/components/list-item-tag/examples`,
        reactNative: `https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--list-item-tag`,
        image: ListItemTag,
    },
    {
        title: 'Mobile Stepper',
        angular: `https://brightlayer-ui-components.github.io/angular${branchSuffix}/components/mobile-stepper/examples`,
        react: `Offered by MUI's Stepper component`,
        reactNative: `https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--mobile-stepper`,
        image: MobileStepper,
    },
    {
        title: 'Scorecard',
        angular: `https://brightlayer-ui-components.github.io/angular${branchSuffix}/components/score-card/examples`,
        react: `https://brightlayer-ui-components.github.io/react${branchSuffix}/components/score-card/examples`,
        reactNative: `https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--score-card`,
        image: Scorecard,
    },
    {
        title: 'Three Liner',
        angular: `https://brightlayer-ui-components.github.io/angular${branchSuffix}/components/three-liner/examples`,
        react: `https://brightlayer-ui-components.github.io/react${branchSuffix}/components/three-liner/examples`,
        reactNative: `Not Available`,
        image: ThreeLiner,
    },
    {
        title: 'Toolbar Menu',
        angular: `https://brightlayer-ui-components.github.io/angular${branchSuffix}/components/toolbar-menu/examples`,
        react: `https://brightlayer-ui-components.github.io/react${branchSuffix}/components/toolbar-menu/examples`,
        reactNative: `Not Available`,
        image: ToolbarMenu,
    },
    {
        title: 'Typography',
        angular: `Offered by Angular Material`,
        react: `Offered by MUI`,
        reactNative: `https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--typography`,
        image: Typography,
    },
    {
        title: 'User Menu',
        angular: `https://brightlayer-ui-components.github.io/angular${branchSuffix}/components/user-menu/examples`,
        react: `https://brightlayer-ui-components.github.io/react${branchSuffix}/components/user-menu/examples`,
        reactNative: `https://brightlayer-ui-components.github.io/react-native/?path=/info/components-documentation--user-menu`,
        image: UserMenu,
    },
];
