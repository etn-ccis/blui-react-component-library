import React from 'react';
import { ComponentPreviewPage } from '../../pages';

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
import { ScoreCardPlaygroundComponent } from '../../componentDocs/ScoreCard/playground';
import { ThreeLinerPlaygroundComponent } from '../../componentDocs/ThreeLiner/playground';
import { ToolbarMenuPlaygroundComponent } from '../../componentDocs/ToolbarMenu/playground';
import { UserMenuPlaygroundComponent } from '../../componentDocs/UserMenu/playground';
import { Outlet, RouteProps } from 'react-router';

// import ExampleConfigRender from '../../components/Playground/exampleConfigRender';
// import ExampleConfig2Render from '../../components/Playground/exampleConfig2Render';

export type RouteConfig = Omit<RouteProps, 'children'> & {
    title: string;
    icon?: JSX.Element;
    pages?: RouteConfig[];
    children?: RouteConfig[];
};

export const pageDefinitions: RouteConfig[] = [
    // {
    //     title: 'Test Playground',
    //     path: '/test-playground/',
    //     pages: [
    //         {
    //             title: 'Channel Value',
    //             path: 'channel-value',
    //             element: <ExampleConfigRender />,
    //         },
    //         {
    //             title: 'Score Card',
    //             path: 'score-card',
    //             element: <ExampleConfig2Render />,
    //         },
    //     ],
    // },
    {
        title: 'Components',
        path: '/components/',
        element: <Outlet />,
        pages: [
            {
                title: 'App Bar',
                path: 'app-bar/',
                element: <ComponentPreviewPage title={'App Bar'} />,
                children: [
                    {
                        title: 'examples',
                        path: 'examples',
                        element: <AppBarExamples />,
                    },
                    {
                        title: 'API Docs',
                        path: 'api-docs',
                        element: <AppBarAPIDocs />,
                    },
                    {
                        title: 'playground',
                        path: 'playground',
                        element: <AppBarPlaygroundComponent />,
                    },
                ],
            },
            {
                title: 'Channel Value',
                path: 'channel-value/',
                element: <ComponentPreviewPage title={'Channel Value'} />,
                children: [
                    {
                        title: 'examples',
                        path: 'examples',
                        element: <ChannelValueExamples />,
                    },
                    {
                        title: 'API Docs',
                        path: 'api-docs',
                        element: <ChannelValueAPIDocs />,
                    },
                    {
                        title: 'playground',
                        path: 'playground',
                        element: <ChannelValuePlaygroundComponent />,
                    },
                ],
            },
            {
                title: 'Drawer',
                path: '',
                pages: [
                    {
                        title: 'Drawer Layout',
                        path: 'drawer-layout/',
                        element: <ComponentPreviewPage title={'Drawer Layout'} />,
                        children: [
                            {
                                title: 'examples',
                                path: 'examples',
                                element: <DrawerLayoutExamples />,
                            },
                            {
                                title: 'API Docs',
                                path: 'api-docs',
                                element: <DrawerLayoutAPIDocs />,
                            },
                        ],
                    },
                    {
                        title: 'Drawer',
                        path: 'drawer/',
                        element: <ComponentPreviewPage title={'Drawer'} />,
                        children: [
                            {
                                title: 'examples',
                                path: 'examples',
                                element: <DrawerExamples />,
                            },
                            {
                                title: 'API Docs',
                                path: 'api-docs',
                                element: <DrawerAPIDocs />,
                            },
                            {
                                title: 'playground',
                                path: 'playground',
                                element: <DrawerPlaygroundComponent />,
                            },
                        ],
                    },
                    {
                        title: 'Drawer Header',
                        path: 'drawer-header/',
                        element: <ComponentPreviewPage title={'Drawer Header'} />,
                        children: [
                            {
                                title: 'examples',
                                path: 'examples',
                                element: <DrawerHeaderExamples />,
                            },
                            {
                                title: 'API Docs',
                                path: 'api-docs',
                                element: <DrawerHeaderAPIDocs />,
                            },
                            {
                                title: 'playground',
                                path: 'playground',
                                element: <DrawerHeaderPlaygroundComponent />,
                            },
                        ],
                    },
                    {
                        title: 'Drawer Subheader',
                        path: 'drawer-subheader/',
                        element: <ComponentPreviewPage title={'Drawer Subheader'} />,
                        children: [
                            {
                                title: 'examples',
                                path: 'examples',
                                element: <DrawerSubheaderExamples />,
                            },
                            {
                                title: 'API Docs',
                                path: 'api-docs',
                                element: <DrawerSubheaderAPIDocs />,
                            },
                            {
                                title: 'playground',
                                path: 'playground',
                                element: <DrawerSubheaderPlaygroundComponent />,
                            },
                        ],
                    },

                    {
                        title: 'Drawer Body',
                        path: 'drawer-body/',
                        element: <ComponentPreviewPage title={'Drawer Body'} />,
                        children: [
                            {
                                title: 'examples',
                                path: 'examples',
                                element: <DrawerBodyExamples />,
                            },
                            {
                                title: 'API Docs',
                                path: 'api-docs',
                                element: <DrawerBodyAPIDocs />,
                            },
                        ],
                    },
                    {
                        title: 'Drawer Nav Group',
                        path: 'drawer-nav-group/',
                        element: <ComponentPreviewPage title={'Drawer Nav Group'} />,
                        children: [
                            {
                                title: 'examples',
                                path: 'examples',
                                element: <DrawerNavGroupExamples />,
                            },
                            {
                                title: 'API Docs',
                                path: 'api-docs',
                                element: <DrawerNavGroupAPIDocs />,
                            },
                            {
                                title: 'playground',
                                path: 'playground',
                                element: <DrawerNavGroupPlaygroundComponent />,
                            },
                        ],
                    },
                    {
                        title: 'Drawer Nav Item',
                        path: 'drawer-nav-item/',
                        element: <ComponentPreviewPage title={'Drawer Nav Item'} />,
                        children: [
                            {
                                title: 'examples',
                                path: 'examples',
                                element: <DrawerNavItemExamples />,
                            },
                            {
                                title: 'API Docs',
                                path: 'api-docs',
                                element: <DrawerNavItemAPIDocs />,
                            },
                            {
                                title: 'playground',
                                path: 'playground',
                                element: <DrawerNavItemPlaygroundComponent />,
                            },
                        ],
                    },
                    {
                        title: 'Drawer Rail Item',
                        path: 'drawer-rail-item/',
                        element: <ComponentPreviewPage title={'Drawer Rail Item'} />,
                        children: [
                            {
                                title: 'examples',
                                path: 'examples',
                                element: <DrawerRailItemExamples />,
                            },
                            {
                                title: 'API Docs',
                                path: 'api-docs',
                                element: <DrawerRailItemAPIDocs />,
                            },
                            {
                                title: 'playground',
                                path: 'playground',
                                element: <DrawerRailItemPlaygroundComponent />,
                            },
                        ],
                    },
                    {
                        title: 'Drawer Footer',
                        path: 'drawer-footer/',
                        element: <ComponentPreviewPage title={'Drawer Footer'} />,
                        children: [
                            {
                                title: 'examples',
                                path: 'examples',
                                element: <DrawerFooterExamples />,
                            },
                            {
                                title: 'API Docs',
                                path: 'api-docs',
                                element: <DrawerFooterAPIDocs />,
                            },
                            {
                                title: 'playground',
                                path: 'playground',
                                element: <DrawerFooterPlaygroundComponent />,
                            },
                        ],
                    },
                ],
            },
            {
                title: 'Empty State',
                path: 'empty-state/',
                element: <ComponentPreviewPage title={'Empty State'} />,
                children: [
                    {
                        title: 'examples',
                        path: 'examples',
                        element: <EmptyStateExamples />,
                    },
                    {
                        title: 'API Docs',
                        path: 'api-docs',
                        element: <EmptyStateAPIDocs />,
                    },
                    {
                        title: 'playground',
                        path: 'playground',
                        element: <EmptyStatePlaygroundComponent />,
                    },
                ],
            },
            {
                title: 'Hero',
                path: 'hero/',
                element: <ComponentPreviewPage title={'Hero'} />,
                children: [
                    {
                        title: 'examples',
                        path: 'examples',
                        element: <HeroExamples />,
                    },
                    {
                        title: 'API Docs',
                        path: 'api-docs',
                        element: <HeroAPIDocs />,
                    },
                    {
                        title: 'playground',
                        path: 'playground',
                        element: <HeroPlaygroundComponent />,
                    },
                ],
            },
            {
                title: 'Info List Item',
                path: 'info-list-item/',
                element: <ComponentPreviewPage title={'Info List Item'} />,
                children: [
                    {
                        title: 'examples',
                        path: 'examples',
                        element: <InfoListItemExamples />,
                    },
                    {
                        title: 'API Docs',
                        path: 'api-docs',
                        element: <InfoListItemAPIDocs />,
                    },
                    {
                        title: 'playground',
                        path: 'playground',
                        element: <InfoListItemPlaygroundComponent />,
                    },
                ],
            },
            {
                title: 'List Item Tag',
                path: 'list-item-tag/',
                element: <ComponentPreviewPage title={'List Item Tag'} />,
                children: [
                    {
                        title: 'examples',
                        path: 'examples',
                        element: <ListItemTagExamples />,
                    },
                    {
                        title: 'API Docs',
                        path: 'api-docs',
                        element: <ListItemTagAPIDocs />,
                    },
                    {
                        title: 'playground',
                        path: 'playground',
                        element: <ListItemTagPlaygroundComponent />,
                    },
                ],
            },
            {
                title: 'Score Card',
                path: 'score-card/',
                element: <ComponentPreviewPage title={'Score Card'} />,
                children: [
                    {
                        title: 'examples',
                        path: 'examples',
                        element: <ScoreCardExamples />,
                    },
                    {
                        title: 'API Docs',
                        path: 'api-docs',
                        element: <ScoreCardAPIDocs />,
                    },
                    {
                        title: 'playground',
                        path: 'playground',
                        element: <ScoreCardPlaygroundComponent />,
                    },
                ],
            },
            {
                title: 'Spacer',
                path: 'spacer/',
                element: <ComponentPreviewPage title={'Spacer'} />,
                children: [
                    {
                        title: 'examples',
                        path: 'examples',
                        element: <SpacerExamples />,
                    },
                    {
                        title: 'API Docs',
                        path: 'api-docs',
                        element: <SpacerAPIDocs />,
                    },
                ],
            },
            {
                title: 'Three Liner',
                path: 'three-liner/',
                element: <ComponentPreviewPage title={'Three Liner'} />,
                children: [
                    {
                        title: 'examples',
                        path: 'examples',
                        element: <ThreeLinerExamples />,
                    },
                    {
                        title: 'API Docs',
                        path: 'api-docs',
                        element: <ThreeLinerAPIDocs />,
                    },
                    {
                        title: 'playground',
                        path: 'playground',
                        element: <ThreeLinerPlaygroundComponent />,
                    },
                ],
            },
            {
                title: 'Toolbar Menu',
                path: 'toolbar-menu/',
                element: <ComponentPreviewPage title={'Toolbar Menu'} />,
                children: [
                    {
                        title: 'examples',
                        path: 'examples',
                        element: <ToolbarMenuExamples />,
                    },
                    {
                        title: 'API Docs',
                        path: 'api-docs',
                        element: <ToolbarMenuAPIDocs />,
                    },
                    {
                        title: 'playground',
                        path: 'playground',
                        element: <ToolbarMenuPlaygroundComponent />,
                    },
                ],
            },
            {
                title: 'User Menu',
                path: 'user-menu/',
                element: <ComponentPreviewPage title={'User Menu'} />,
                children: [
                    {
                        title: 'examples',
                        path: 'examples',
                        element: <UserMenuExamples />,
                    },
                    {
                        title: 'API Docs',
                        path: 'api-docs',
                        element: <UserMenuAPIDocs />,
                    },
                    {
                        title: 'playground',
                        path: 'playground',
                        element: <UserMenuPlaygroundComponent />,
                    },
                ],
            },
        ],
    },
];
