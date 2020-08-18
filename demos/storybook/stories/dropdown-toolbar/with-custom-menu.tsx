import { DropdownToolbar, InfoListItem } from '@pxblue/react-components';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { AppBar, Menu } from '@material-ui/core';
import { Business, House, Apartment } from '@material-ui/icons';
import * as Colors from '@pxblue/colors';
import { action } from '@storybook/addon-actions';
import { getDirection } from '@pxblue/storybook-rtl-addon';

export const withCustomMenu = (): StoryFnReactReturnType => {
    const direction = getDirection();

    const menu = (): JSX.Element => (
        <Menu open={true} autoFocus={false}>
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
        <AppBar color={'primary'}>
            <DropdownToolbar
                title={'Title'}
                subtitle={'Subtitle'}
                menu={menu()}
                MenuProps={{
                    anchorOrigin: { horizontal: direction === 'rtl' ? 'right' : 'left', vertical: 'bottom' },
                    transformOrigin: { horizontal: direction === 'rtl' ? 'right' : 'left', vertical: 'top' },
                }}
            />
        </AppBar>
    );
};

withCustomMenu.story = { name: 'with custom menu' };
