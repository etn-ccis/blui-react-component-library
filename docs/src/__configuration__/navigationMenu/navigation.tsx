import React from 'react';
import { ComponentPreviewPage } from '../../pages';
import { DummyExamplesComponent } from '../../componentDocs/DummyDataForComponent';

// API Docs markdown
import DrawerNavGroupAPIDocs from '../../componentDocs/DrawerNavGroup/markdown/DrawerNavGroupAPIDocs.mdx';
import DrawerAPIDocs from '../../componentDocs/Drawer/markdown/DrawerAPIDocs.mdx';
import DrawerHeaderAPIDocs from '../../componentDocs/DrawerHeader/markdown/DrawerHeaderAPIDocs.mdx';
import DrawerFooterAPIDocs from '../../componentDocs/DrawerFooter/markdown/DrawerFooterAPIDocs.mdx';
import DrawerBodyAPIDocs from '../../componentDocs/DrawerBody/markdown/DrawerBodyAPIDocs.mdx';
import DrawerRailItemAPIDocs from '../../componentDocs/DrawerRailItem/markdown/DrawerRailItemAPIDocs.mdx';
import DrawerNavItemAPIDocs from '../../componentDocs/DrawerNavItem/markdown/DrawerNavItemAPIDocs.mdx';
import DrawerLayoutAPIDocs from '../../componentDocs/DrawerLayout/markdown/DrawerLayoutAPIDocs.mdx';
import DrawerSubheaderAPIDocs from '../../componentDocs/DrawerSubheader/markdown/DrawerSubheaderAPIDocs.mdx';
import ChannelValueAPIDocs from '../../componentDocs/ChannelValue/markdown/ChannelValueAPIDocs.mdx';
import EmptyStateAPIDocs from '../../componentDocs/EmptyState/markdown/EmptyStateAPIDocs.mdx';
import HeroAPIDocs from '../../componentDocs/Hero/markdown/HeroAPIDocs.mdx';
import InfoListItemAPIDocs from '../../componentDocs/InfoListItem/markdown/InfoListItemAPIDocs.mdx';
import AppBarAPIDocs from '../../componentDocs/AppBar/markdown/AppBarAPIDocs.mdx';
import ListItemTagAPIDocs from '../../componentDocs/ListItemTag/markdown/ListItemTagAPIDocs.mdx';
import UserMenuAPIDocs from '../../componentDocs/UserMenu/markdown/UserMenuAPIDocs.mdx';
import ThreeLinerAPIDocs from '../../componentDocs/ThreeLiner/markdown/ThreeLinerAPIDocs.mdx';
import SpacerAPIDocs from '../../componentDocs/Spacer/markdown/SpacerAPIDocs.mdx';
import ScoreCardAPIDocs from '../../componentDocs/ScoreCard/markdown/ScoreCardAPIDocs.mdx';
import ToolbarMenuAPIDocs from '../../componentDocs/ToolbarMenu/markdown/ToolbarMenuAPIDocs.mdx';

// Examples markdown
import DrawerNavItemExamples from '../../componentDocs/DrawerNavItem/markdown/DrawerNavItemExamples.mdx';
import DrawerFooterExamples from '../../componentDocs/DrawerFooter/markdown/DrawerFooterExamples.mdx';
import DrawerBodyExamples from '../../componentDocs/DrawerBody/markdown/DrawerBodyExamples.mdx';
import DrawerNavGroupExamples from '../../componentDocs/DrawerNavGroup/markdown/DrawerNavGroupExamples.mdx';
import DrawerExamples from '../../componentDocs/Drawer/markdown/DrawerExamples.mdx';
import DrawerHeaderExamples from '../../componentDocs/DrawerHeader/markdown/DrawerHeaderExamples.mdx';
import DrawerSubheaderExamples from '../../componentDocs/DrawerSubheader/markdown/DrawerSubheaderExamples.mdx';
import EmptyStateExamples from '../../componentDocs/EmptyState/markdown/EmptyStateExamples.mdx';
import HeroExamples from '../../componentDocs/Hero/markdown/HeroExamples.mdx';
import ListItemTagExamples from '../../componentDocs/ListItemTag/markdown/ListItemTagExamples.mdx';
import InfoListItemExamples from '../../componentDocs/InfoListItem/markdown/InfoListItemExamples.mdx';
import DrawerLayoutExamples from '../../componentDocs/DrawerLayout/markdown/DrawerLayoutExamples.mdx';
import AppBarExamples from '../../componentDocs/AppBar/markdown/AppBarExamples.mdx';
import UserMenuExamples from '../../componentDocs/UserMenu/markdown/UserMenuExamples.mdx';
import ChannelValueExamples from '../../componentDocs/ChannelValue/markdown/ChannelValueExamples.mdx';
import ToolbarMenuExamples from '../../componentDocs/ToolbarMenu/markdown/ToolbarMenuExamples.mdx';
import ScoreCardExamples from '../../componentDocs/ScoreCard/markdown/ScoreCardExamples.mdx';
import SpacerExamples from '../../componentDocs/Spacer/markdown/SpacerExamples.mdx';
import ThreeLinerExamples from '../../componentDocs/ThreeLiner/markdown/ThreeLinerExamples.mdx';
import DrawerRailItemExamples from '../../componentDocs/DrawerRailItem/markdown/DrawerRailItemExamples.mdx';

// Playground components
import { AppBarPlaygroundComponent } from '../../componentDocs/AppBar/playground/PlaygroundPage';
import { ChannelValuePlaygroundComponent } from '../../componentDocs/ChannelValue/playground';
import { DrawerPlaygroundComponent } from '../../componentDocs/Drawer/playground';
import { DrawerHeaderPlaygroundComponent } from '../../componentDocs/DrawerHeader/playground';
import { DrawerSubheaderPlaygroundComponent } from '../../componentDocs/DrawerSubheader/playground';
import { DrawerFooterPlaygroundComponent } from '../../componentDocs/DrawerFooter/playground';
import { DrawerNavGroupPlaygroundComponent } from '../../componentDocs/DrawerNavGroup/playground';
import { DrawerNavItemPlaygroundComponent } from '../../componentDocs/DrawerNavItem/playground';
import { DrawerRailItemPlaygroundComponent } from '../../componentDocs/DrawerRailItem/playground';
import { EmptyStatePlaygroundComponent } from '../../componentDocs/EmptyState/playground';
import { HeroPlaygroundComponent } from '../../componentDocs/Hero/playground';
import { InfoListItemPlaygroundComponent } from '../../componentDocs/InfoListItem/playground';
import { ListItemTagPlaygroundComponent } from '../../componentDocs/ListItemTag/playground';
// import { SpacerPlaygroundComponent } from '../../componentDocs/Spacer/playground';
import { ScoreCardPlaygroundComponent } from '../../componentDocs/ScoreCard/playground';
import { ThreeLinerPlaygroundComponent } from '../../componentDocs/ThreeLiner/playground';
import { ToolbarMenuPlaygroundComponent } from '../../componentDocs/ToolbarMenu/playground';
import { UserMenuPlaygroundComponent } from '../../componentDocs/UserMenu/playground';

export type SimpleNavItem = {
    title: string;
    url?: string;
    icon?: JSX.Element;
    pages?: SimpleNavItem[];
    component?: JSX.Element;
    children?: SimpleNavItem[];
};

export type SimpleGroupNavGroupItem = {
    groupTitle: string;
    items: SimpleNavItem[];
};

export const pageDefinitions: SimpleGroupNavGroupItem[] = [
    {
        groupTitle: 'Components',
        items: [
            {
                title: 'App Bar',
                url: '/components/app-bar',
                component: <ComponentPreviewPage title={'App Bar'} />,
                children: [
                    {
                        title: 'Examples',
                        url: 'examples',
                        component: <AppBarExamples />,
                    },
                    {
                        title: 'API Docs',
                        url: 'api-docs',
                        component: <AppBarAPIDocs />,
                    },
                    {
                        title: 'Playground',
                        url: 'playground',
                        component: <AppBarPlaygroundComponent />,
                    },
                ],
            },
            {
                title: 'Channel Value',
                url: '/components/channel-value',
                component: <ComponentPreviewPage title={'Channel Value'} />,
                children: [
                    {
                        title: 'Examples',
                        url: 'examples',
                        component: <ChannelValueExamples />,
                    },
                    {
                        title: 'API Docs',
                        url: 'api-docs',
                        component: <ChannelValueAPIDocs />,
                    },
                    {
                        title: 'Playground',
                        url: 'playground',
                        component: <ChannelValuePlaygroundComponent />,
                    },
                ],
            },
            {
                title: 'Drawer',
                url: '/components',
                pages: [
                    {
                        title: 'Drawer',
                        url: '/drawer',
                        component: <ComponentPreviewPage title={'Drawer'} />,
                        children: [
                            {
                                title: 'Examples',
                                url: 'examples',
                                component: <DrawerExamples />,
                            },
                            {
                                title: 'API Docs',
                                url: 'api-docs',
                                component: <DrawerAPIDocs />,
                            },
                            {
                                title: 'Playground',
                                url: 'playground',
                                component: <DrawerPlaygroundComponent />,
                            },
                        ],
                    },
                    {
                        title: 'Drawer Header',
                        url: '/drawer/drawer-header',
                        component: <ComponentPreviewPage title={'Drawer Header'} />,
                        children: [
                            {
                                title: 'Examples',
                                url: 'examples',
                                component: <DrawerHeaderExamples />,
                            },
                            {
                                title: 'API Docs',
                                url: 'api-docs',
                                component: <DrawerHeaderAPIDocs />,
                            },
                            {
                                title: 'Playground',
                                url: 'playground',
                                component: <DrawerHeaderPlaygroundComponent />,
                            },
                        ],
                    },
                    {
                        title: 'Drawer Subheader',
                        url: '/drawer-sub-header',
                        component: <ComponentPreviewPage title={'Drawer Subheader'} />,
                        children: [
                            {
                                title: 'Examples',
                                url: 'examples',
                                component: <DrawerSubheaderExamples />,
                            },
                            {
                                title: 'API Docs',
                                url: 'api-docs',
                                component: <DrawerSubheaderAPIDocs />,
                            },
                            {
                                title: 'Playground',
                                url: 'playground',
                                component: <DrawerSubheaderPlaygroundComponent />,
                            },
                        ],
                    },
                    {
                        title: 'Drawer Footer',
                        url: '/drawer-footer',
                        component: <ComponentPreviewPage title={'Drawer Footer'} />,
                        children: [
                            {
                                title: 'Examples',
                                url: 'examples',
                                component: <DrawerFooterExamples />,
                            },
                            {
                                title: 'API Docs',
                                url: 'api-docs',
                                component: <DrawerFooterAPIDocs />,
                            },
                            {
                                title: 'Playground',
                                url: 'playground',
                                component: <DrawerFooterPlaygroundComponent />,
                            },
                        ],
                    },
                    {
                        title: 'Drawer Body',
                        url: '/drawer-body',
                        component: <ComponentPreviewPage title={'Drawer Body'} />,
                        children: [
                            {
                                title: 'Examples',
                                url: 'examples',
                                component: <DrawerBodyExamples />,
                            },
                            {
                                title: 'API Docs',
                                url: 'api-docs',
                                component: <DrawerBodyAPIDocs />,
                            },
                        ],
                    },
                    {
                        title: 'Drawer Nav Item',
                        url: '/drawer/drawer-nav-item',
                        component: <ComponentPreviewPage title={'Drawer Nav Item'} />,
                        children: [
                            {
                                title: 'Examples',
                                url: 'examples',
                                component: <DrawerNavItemExamples />,
                            },
                            {
                                title: 'API Docs',
                                url: 'api-docs',
                                component: <DrawerNavItemAPIDocs />,
                            },
                            {
                                title: 'Playground',
                                url: 'playground',
                                component: <DrawerNavItemPlaygroundComponent />,
                            },
                        ],
                    },
                    {
                        title: 'Drawer Nav Group',
                        url: '/drawer/drawer-nav-group',
                        component: <ComponentPreviewPage title={'Drawer Nav Group'} />,
                        children: [
                            {
                                title: 'Examples',
                                url: 'examples',
                                component: <DrawerNavGroupExamples />,
                            },
                            {
                                title: 'API Docs',
                                url: 'api-docs',
                                component: <DrawerNavGroupAPIDocs />,
                            },
                            {
                                title: 'Playground',
                                url: 'playground',
                                component: <DrawerNavGroupPlaygroundComponent />,
                            },
                        ],
                    },
                    {
                        title: 'Drawer Layout',
                        url: '/drawer-layout',
                        component: <ComponentPreviewPage title={'Drawer Layout'} />,
                        children: [
                            {
                                title: 'Examples',
                                url: 'examples',
                                component: <DrawerLayoutExamples />,
                            },
                            {
                                title: 'API Docs',
                                url: 'api-docs',
                                component: <DrawerLayoutAPIDocs />,
                            },
                        ],
                    },
                    {
                        title: 'Drawer Rail Item',
                        url: '/drawer-rail-item',
                        component: <ComponentPreviewPage title={'Drawer Rail Item'} />,
                        children: [
                            {
                                title: 'Examples',
                                url: 'examples',
                                component: <DrawerRailItemExamples />,
                            },
                            {
                                title: 'API Docs',
                                url: 'api-docs',
                                component: <DrawerRailItemAPIDocs />,
                            },
                            {
                                title: 'Playground',
                                url: 'playground',
                                component: <DrawerRailItemPlaygroundComponent />,
                            },
                        ],
                    },
                ],
            },
            {
                title: 'Empty State',
                url: '/components/empty-state',
                component: <ComponentPreviewPage title={'Empty State'} />,
                children: [
                    {
                        title: 'Examples',
                        url: 'examples',
                        component: <EmptyStateExamples />,
                    },
                    {
                        title: 'API Docs',
                        url: 'api-docs',
                        component: <EmptyStateAPIDocs />,
                    },
                    {
                        title: 'Playground',
                        url: 'playground',
                        component: <EmptyStatePlaygroundComponent />,
                    },
                ],
            },
            {
                title: 'Hero',
                url: '/components/hero',
                component: <ComponentPreviewPage title={'Hero'} />,
                children: [
                    {
                        title: 'Examples',
                        url: 'examples',
                        component: <HeroExamples />,
                    },
                    {
                        title: 'API Docs',
                        url: 'api-docs',
                        component: <HeroAPIDocs />,
                    },
                    {
                        title: 'Playground',
                        url: 'playground',
                        component: <HeroPlaygroundComponent />,
                    },
                ],
            },
            {
                title: 'Info List Item',
                url: '/components/info-list-item',
                component: <ComponentPreviewPage title={'Info List Item'} />,
                children: [
                    {
                        title: 'Examples',
                        url: 'examples',
                        component: <InfoListItemExamples />,
                    },
                    {
                        title: 'API Docs',
                        url: 'api-docs',
                        component: <InfoListItemAPIDocs />,
                    },
                    {
                        title: 'Playground',
                        url: 'playground',
                        component: <InfoListItemPlaygroundComponent />,
                    },
                ],
            },
            {
                title: 'List Item Tag',
                url: '/components/list-item-tag',
                component: <ComponentPreviewPage title={'List Item Tag'} />,
                children: [
                    {
                        title: 'Examples',
                        url: 'examples',
                        component: <ListItemTagExamples />,
                    },
                    {
                        title: 'API Docs',
                        url: 'api-docs',
                        component: <ListItemTagAPIDocs />,
                    },
                    {
                        title: 'Playground',
                        url: 'playground',
                        component: <ListItemTagPlaygroundComponent />,
                    },
                ],
            },
            {
                title: 'Score Card',
                url: '/components/score-card',
                component: <ComponentPreviewPage title={'Score Card'} />,
                children: [
                    {
                        title: 'Examples',
                        url: 'examples',
                        component: <ScoreCardExamples />,
                    },
                    {
                        title: 'API Docs',
                        url: 'api-docs',
                        component: <ScoreCardAPIDocs />,
                    },
                    {
                        title: 'Playground',
                        url: 'playground',
                        component: <ScoreCardPlaygroundComponent />,
                    },
                ],
            },
            {
                title: 'Spacer',
                url: '/components/spacer',
                component: <ComponentPreviewPage title={'Spacer'} />,
                children: [
                    {
                        title: 'Examples',
                        url: 'examples',
                        component: <SpacerExamples />,
                    },
                    {
                        title: 'API Docs',
                        url: 'api-docs',
                        component: <SpacerAPIDocs />,
                    },
                    // {
                    //     title: 'Playground',
                    //     url: 'playground',
                    //     component: <SpacerPlaygroundComponent />,
                    // },
                ],
            },
            {
                title: 'Three Liner',
                url: '/components/three-liner',
                component: <ComponentPreviewPage title={'Three Liner'} />,
                children: [
                    {
                        title: 'Examples',
                        url: 'examples',
                        component: <ThreeLinerExamples />,
                    },
                    {
                        title: 'API Docs',
                        url: 'api-docs',
                        component: <ThreeLinerAPIDocs />,
                    },
                    {
                        title: 'Playground',
                        url: 'playground',
                        component: <ThreeLinerPlaygroundComponent />,
                    },
                ],
            },
            {
                title: 'Toolbar Menu',
                url: '/components/toolbar-menu',
                component: <ComponentPreviewPage title={'Toolbar Menu'} />,
                children: [
                    {
                        title: 'Examples',
                        url: 'examples',
                        component: <ToolbarMenuExamples />,
                    },
                    {
                        title: 'API Docs',
                        url: 'api-docs',
                        component: <ToolbarMenuAPIDocs />,
                    },
                    {
                        title: 'Playground',
                        url: 'playground',
                        component: <ToolbarMenuPlaygroundComponent />,
                    },
                ],
            },
            {
                title: 'User Menu',
                url: '/components/user-menu',
                component: <ComponentPreviewPage title={'User Menu'} />,
                children: [
                    {
                        title: 'Examples',
                        url: 'examples',
                        component: <UserMenuExamples />,
                    },
                    {
                        title: 'API Docs',
                        url: 'api-docs',
                        component: <UserMenuAPIDocs />,
                    },
                    {
                        title: 'Playground',
                        url: 'playground',
                        component: <UserMenuPlaygroundComponent />,
                    },
                ],
            },
        ],
    },
];
