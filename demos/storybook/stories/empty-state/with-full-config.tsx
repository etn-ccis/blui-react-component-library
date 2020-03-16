import Button from '@material-ui/core/Button';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import { EmptyState } from '@pxblue/react-components';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { WITH_FULL_CONFIG_STORY_NAME } from '../../src/constants';

export const withFullConfig = (): StoryFnReactReturnType => {
    const title = text('title', 'Predictions Page Coming Soon');
    const description = text('description', 'A fully redesigned predictions page is coming in our next release!');
    const actionText = text('Action Text', 'Learn More');
    return (
        <EmptyState
            icon={<TrendingUpIcon fontSize={'inherit'} style={{ marginBottom: '0' }} />}
            title={title}
            description={description}
            actions={
                <Button
                    variant="outlined"
                    size="small"
                    color="primary"
                    style={{ margin: '10px' }}
                    onClick={action('Button Clicked')}
                >
                    {actionText}
                </Button>
            }
        />
    );
};

withFullConfig.story = { name: WITH_FULL_CONFIG_STORY_NAME };
