import React from 'react';
import { NotListedLocation } from '@material-ui/icons';
import { EmptyState } from '@pxblue/react-components';
import { WITH_MIN_PROPS_STORY_NAME } from '../../src/constants';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { getDirection } from '@pxblue/storybook-rtl-addon';
import { text } from '@storybook/addon-knobs';

export const withBasicUsage = (): StoryFnReactReturnType => (
    <EmptyState
        icon={
            <NotListedLocation
                fontSize={'inherit'}
                style={{ transform: getDirection() === 'rtl' ? 'scaleX(-1)' : undefined }}
            />
        }
        title={text('title', 'Location Unknown')}
    />
);

withBasicUsage.story = { name: WITH_MIN_PROPS_STORY_NAME };
