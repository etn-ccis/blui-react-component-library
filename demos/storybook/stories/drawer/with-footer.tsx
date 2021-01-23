import { Menu } from '@material-ui/icons';
import * as Colors from '@pxblue/colors';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerNavGroup } from '@pxblue/react-components/core/Drawer';
import { boolean, color } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { DrawerStoryContext } from './util';
import { navGroupItems2 } from './with-basic-config';

const EatonLogo = require('../../assets/EatonLogo.svg');

export const withFooter = (context: DrawerStoryContext): StoryFnReactReturnType => (
    <Drawer open={boolean('open', true)} activeItem={context.state.selected}>
        <DrawerHeader icon={<Menu />} title={'Footer Example'} />
        <DrawerBody>
            <DrawerNavGroup items={navGroupItems2} />
        </DrawerBody>

        <DrawerFooter
            backgroundColor={color('backgroundColor', Colors.white[50])}
            hideContentOnCollapse={boolean('hideContentOnCollapse', true)}
            divider={boolean('divider', true)}
        >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={EatonLogo} style={{ margin: '10px' }} alt="Eaton Logo" height={50} width={'auto'} />
            </div>
        </DrawerFooter>
    </Drawer>
);

withFooter.story = { name: 'with footer' };
