import { InfoListItem } from '@brightlayer-ui/react-components';
import { text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { WITH_MIN_PROPS_STORY_NAME } from '../../src/constants';

export const withBasicUsage = (): StoryFnReactReturnType => <InfoListItem title={text('title', 'Info List Item')} />;

withBasicUsage.story = { name: WITH_MIN_PROPS_STORY_NAME };
