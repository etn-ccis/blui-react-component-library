import { Drawer, DrawerBody, DrawerHeader, DrawerNavGroup } from '@brightlayer-ui/react-components';
import { boolean, select } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { DrawerStoryContext } from './util';
import { navGroupItems1 } from './with-basic-config';
import { Menu } from '@material-ui/icons';

export const withDifferentVariants = (context: DrawerStoryContext): StoryFnReactReturnType => (
    <Drawer
        open={boolean('open', true)}
        variant={select('variant', ['permanent', 'persistent', 'temporary'], 'permanent')}
        ModalProps={{
            disableEnforceFocus: true,
        }}
    >
        <DrawerHeader icon={<Menu />} title={'Drawer with variants'} />
        <DrawerBody>
            <DrawerNavGroup activeItem={context.state.selected} items={navGroupItems1} />
        </DrawerBody>
    </Drawer>
);

withDifferentVariants.story = { name: 'with different variants' };
