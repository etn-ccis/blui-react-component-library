import React from 'react';
import { HomePage, ComponentPreviewPage } from '../../pages';
import {
    DummyComponent,
    DummyDocsComponent,
    DummyExamplesComponent,
} from '../../components/componentList/dummyDataForComponent';
import DrawerMarkdown from '../../markdown/Drawer.mdx';
import DrawerHeaderMarkdown from '../../markdown/DrawerHeader.mdx';
import DrawerFooterMarkdown from '../../markdown/DrawerFooter.mdx';

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
        groupTitle: 'Getting Started',
        items: [
            {
                title: 'Environment',
                url: '/environment',
                component: <HomePage />,
            },
        ],
    },
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
                        component: <DummyExamplesComponent />,
                    },
                    {
                        title: 'API Docs',
                        url: 'api-docs',
                        component: <DummyDocsComponent />,
                    },
                    {
                        title: 'Playground',
                        url: 'playground',
                        component: <DummyComponent />,
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
                        component: <DummyExamplesComponent />,
                    },
                    {
                        title: 'API Docs',
                        url: 'api-docs',
                        component: <DummyDocsComponent />,
                    },
                    {
                        title: 'Playground',
                        url: 'playground',
                        component: <DummyComponent />,
                    },
                ],
            },
            {
                title: 'Drawer',
                url: '/components/drawer',
                pages: [
                    {
                        title: 'Drawer',
                        url: '/drawer',
                        component: <ComponentPreviewPage title={'Drawer'} />,
                        children: [
                            {
                                title: 'Examples',
                                url: 'examples',
                                component: <DummyExamplesComponent />,
                            },
                            {
                                title: 'API Docs',
                                url: 'api-docs',
                                component: <DrawerMarkdown />,
                            },
                            {
                                title: 'Playground',
                                url: 'playground',
                                component: <DummyComponent />,
                            },
                        ],
                    },
                    {
                        title: 'Drawer Header',
                        url: '/drawer-header',
                        component: <ComponentPreviewPage title={'Drawer Header'} />,
                        children: [
                            {
                                title: 'Examples',
                                url: 'examples',
                                component: <DummyExamplesComponent />,
                            },
                            {
                                title: 'API Docs',
                                url: 'api-docs',
                                component: <DrawerHeaderMarkdown />,
                            },
                            {
                                title: 'Playground',
                                url: 'playground',
                                component: <DummyComponent />,
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
                                component: <DummyExamplesComponent />,
                            },
                            {
                                title: 'API Docs',
                                url: 'api-docs',
                                component: <DrawerFooterMarkdown />,
                            },
                            {
                                title: 'Playground',
                                url: 'playground',
                                component: <DummyComponent />,
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
                                component: <DummyExamplesComponent />,
                            },
                            {
                                title: 'API Docs',
                                url: 'api-docs',
                                component: <DrawerBodyDocsComponent />,
                            },
                            {
                                title: 'Playground',
                                url: 'playground',
                                component: <DummyComponent />,
                            },
                        ],
                    },
                    {
                        title: 'Drawer Nav Item',
                        url: '/drawer-nav-item',
                        component: <ComponentPreviewPage title={'Drawer Nav Item'} />,
                        children: [
                            {
                                title: 'Examples',
                                url: 'examples',
                                component: <DummyExamplesComponent />,
                            },
                            {
                                title: 'API Docs',
                                url: 'api-docs',
                                component: <DummyDocsComponent />,
                            },
                            {
                                title: 'Playground',
                                url: 'playground',
                                component: <DummyComponent />,
                            },
                        ],
                    },
                    {
                        title: 'Drawer Nav Group',
                        url: '/drawer-nav-group',
                        component: <ComponentPreviewPage title={'Drawer Nav Group'} />,
                        children: [
                            {
                                title: 'Examples',
                                url: 'examples',
                                component: <DummyExamplesComponent />,
                            },
                            {
                                title: 'API Docs',
                                url: 'api-docs',
                                component: <DummyDocsComponent />,
                            },
                            {
                                title: 'Playground',
                                url: 'playground',
                                component: <DummyComponent />,
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
                        component: <DummyExamplesComponent />,
                    },
                    {
                        title: 'API Docs',
                        url: 'api-docs',
                        component: <DummyDocsComponent />,
                    },
                    {
                        title: 'Playground',
                        url: 'playground',
                        component: <DummyComponent />,
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
                        component: <DummyExamplesComponent />,
                    },
                    {
                        title: 'API Docs',
                        url: 'api-docs',
                        component: <DummyDocsComponent />,
                    },
                    {
                        title: 'Playground',
                        url: 'playground',
                        component: <DummyComponent />,
                    },
                ],
            },
            {
                title: 'Info List Item',
                url: '/components/list-item-tag',
                component: <ComponentPreviewPage title={'Info List Item'} />,
                children: [
                    {
                        title: 'Examples',
                        url: 'examples',
                        component: <DummyExamplesComponent />,
                    },
                    {
                        title: 'API Docs',
                        url: 'api-docs',
                        component: <DummyDocsComponent />,
                    },
                    {
                        title: 'Playground',
                        url: 'playground',
                        component: <DummyComponent />,
                    },
                ],
            },
            {
                title: 'List Item Tag',
                url: '/components/info-list-item',
                component: <ComponentPreviewPage title={'List Item Tag'} />,
                children: [
                    {
                        title: 'Examples',
                        url: 'examples',
                        component: <DummyExamplesComponent />,
                    },
                    {
                        title: 'API Docs',
                        url: 'api-docs',
                        component: <DummyDocsComponent />,
                    },
                    {
                        title: 'Playground',
                        url: 'playground',
                        component: <DummyComponent />,
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
                        component: <DummyExamplesComponent />,
                    },
                    {
                        title: 'API Docs',
                        url: 'api-docs',
                        component: <DummyDocsComponent />,
                    },
                    {
                        title: 'Playground',
                        url: 'playground',
                        component: <DummyComponent />,
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
                        component: <DummyExamplesComponent />,
                    },
                    {
                        title: 'API Docs',
                        url: 'api-docs',
                        component: <DummyDocsComponent />,
                    },
                    {
                        title: 'Playground',
                        url: 'playground',
                        component: <DummyComponent />,
                    },
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
                        component: <DummyExamplesComponent />,
                    },
                    {
                        title: 'API Docs',
                        url: 'api-docs',
                        component: <DummyDocsComponent />,
                    },
                    {
                        title: 'Playground',
                        url: 'playground',
                        component: <DummyComponent />,
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
                        component: <DummyExamplesComponent />,
                    },
                    {
                        title: 'API Docs',
                        url: 'api-docs',
                        component: <DummyDocsComponent />,
                    },
                    {
                        title: 'Playground',
                        url: 'playground',
                        component: <DummyComponent />,
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
                        component: <DummyExamplesComponent />,
                    },
                    {
                        title: 'API Docs',
                        url: 'api-docs',
                        component: <DummyDocsComponent />,
                    },
                    {
                        title: 'Playground',
                        url: 'playground',
                        component: <DummyComponent />,
                    },
                ],
            },
        ],
    },
];
