import { ChannelValue } from '@pxblue/react-components';
import { text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withValue = (): StoryFnReactReturnType => <ChannelValue value={text('value', text('value', '123'))} />;

withValue.story = { name: 'with value' };
