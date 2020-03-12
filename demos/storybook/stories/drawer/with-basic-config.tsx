import { Accessibility, AddAPhoto, Mail, Menu, NotificationsActive } from '@material-ui/icons';
import { Drawer, DrawerBody, DrawerHeader, DrawerNavGroup, NavItem } from '@pxblue/react-components';
import { boolean, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { DrawerStoryContext } from './util';

export const navGroupItems1: NavItem[] = [
    {
        title: 'User Guide',
        itemID: '1',
        icon: <AddAPhoto />,
        onClick: (): void => {
            // Set DrawerNavGroup activeItem here.
        },
    },
    {
        title: 'License',
        itemID: '2',
        icon: <Mail />,
    },
    {
        title: 'Accessibility',
        itemID: '3',
        icon: <Accessibility />,
    },
    {
        title: 'Notifications',
        itemID: '4',
        icon: <NotificationsActive />,
    },
];

export const withBasicConfig = (context: DrawerStoryContext): StoryFnReactReturnType => (
    <Drawer open={boolean('open', true)}>
        <DrawerHeader icon={boolean('Show Icon', true) ? <Menu /> : undefined} title={text('title', 'Simple Drawer')} />
        <DrawerBody>
            <DrawerNavGroup activeItem={context.state.selected} items={navGroupItems1} />
        </DrawerBody>
    </Drawer>
);

withBasicConfig.story = { name: 'with basic config' };
