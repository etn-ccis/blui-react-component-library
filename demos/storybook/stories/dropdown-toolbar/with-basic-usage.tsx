import { DropdownToolbar } from '@pxblue/react-components';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { WITH_MIN_PROPS_STORY_NAME } from '../../src/constants';
import { text } from '@storybook/addon-knobs';
import { AppBar } from '@material-ui/core';
import { action } from '@storybook/addon-actions';

export const withBasicUsage = (): StoryFnReactReturnType => {
    const menuItems = [
        { label: 'Item 1', onClick: action('Item 1 selected') },
        { label: 'Item 2', onClick: action('Item 2 selected') },
        { label: 'Item 3', onClick: action('Item 3 selected') },
    ];

    return (
        <AppBar color={'primary'}>
            <DropdownToolbar
                title={text('title', 'Title')}
                subtitle={text('subtitle', 'Subtitle')}
                menuItems={menuItems}
            ></DropdownToolbar>
        </AppBar>
    );
};

withBasicUsage.story = { name: WITH_MIN_PROPS_STORY_NAME };
