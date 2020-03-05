import AlertIcon from '@material-ui/icons/NotificationImportant';
import { EmptyState } from '@pxblue/react-components';
import { text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const asTextOnly = (): StoryFnReactReturnType => {
    const title = text('title', 'No Alarms Found');
    return <EmptyState icon={<AlertIcon fontSize={'inherit'} />} title={title} />;
};

asTextOnly.story = { name: 'as text only' };
