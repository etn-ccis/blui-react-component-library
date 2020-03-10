import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/AddCircleOutlined';

import DevicesIcon from '@material-ui/icons/Devices';
import { EmptyState } from '@pxblue/react-components';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withActions = (): StoryFnReactReturnType => {
    const title = text('title', 'No Devices');
    const actionText = text('Action Text', 'Add Device');
    return (
        <EmptyState
            icon={<DevicesIcon fontSize={'inherit'} />}
            title={title}
            actions={
                <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: '10px' }}
                    onClick={action('Button Clicked')}
                >
                    <AddIcon style={{ marginRight: '5px' }} />
                    {actionText}
                </Button>
            }
        />
    );
};

withActions.story = { name: 'with actions' };
