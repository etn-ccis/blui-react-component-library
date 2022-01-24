import React from 'react';
import { action } from '@storybook/addon-actions';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { text } from '@storybook/addon-knobs';
import { ToolbarMenu } from '@brightlayer-ui/react-components/core/ToolbarMenu';
import { WITH_MIN_PROPS_STORY_NAME } from '../../src/constants';

const menuItems = [
    { title: 'Item 1', onClick: action('Item 1 selected') },
    { title: 'Item 2', onClick: action('Item 2 selected') },
    { title: 'Item 3', onClick: action('Item 3 selected') },
];

const menuGroups = [
    {
        items: menuItems,
    },
];
export const withBasicUsage = (): StoryFnReactReturnType => {
    const label = text('label', 'label');
    return <ToolbarMenu label={label} menuGroups={menuGroups} />;
};

withBasicUsage.story = { name: WITH_MIN_PROPS_STORY_NAME };
