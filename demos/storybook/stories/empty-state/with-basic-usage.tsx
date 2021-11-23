import React from 'react';
import { NotListedLocation } from '@material-ui/icons';
import { EmptyState } from '@brightlayer-ui/react-components';
import { WITH_MIN_PROPS_STORY_NAME } from '../../src/constants';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { getLeftToRightIconTransform } from '../../src/utils';
import { text } from '@storybook/addon-knobs';

export const withBasicUsage = (): StoryFnReactReturnType => (
    <EmptyState
        icon={<NotListedLocation fontSize={'inherit'} style={getLeftToRightIconTransform()} />}
        title={text('title', 'Location Unknown')}
    />
);

withBasicUsage.story = { name: WITH_MIN_PROPS_STORY_NAME };
