import { List, ListItem, ListItemText } from '@material-ui/core';
//@ts-ignore
import { ScoreCard } from '@pxblue/react-components';
import { text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withMinConfig = (): StoryFnReactReturnType => (
    <ScoreCard
        style={{ width: 400, flex: '0 0 auto' }}
        headerTitle={text('Title', 'Card Title')}
        headerSubtitle={text('Subtitle', 'Card Subtitle')}
    >
        <List>
            <ListItem>
                <ListItemText primary={'Body Content'} />
            </ListItem>
        </List>
    </ScoreCard>
);

withMinConfig.story = { name: 'with minimum config' };
