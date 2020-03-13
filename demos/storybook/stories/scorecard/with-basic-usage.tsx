import { List, ListItem, ListItemText } from '@material-ui/core';
import { ScoreCard } from '@pxblue/react-components';
import { text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import {WITH_MIN_PROPS_STORY_NAME} from "../../src/constants";

export const withBasicUsage = (): StoryFnReactReturnType => (
    <ScoreCard style={{ width: 400, flex: '0 0 auto' }} headerTitle={text('headerTitle', 'Card Title')}>
        <List>
            <ListItem>
                <ListItemText primary={'Body Content'} />
            </ListItem>
        </List>
    </ScoreCard>
);

withBasicUsage.story = { name: WITH_MIN_PROPS_STORY_NAME };
