import { Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer, DrawerHeader } from '@pxblue/react-components/core/Drawer';
import { State, Store } from '@sambego/storybook-state';
import { boolean } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { defaultDrawerBody } from './with-standard-inputs';

const farmBgImage = require('../../assets/farm.jpg');

type DrawerState = {
    selected: string;
};

const store = new Store<DrawerState>({
    selected: '',
});

export const withCustomHeader = (): StoryFnReactReturnType => {
    const open = boolean('Open', true);
    return (
        <State store={store}>
            {(state): JSX.Element[] => [
                <Drawer open={open} key={'drawer'}>
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
                    {defaultDrawerBody(state, store)}
                </Drawer>,
            ]}
        </State>
    );
};

withCustomHeader.story = { name: 'with custom header' };
