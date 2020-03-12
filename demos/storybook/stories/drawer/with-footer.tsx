import { Divider } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import * as Colors from '@pxblue/colors';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerNavGroup } from '@pxblue/react-components/core/Drawer';
import { boolean, color } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { DrawerStoryContext } from './util';
import { navGroupItems1 } from './with-basic-config';

const EatonLogo = require('../../assets/EatonLogo.svg');

export const withFooter = (context: DrawerStoryContext): StoryFnReactReturnType => (
    <Drawer open={boolean('open', true)}>
        <DrawerHeader icon={<Menu />} title={'Footer Example'} />
        <DrawerBody>
            <DrawerNavGroup
                title={'Default Navigation Group'}
                activeItem={context.state.selected}
                items={navGroupItems1}
            />
        </DrawerBody>
        <DrawerFooter backgroundColor={color('backgroundColor', Colors.white[50])}>
            <Divider />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={EatonLogo} style={{ margin: '10px' }} alt="Eaton Logo" height={50} width={'auto'} />
            </div>
        </DrawerFooter>
    </Drawer>
);

withFooter.story = { name: 'with footer' };
