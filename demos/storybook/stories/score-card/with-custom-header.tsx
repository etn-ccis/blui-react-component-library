import { List, ListItem, ListItemText } from '@material-ui/core';
import * as Colors from '@pxblue/colors';
import { ScoreCard } from '@pxblue/react-components';
import { color, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

const backgroundImage = require('../../assets/topology_40.png');

export const withCustomHeader = (): StoryFnReactReturnType => (
    <ScoreCard
        style={{ width: 400, flex: '0 0 auto' }}
        headerTitle={text('headerTitle', 'Card Title')}
        headerSubtitle={text('headerSubtitle', 'Card Subtitle')}
        headerInfo={text('headerInfo', '4 Devices')}
        headerColor={color('headerColor', Colors.blue[500])}
        headerFontColor={color('headerFontColor', Colors.white[50])}
        headerBackgroundImage={backgroundImage}
    >
        <List>
            <ListItem>
                <ListItemText primary={'Body Content'} />
            </ListItem>
        </List>
    </ScoreCard>
);

withCustomHeader.story = { name: 'with custom header' };
