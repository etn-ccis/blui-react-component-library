import { NotListedLocation } from '@material-ui/icons';
import { EmptyState } from '@pxblue/react-components';
import { text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withBasicUsage = (): StoryFnReactReturnType => (
    <EmptyState
        icon={<NotListedLocation fontSize={'inherit'} style={{ marginBottom: '0' }} />}
        title={text('title', 'Location Unknown')}
    />
);

withBasicUsage.story = { name: 'with basic usage' };
