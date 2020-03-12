import { ListItemTag } from '@pxblue/react-components';
import { text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withBasicUsage = (): StoryFnReactReturnType => <ListItemTag label={text('label', 'active')} />;

withBasicUsage.story = { name: 'with basic usage' };
