import { DropdownToolbar, InfoListItem } from '@pxblue/react-components';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { AppBar, Menu } from '@material-ui/core';
import { Business, House, Apartment } from '@material-ui/icons';
import * as Colors from '@pxblue/colors';
import { action } from '@storybook/addon-actions';

export const withCustomMenu = (): StoryFnReactReturnType => {
    const menu = (): JSX.Element => (
        <Menu open={true}>
            <InfoListItem
                title={'Atlanta'}
                icon={<Business />}
                iconColor={Colors.blue[500]}
                onClick={action('Atlanta selected')}
                dense
            />
            <InfoListItem
                title={'Pittsburgh'}
                icon={<House />}
                iconColor={Colors.red[500]}
                statusColor={Colors.red[500]}
                onClick={action('Pittsburgh selected')}
                dense
            />
            <InfoListItem
                title={'New York'}
                icon={<Apartment/>}
                iconColor={Colors.blue[500]}
                onClick={action('New York selected')}
                dense
            />
        </Menu>
    );

    return (
        <AppBar color={'primary'}>
            <DropdownToolbar title={'Title'} subtitle={'Subtitle'} menu={menu()} />
        </AppBar>
    );
};

withCustomMenu.story = { name: 'with custom menu' };
