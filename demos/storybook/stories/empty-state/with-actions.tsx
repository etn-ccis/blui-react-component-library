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
        description={'Not a single one'}
        actions={
            <Button
                variant="outlined"
                color="primary"
                style={{ margin: '10px' }}
                onClick={action('Button Clicked')}
                startIcon={<AddIcon style={{ marginRight: '5px' }} />}
            >
                {text('Action Text', 'Add Device')}
            </Button>
        }
    />
);

withActions.story = { name: 'with actions' };
