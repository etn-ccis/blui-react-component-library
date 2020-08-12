import { DropdownToolbar } from '@pxblue/react-components';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { WITH_MIN_PROPS_STORY_NAME } from '../../src/constants';
import { text } from '@storybook/addon-knobs';
import { AppBar } from '@material-ui/core';
import { HandlerFunction, action } from '@storybook/addon-actions';

export const withBasicUsage = (): StoryFnReactReturnType => {
    const menuItems = [
        { label: 'English', onClick: (): HandlerFunction => action('English selected') },
        { label: 'Arabic', onClick: (): HandlerFunction => action('Arabic selected') },
        { label: 'French', onClick: (): HandlerFunction => action('French selected') },
    ];

    return (
        <AppBar color={'primary'}>
            <DropdownToolbar
                title={text('title', 'Title')}
                subtitleLabel={text('subtitleLabel', 'Subtitle')}
                menuItems={menuItems}
            ></DropdownToolbar>
        </AppBar>
    );
};

withBasicUsage.story = { name: WITH_MIN_PROPS_STORY_NAME };
