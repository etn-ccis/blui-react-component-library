import { Avatar, Divider, Menu, MenuItem, Typography } from '@material-ui/core';
import { UserMenu } from '@pxblue/react-components';
import { State, Store } from '@sambego/storybook-state';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
const EatonLogo = require('../../assets/EatonLogo.svg');
const tRex = require('../../assets/trex.jpeg');

type UserMenuState = {
    open: boolean;
};
const store = new Store<UserMenuState>({
    open: false,
});

export const withCustomMenu = (): StoryFnReactReturnType => {
    const open = (): void => {
        store.set({ open: true });
    };
    const close = (): void => {
        store.set({ open: false });
    };
    const avatar = <Avatar src={tRex} />;
    store.set({ open: false });
    const menu = (state: any): JSX.Element => (
        <Menu open={state.open} onClose={close}>
            <div key={'header'} style={{ position: 'relative', padding: 10 }}>
                <Typography variant={'h6'}>Welcome, </Typography>
                <Typography style={{ fontWeight: 600, marginTop: '-10px' }} variant={'h3'}>
                    T-Rex
                </Typography>
                <div
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        height: '100%',
                        width: '100%',
                        opacity: 0.2,
                        backgroundSize: 'cover',
                        backgroundImage: `url(${tRex})`,
                    }}
                />
            </div>
            <Divider key={'divider-1'} />
            <MenuItem onClick={close} key={'account'}>
                My Account
            </MenuItem>
            <MenuItem onClick={close} key={'logout'}>
                Logout
            </MenuItem>
            <Divider key={'divider-2'} />
            <img
                key={'footer'}
                alt={'tRex'}
                style={{ textAlign: 'center', padding: '12px 16px 0 16px', height: 40 }}
                src={EatonLogo}
            />
        </Menu>
    );

    return (
        <State store={store}>
            {(state): JSX.Element => <UserMenu avatar={avatar} onOpen={open} menu={menu(state)} />}
        </State>
    );
};

withCustomMenu.story = { name: 'with custom menu' };
