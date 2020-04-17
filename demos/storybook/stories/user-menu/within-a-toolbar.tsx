import { AppBar, Avatar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { Spacer, UserMenu, UserMenuItem } from '@pxblue/react-components';
import { action } from '@storybook/addon-actions';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import * as Colors from '@pxblue/colors';
import { Email, ExitToApp, Settings } from '@material-ui/icons';

export const withinToolbar = (): StoryFnReactReturnType => {
    const useStyles = makeStyles({
        root: {
            height: 40,
            minHeight: 'initial',
        },
        title: {
            color: Colors.gray[100],
            fontSize: 12,
            textAlign: 'right',
        },
    });

    const menuItems: UserMenuItem[] = [
        {
            itemID: '1',
            title: 'Account',
            icon: <Settings />,
            onClick: action("click 'Account'"),
        },
        {
            itemID: '2',
            title: 'Contact Us',
            icon: <Email />,
            onClick: action("click 'Contact Us'"),
        },
        {
            itemID: '3',
            title: 'Log Out',
            divider: true,
            icon: <ExitToApp />,
            onClick: action("click 'Log Out'"),
        },
        {
            itemID: '4',
            title: 'v1.03.54',
            InfoListItemProps: {
                classes: useStyles(),
            },
        },
    ];

    const menuGroups = [
        {
            items: menuItems,
        },
    ];

    return (
        <div style={{ width: '80%', height: 150 }}>
            <AppBar position={'relative'} color={'primary'} style={{ marginTop: '-32px' }}>
                <Toolbar style={{ padding: '0 16px' }}>
                    <Typography variant={'h6'}>Toolbar Title</Typography>
                    <Spacer flex={1} />
                    <UserMenu
                        avatar={<Avatar />}
                        menuGroups={menuGroups}
                        menuTitle={'Jane Doe'}
                        menuSubtitle={'Account Manager'}
                        onOpen={action('open')}
                        onClose={action('close')}
                    />
                </Toolbar>
            </AppBar>
            <div style={{ height: '100%', backgroundColor: Colors.white[50], padding: 16 }}>
                <Typography variant={'subtitle1'}>Body Content Goes Here</Typography>
            </div>
        </div>
    );
};

withinToolbar.story = { name: 'within a toolbar' };
