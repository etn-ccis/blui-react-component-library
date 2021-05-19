import { Drawer, DrawerBody, DrawerHeader, DrawerNavGroup, NavItem } from '@pxblue/react-components';
import { boolean, select } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { Menu, Gavel, Settings } from '@material-ui/icons';
import { useState } from '@storybook/addons';

export const withDifferentVariants = (): StoryFnReactReturnType => {
    const [selected, setSelected] = useState('');

    const navGroupItems: NavItem[] = [
        {
            title: 'Settings',
            itemID: '1',
            icon: <Settings />,
            onClick: (): void => setSelected('1'),
        },
        {
            title: 'Legal',
            itemID: '2',
            icon: <Gavel />,
            onClick: (): void => setSelected('2'),
        },
    ];

    return (
        <Drawer
            open={boolean('open', true)}
            variant={select('variant', ['permanent', 'persistent', 'temporary', 'rail'], 'persistent')}
            condensed={boolean('condensed (rail only)', false)}
            ModalProps={{
                disableEnforceFocus: true,
            }}
            activeItem={selected}
        >
            <DrawerHeader icon={<Menu />} title={'Drawer with variants'} />
            <DrawerBody>
                <DrawerNavGroup items={navGroupItems} />
            </DrawerBody>
        </Drawer>
    );
};

withDifferentVariants.story = { name: 'with different variants' };
