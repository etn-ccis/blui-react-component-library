import React from 'react';
import { text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { WITH_MIN_PROPS_STORY_NAME } from '../../src/constants';
import { ToolbarMenu } from '@brightlayer-ui/react-components';

export const withBasicUsage = (): StoryFnReactReturnType => {
    const label = text('label', 'label');

    return <ToolbarMenu label={label} />;
};

withBasicUsage.story = { name: WITH_MIN_PROPS_STORY_NAME };
