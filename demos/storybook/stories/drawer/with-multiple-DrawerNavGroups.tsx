import { Dashboard, Menu, Toc } from '@material-ui/icons';
import { NavItem, Spacer } from '@pxblue/react-components';
import { Drawer, DrawerBody, DrawerHeader, DrawerNavGroup } from '@pxblue/react-components/core/Drawer';
import { boolean, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { DrawerStoryContext } from './util';
import { navGroupItems1 } from './with-basic-config';

export const navGroupItems2 = (context: DrawerStoryContext): NavItem[] => [
    {
        title: 'Overview',
        itemID: 'group2-1',
        icon: <Dashboard />,
        onClick: (): void => {
            context.store.set({ selected: 'group2-1' });
        },
    },
    {
        title: 'Timeline',
        itemID: 'group2-2',
        icon: <Toc />,
        onClick: (): void => {
            context.store.set({ selected: 'group2-2' });
        },
    },
];

export const withMultipleNavGroups = (context: DrawerStoryContext): StoryFnReactReturnType => (
    <Drawer open={boolean('open', true)}>
        <DrawerHeader icon={<Menu />} title={'PX Blue Drawer'} subtitle={'with multiple navigation groups'} />
        <DrawerBody>
            <DrawerNavGroup
                title={text('navGroup[0].title', 'First DrawerNavGroup')}
                activeItem={context.state.selected}
                items={navGroupItems1}
            />
            {boolean('Add Spacer', false) && <Spacer />}
            <DrawerNavGroup
                title={text('navGroup[1].title', 'Second DrawerNavGroup')}
                activeItem={context.state.selected}
                items={navGroupItems2(context)}
            />
        </DrawerBody>
    </Drawer>
);

withMultipleNavGroups.story = { name: 'with multiple DrawerNavGroups' };
