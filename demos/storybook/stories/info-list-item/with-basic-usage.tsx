import { InfoListItem } from '@pxblue/react-components';
import { text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withBasicUsage = (): StoryFnReactReturnType => <InfoListItem title={text('title', 'Info List Item')} />;

withBasicUsage.story = { name: 'with basic usage' };
