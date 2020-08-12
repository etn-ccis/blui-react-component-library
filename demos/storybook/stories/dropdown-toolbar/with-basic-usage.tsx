import { DropdownToolbar } from '@pxblue/react-components';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { WITH_MIN_PROPS_STORY_NAME } from '../../src/constants';
import { text } from '@storybook/addon-knobs';
import { AppBar } from '@material-ui/core';

export const withBasicUsage = (): StoryFnReactReturnType => {
    const updateSubtitle = (str: string, state: any): void => {
        state.selected = str;
    }

    const state = {
        selected: undefined,
    }

    const menuItems = [
        { label: 'English', onClick: () => updateSubtitle("English", state) },
        { label: 'Arabic', onClick: () => updateSubtitle("Arabic", state) },
        { label: 'French', onClick: () => updateSubtitle("French", state) }
    ]

    return (
        <AppBar color={'primary'}>
            <DropdownToolbar
                title={text('title', 'Title')}
                subtitleLabel={state.selected || text('subtitleLabel', 'Subtitle')}
                menuItems={menuItems}
            ></DropdownToolbar>
        </AppBar>
    )
};

withBasicUsage.story = { name: WITH_MIN_PROPS_STORY_NAME };
