import { ChannelValue } from '@brightlayer-ui/react-components';
import { text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withUnits = (): StoryFnReactReturnType => <ChannelValue value={'123'} units={text('units', 'hz')} />;

withUnits.story = { name: 'with units' };
