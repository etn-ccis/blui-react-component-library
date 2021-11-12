import { DropdownToolbar, InfoListItem } from '@brightlayer-ui/react-components';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { AppBar, Menu } from '@material-ui/core';
import { Business, House, Apartment } from '@material-ui/icons';
import * as Colors from '@brightlayer-ui/colors';
import { action } from '@storybook/addon-actions';
import { getDirection } from '@brightlayer-ui/storybook-rtl-addon';

export const withCustomMenu = (): StoryFnReactReturnType => {
    const direction = getDirection();

    const menu = (): JSX.Element => (
        <Menu open={true}>
            <InfoListItem
                title={'Atlanta'}
                icon={<Business style={{ transform: direction === 'rtl' ? 'scaleX(-1)' : '' }} />}
                iconColor={Colors.blue[500]}
                onClick={action('Atlanta selected')}
                dense
            ></InfoListItem>
            <InfoListItem
                title={'Pittsburgh'}
                icon={<House style={{ transform: direction === 'rtl' ? 'scaleX(-1)' : '' }} />}
                iconColor={Colors.red[500]}
                statusColor={Colors.red[500]}
                onClick={action('Pittsburgh selected')}
                dense
            ></InfoListItem>
            <InfoListItem
                title={'New York'}
                icon={<Apartment style={{ transform: direction === 'rtl' ? 'scaleX(-1)' : '' }} />}
                iconColor={Colors.blue[500]}
                onClick={action('New York selected')}
                dense
            ></InfoListItem>
        </Menu>
    );

    return (
        <AppBar color={'primary'}>
            <DropdownToolbar title={'Title'} subtitle={'Subtitle'} menu={menu()} />
        </AppBar>
    );
};

withCustomMenu.story = { name: 'with custom menu' };
