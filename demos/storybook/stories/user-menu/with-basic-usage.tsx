import { Avatar } from '@material-ui/core';
import { Email, Settings, ExitToApp } from '@material-ui/icons';
import { UserMenu, UserMenuGroup, UserMenuItem } from '@pxblue/react-components';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

const menuItems: UserMenuItem[] = [
    {
        itemID: '1',
        title: 'Account',
        icon: <Settings />,
        onClick: action('Account Selected'),
    },
    {
        itemID: '2',
        title: 'Contact Us',
        icon: <Email />,
        onClick: action('Contact Us Selected'),
    },
    {
        itemID: '3',
        title: 'Log Out',
        icon: <ExitToApp />,
        onClick: action('Log Out Selected'),
    },
];

export const getMenu = (): UserMenuGroup[] => [
    {
        fontColor: '',
        iconColor: '',
        items: menuItems,
    },
];

export const withBasicUsage = (): StoryFnReactReturnType => {
    const value = text('value', 'AB');
    const avatar = <Avatar>{value}</Avatar>;
    return <UserMenu avatar={avatar} menuGroups={getMenu()} />;
};

withBasicUsage.story = { name: 'with basic usage ' };
