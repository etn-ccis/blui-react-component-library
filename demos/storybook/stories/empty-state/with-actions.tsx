import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import DevicesIcon from '@material-ui/icons/Devices';
import { EmptyState } from '@pxblue/react-components';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withActions = (): StoryFnReactReturnType => (
    <EmptyState
        icon={<DevicesIcon fontSize={'inherit'} />}
        title={'No Devices'}
        description={'Check your network connection or add a new device'}
        actions={
            <Button variant={'outlined'} color={'primary'} onClick={action('Button Clicked')} startIcon={<AddIcon />}>
                {text('Action Text', 'Add Device')}
            </Button>
        }
    />
);

withActions.story = { name: 'with actions' };
