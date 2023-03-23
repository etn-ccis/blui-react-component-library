import AppBar from '../assets/component-catalog/app-bar.png';
import ChannelValue from '../assets/component-catalog/channel-value.png';
import Drawer from '../assets/component-catalog/drawer.png';
import EmptyState from '../assets/component-catalog/empty-state.png';
import Hero from '../assets/component-catalog/hero.png';
import InfoListItem from '../assets/component-catalog/info-list-item.png';
import ListItemTag from '../assets/component-catalog/list-item-tag.png';
import Scorecard from '../assets/component-catalog/scorecard.png';
import ThreeLiner from '../assets/component-catalog/three-liner.png';
import ToolbarMenu from '../assets/component-catalog/toolbar-menu.png';
import UserMenu from '../assets/component-catalog/user-menu.png';

const branchSuffix = window.location.hostname === 'brightlayer-ui.github.io' ? '' : '-dev';

type ComponentCatalogType = {
    title: string;
    /**
     * URL to React component doc, or description for why URL is not available
     */
    react: string;
    image: string;
};

export const componentCatalogLinks: ComponentCatalogType[] = [
    {
        title: 'App Bar / Header',
        react: `https://brightlayer-ui-components.github.io/react${branchSuffix}/components/app-bar/examples`,
        image: AppBar,
    },
    {
        title: 'Channel Value',
        react: `https://brightlayer-ui-components.github.io/react${branchSuffix}/components/channel-value/examples`,
        image: ChannelValue,
    },
    {
        title: 'Drawer',
        react: `https://brightlayer-ui-components.github.io/react${branchSuffix}/components/drawer/examples`,
        image: Drawer,
    },
    {
        title: 'Empty State',
        react: `https://brightlayer-ui-components.github.io/react${branchSuffix}/components/empty-state/examples`,
        image: EmptyState,
    },
    {
        title: 'Hero',
        react: `https://brightlayer-ui-components.github.io/react${branchSuffix}/components/hero/examples`,
        image: Hero,
    },
    {
        title: 'Info List Item',
        react: `https://brightlayer-ui-components.github.io/react${branchSuffix}/components/info-list-item/examples`,
        image: InfoListItem,
    },
    {
        title: 'List Item Tag',
        react: `https://brightlayer-ui-components.github.io/react${branchSuffix}/components/list-item-tag/examples`,
        image: ListItemTag,
    },
    {
        title: 'Scorecard',
        react: `https://brightlayer-ui-components.github.io/react${branchSuffix}/components/score-card/examples`,
        image: Scorecard,
    },
    {
        title: 'Three Liner',
        react: `https://brightlayer-ui-components.github.io/react${branchSuffix}/components/three-liner/examples`,
        image: ThreeLiner,
    },
    {
        title: 'Toolbar Menu',
        react: `https://brightlayer-ui-components.github.io/react${branchSuffix}/components/toolbar-menu/examples`,
        image: ToolbarMenu,
    },
    {
        title: 'User Menu',
        react: `https://brightlayer-ui-components.github.io/react${branchSuffix}/components/user-menu/examples`,
        image: UserMenu,
    },
];
