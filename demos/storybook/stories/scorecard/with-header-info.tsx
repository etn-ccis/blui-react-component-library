import { List, ListItem, ListItemText } from '@material-ui/core';
import { ScoreCard } from '@pxblue/react-components';
import { text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

export const withHeaderInfo = (): StoryFnReactReturnType => (
    <ScoreCard
        style={{ width: 400, flex: '0 0 auto' }}
        headerTitle={text('headerTitle', 'Card Title')}
        headerSubtitle={text('headerSubtitle', 'Card Subtitle')}
        headerInfo={text('headerInfo', '4 Devices')}
    >
        <List>
            <ListItem>
                <ListItemText primary={'Body Content'} />
            </ListItem>
        </List>
    </ScoreCard>
);

withHeaderInfo.story = { name: 'with header info' };
