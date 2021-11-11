import { LocationOff } from '@material-ui/icons';
import { EmptyState } from '@brightlayer-ui/react-components';
import { text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withDescription = (): StoryFnReactReturnType => (
    <EmptyState
        icon={<LocationOff fontSize={'inherit'} style={{ marginBottom: '0' }} />}
        title={text('title', 'Location Services Disabled')}
        description={text('description', 'Enable Location Services via Settings to receive GPS information')}
    />
);

withDescription.story = { name: 'with description' };
