import { Accessibility, Menu, NotificationsActive, Person, Today, Dashboard, LocalLibrary } from '@material-ui/icons';
import { Drawer, DrawerBody, DrawerHeader, DrawerNavGroup, NavItem } from '@brightlayer-ui/react-components';
import { boolean, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { WITH_MIN_PROPS_STORY_NAME } from '../../src/constants';
import { DrawerStoryContext } from './util';

export const navGroupItems1: NavItem[] = [
    {
        title: 'Identity Management',
        itemID: '1',
        icon: <Person />,
    },
    {
        title: 'Calendar',
        itemID: '2',
        icon: <Today />,
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

export const navGroupItems2: NavItem[] = [
    {
        title: 'Overview',
        itemID: '2-1',
        icon: <Dashboard />,
    },
    {
        title: 'Manuals',
        itemID: '2-2',
        icon: <LocalLibrary />,
    },
];

export const withBasicConfig = (context: DrawerStoryContext): StoryFnReactReturnType => (
    <Drawer open={boolean('open', true)}>
        <DrawerHeader icon={<Menu />} title={text('title', 'Simple Drawer')} />
        <DrawerBody>
            <DrawerNavGroup activeItem={context.state.selected} items={navGroupItems1} />
        </DrawerBody>
    </Drawer>
);

withBasicConfig.story = { name: WITH_MIN_PROPS_STORY_NAME };
