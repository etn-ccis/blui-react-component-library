import { DropdownToolbar, InfoListItem } from '@pxblue/react-components';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { AppBar, Menu } from '@material-ui/core';
import { Business, House, Apartment } from '@material-ui/icons';
import * as Colors from '@pxblue/colors';
import { action } from '@storybook/addon-actions';
import { Store, State } from '@sambego/storybook-state';

type DropdownMenuState = {
    open: boolean;
};
const store = new Store<DropdownMenuState>({
    open: false,
});

export const withCustomMenu = (): StoryFnReactReturnType => {
    const open = (): void => {
        store.set({ open: true });
    };
    const close = (): void => {
        store.set({ open: false });
    };

    const menu = (state: any): JSX.Element => (
        <Menu open={state.open} onClose={close}>
            <InfoListItem
                title={'Atlanta'}
                icon={<Business />}
                iconColor={Colors.blue[500]}
                onClick={action('Atlanta selected')}
                dense
            ></InfoListItem>
            <InfoListItem
                title={'Pittsburgh'}
                icon={<House />}
                iconColor={Colors.red[500]}
                statusColor={Colors.red[500]}
                onClick={action('Pittsburgh selected')}
                dense
            ></InfoListItem>
            <InfoListItem
                title={'New York'}
                icon={<Apartment />}
                iconColor={Colors.blue[500]}
                onClick={action('New York selected')}
                dense
            ></InfoListItem>
        </Menu>
    );

    return (
        <State store={store}>
            {(state): JSX.Element => (
                <AppBar color={'primary'}>
                    <DropdownToolbar title={'Title'} subtitle={'Subtitle'} onOpen={open} menu={menu(state)} />
                </AppBar>
            )}
        </State>
    );
};

withCustomMenu.story = { name: 'with custom menu' };
