import { Avatar } from '@material-ui/core';
import { Email, ExitToApp, Settings } from '@material-ui/icons';
import { UserMenu, UserMenuItem } from '@pxblue/react-components';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

const menuItems: UserMenuItem[] = [
    {
        itemID: '1',
        title: 'Account',
        icon: <Settings />,
        onClick: action('click \'Account\''),
    },
    {
        itemID: '2',
        title: 'Contact Us',
        icon: <Email />,
        onClick: action('click \'Contact Us\''),
    },
    {
        itemID: '3',
        title: 'Log Out',
        icon: <ExitToApp />,
        onClick: action('click \'Log Out\''),
    },
];

export const menuGroups = [
    {
        items: menuItems,
    },
];

export const withBasicUsage = (): StoryFnReactReturnType => {
    const value = text('value', 'AB');
    const avatar = <Avatar>{value}</Avatar>;
    return <UserMenu avatar={avatar} menuGroups={menuGroups} onOpen={action('open')} onClose={action('close')} />;
};

withBasicUsage.story = { name: 'with basic usage ' };
