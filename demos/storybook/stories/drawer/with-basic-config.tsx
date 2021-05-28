import { Accessibility, Menu, NotificationsActive, Person, Today } from '@material-ui/icons';
import { Drawer, DrawerBody, DrawerHeader, DrawerNavGroup, NavItem } from '@pxblue/react-components';
import { boolean, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React, { useState } from 'react';
import { WITH_MIN_PROPS_STORY_NAME } from '../../src/constants';

export const withBasicConfig = (): StoryFnReactReturnType => {
    const [selected, setSelected] = useState('');

    const navGroupItems: NavItem[] = [
        {
            title: 'Identity Management',
            itemID: '1',
            icon: <Person />,
            onClick: (): void => setSelected('1'),
        },
        {
            title: 'Calendar',
            itemID: '2',
            icon: <Today />,
            onClick: (): void => setSelected('2'),
        },
        {
            title: 'Accessibility',
            itemID: '3',
            icon: <Accessibility />,
            onClick: (): void => setSelected('3'),
        },
        {
            title: 'Notifications',
            itemID: '4',
            icon: <NotificationsActive />,
            onClick: (): void => setSelected('4'),
        },
    ];

    return (
        <Drawer open={boolean('open', true)} activeItem={selected}>
            <DrawerHeader icon={<Menu />} title={text('title', 'Simple Drawer')} />
            <DrawerBody>
                <DrawerNavGroup items={navGroupItems} />
            </DrawerBody>
        </Drawer>
    );
};

withBasicConfig.story = { name: WITH_MIN_PROPS_STORY_NAME };
