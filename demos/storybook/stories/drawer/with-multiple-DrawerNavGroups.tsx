import { Menu } from '@material-ui/icons';
import { Spacer } from '@pxblue/react-components';
import { Drawer, DrawerBody, DrawerHeader, DrawerNavGroup } from '@pxblue/react-components/core/Drawer';
import { boolean, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { DrawerStoryContext } from './util';
import { navGroupItems1, navGroupItems2 } from './with-basic-config';

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
                items={navGroupItems2}
            />
        </DrawerBody>
    </Drawer>
);

withMultipleNavGroups.story = { name: 'with multiple Drawer Nav Groups' };
