import { Accessibility, Gavel, Menu, NotificationsActive, Person, Settings, Today } from '@material-ui/icons';
import { Spacer } from '@brightlayer-ui/react-components';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerNavGroup,
    NavItem,
} from '@brightlayer-ui/react-components/core/Drawer';
import { boolean, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React, { useState } from 'react';

export const withMultipleNavGroups = (): StoryFnReactReturnType => {
    const [selected, setSelected] = useState('');

    const navGroupItems1: NavItem[] = [
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

    const navGroupItems2: NavItem[] = [
        {
            title: 'Settings',
            itemID: '2-1',
            icon: <Settings />,
            onClick: (): void => setSelected('2-1'),
        },
        {
            title: 'Legal',
            itemID: '2-2',
            icon: <Gavel />,
            onClick: (): void => setSelected('2-2'),
        },
    ];

    return (
        <Drawer open={boolean('open', true)} activeItem={selected}>
            <DrawerHeader
                icon={<Menu />}
                title={'Brightlayer UI Drawer'}
                subtitle={'with multiple navigation groups'}
            />
            <DrawerBody>
                <DrawerNavGroup title={text('navGroup[0].title', 'First DrawerNavGroup')} items={navGroupItems1} />
                {boolean('Add Spacer', true) && <Spacer />}
                <DrawerNavGroup title={text('navGroup[1].title', 'Second DrawerNavGroup')} items={navGroupItems2} />
            </DrawerBody>
        </Drawer>
    );
};

withMultipleNavGroups.story = { name: 'with multiple Drawer Nav Groups' };
