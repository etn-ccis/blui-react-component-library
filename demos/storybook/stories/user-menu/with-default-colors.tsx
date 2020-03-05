import { Avatar } from '@material-ui/core';
import { Email, Settings } from '@material-ui/icons';
import SendIcon from '@material-ui/icons/Send';
import { UserMenu, UserMenuGroup } from '@pxblue/react-components';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const menuItems: UserMenuGroup[] = [
    {
        fontColor: '',
        items: [
            {
                title: 'Log Out',
                icon: <SendIcon />,
                itemID: 'Log Out',
                onClick: action('Log Out Selected'),
            },
            {
                title: 'Account Settings',
                itemID: 'Account Settings',
                icon: <Settings />,
                onClick: action('Account Settings Selected'),
            },
            {
                title: 'Contact Us',
                itemID: 'Contact Us',
                icon: <Email />,
                onClick: action('Contact Us Selected'),
            },
        ],
    },
];

export const withDefaultColors = (): StoryFnReactReturnType => {
    const value = text('value', 'AB');
    const avatar = <Avatar>{value}</Avatar>;
    return <UserMenu avatar={avatar} menuGroups={menuItems} />;
};

withDefaultColors.story = { name: 'with default colors ' };
