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

type ComponentCatalogType = {
    title: string;
    /**
     * URL to React component doc, or description for why URL is not available
     */
    path: string;
    image: string;
};

export const componentCatalogLinks: ComponentCatalogType[] = [
    {
        title: 'App Bar / Header',
        path: 'app-bar',
        image: AppBar,
    },
    {
        title: 'Channel Value',
        path: 'channel-value',
        image: ChannelValue,
    },
    {
        title: 'Drawer',
        path: 'drawer',
        image: Drawer,
    },
    {
        title: 'Empty State',
        path: 'empty-state',
        image: EmptyState,
    },
    {
        title: 'Hero',
        path: 'hero',
        image: Hero,
    },
    {
        title: 'Info List Item',
        path: 'info-list-item',
        image: InfoListItem,
    },
    {
        title: 'List Item Tag',
        path: 'list-item-tag',
        image: ListItemTag,
    },
    {
        title: 'Scorecard',
        path: 'score-card',
        image: Scorecard,
    },
    {
        title: 'Three Liner',
        path: 'three-liner',
        image: ThreeLiner,
    },
    {
        title: 'Toolbar Menu',
        path: 'toolbar-menu',
        image: ToolbarMenu,
    },
    {
        title: 'User Menu',
        path: 'user-menu',
        image: UserMenu,
    },
];
