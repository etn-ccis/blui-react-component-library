import React from 'react';
import { text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { WITH_MIN_PROPS_STORY_NAME } from '../../src/constants';
import { ThreeLiner } from '@pxblue/react-components';

export const withBasicUsage = (): StoryFnReactReturnType => {
    const title = text('title', 'title');
    const subtitle = text('subtitle', 'subtitle');
    const info = text('info', 'info');
    return <ThreeLiner title={title} subtitle={subtitle} info={info} />;
};

withBasicUsage.story = { name: WITH_MIN_PROPS_STORY_NAME };
