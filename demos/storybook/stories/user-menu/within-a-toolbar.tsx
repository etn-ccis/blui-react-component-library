import { AppBar, Avatar, Toolbar, Typography } from '@material-ui/core';
import { Spacer, UserMenu } from '@pxblue/react-components';
import { action } from '@storybook/addon-actions';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { menuGroups } from './with-basic-usage';
import * as Colors from '@pxblue/colors';

export const withinToolbar = (): StoryFnReactReturnType => (
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

withinToolbar.story = { name: 'within a toolbar' };
