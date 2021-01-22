import { Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer, DrawerBody, DrawerHeader, DrawerNavGroup } from '@pxblue/react-components/core/Drawer';
import { boolean } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { DrawerStoryContext } from './util';
import { navGroupItems1 } from './with-basic-config';

const farmBgImage = require('../../assets/farm.jpg');

export const withCustomHeader = (context: DrawerStoryContext): StoryFnReactReturnType => (
    <Drawer open={boolean('open', true)} activeItem={context.state.selected}>
        <DrawerHeader
            backgroundImage={farmBgImage}
            backgroundOpacity={0.5}
            icon={<MenuIcon />}
            titleContent={
                <div style={{ zIndex: 1, paddingLeft: '20px', paddingTop: '15px' }}>
                    <Typography variant="subtitle2">Customizable</Typography>
                    <Typography variant="h6" style={{ marginTop: '-10px' }}>
                        Header Content Goes Here
                    </Typography>
                </div>
            }
        />
        <DrawerBody>
            <DrawerNavGroup items={navGroupItems1} />
        </DrawerBody>
    </Drawer>
);

withCustomHeader.story = { name: 'with custom header' };
