import { ChannelValue } from '@pxblue/react-components';
import { text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withUnits = (): StoryFnReactReturnType => <ChannelValue value={'123'} unit={text('units', 'hz')} />;

withUnits.story = { name: 'with units' };
