import { DropdownToolbar } from '@pxblue/react-components';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { text } from '@storybook/addon-knobs';
import { AppBar } from '@material-ui/core';
import { action } from '@storybook/addon-actions';

export const withMultipleMenuGroups = (): StoryFnReactReturnType => {
    const menuItems = [
        { title: 'Item 1', onClick: action('Item 1 selected'), itemID: 'item1' },
        { title: 'Item 2', onClick: action('Item 2 selected'), itemID: 'item2' },
    ];

    const menuItems2 = [
        { title: 'Item 3', onClick: action('Item 3 selected'), itemID: 'item3' },
        { title: 'Item 4', onClick: action('Item 4 selected'), itemID: 'item4' },
    ];

    const menuGroups = [
        {
            title: 'MenuGroup 1',
            items: menuItems,
        },
        {
            title: 'MenuGroup 2',
            items: menuItems2,
        },
    ];

    return (
        <AppBar color={'primary'}>
            <DropdownToolbar
                title={text('title', 'Title')}
                subtitle={text('subtitle', 'Subtitle')}
                menuGroups={menuGroups}
            ></DropdownToolbar>
        </AppBar>
    );
};

withMultipleMenuGroups.story = { name: 'with multiple menu groups' };
