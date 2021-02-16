import { Accessibility, Menu, NotificationsActive, Person, Today, Gavel, Settings } from '@material-ui/icons';
import { Drawer, DrawerBody, DrawerHeader, DrawerNavGroup, NavItem } from '@pxblue/react-components';
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
        title: 'Settings',
        itemID: '2-1',
        icon: <Settings />,
    },
    {
        title: 'Legal',
        itemID: '2-2',
        icon: <Gavel />,
    },
];

export const withBasicConfig = (context: DrawerStoryContext): StoryFnReactReturnType => (
    <Drawer open={boolean('open', true)} activeItem={context.state.selected}>
        <DrawerHeader icon={<Menu />} title={text('title', 'Simple Drawer')} />
        <DrawerBody>
            <DrawerNavGroup items={navGroupItems1} />
        </DrawerBody>
    </Drawer>
);

withBasicConfig.story = { name: WITH_MIN_PROPS_STORY_NAME };
