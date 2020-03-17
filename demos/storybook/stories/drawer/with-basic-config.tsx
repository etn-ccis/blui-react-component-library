import { Accessibility, NotificationsActive, PermIdentity, Today } from '@material-ui/icons';
import { Drawer, DrawerBody, DrawerHeader, DrawerNavGroup, NavItem } from '@pxblue/react-components';
import { boolean, text, select } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { WITH_MIN_PROPS_STORY_NAME } from '../../src/constants';
import { DrawerStoryContext } from './util';
import { getIcon } from './with-full-config';

export const navGroupItems1: NavItem[] = [
    {
        title: 'Identity Management',
        itemID: '1',
        icon: <PermIdentity />,
        onClick: (): void => {
            // Set DrawerNavGroup activeItem here.
        },
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

export const withBasicConfig = (context: DrawerStoryContext): StoryFnReactReturnType => {
    const iconKnob = select('icon', ['<Menu />', '<List />', 'undefined'], '<Menu />');
    const icon = getIcon(iconKnob);
    return (
        <Drawer open={boolean('open', true)}>
            <DrawerHeader icon={icon} title={text('title', 'Simple Drawer')} />
            <DrawerBody>
                <DrawerNavGroup activeItem={context.state.selected} items={navGroupItems1} />
            </DrawerBody>
        </Drawer>
    );
};

withBasicConfig.story = { name: WITH_MIN_PROPS_STORY_NAME };
