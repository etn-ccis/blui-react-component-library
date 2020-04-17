import { List, ListItem, ListItemText } from '@material-ui/core';
import { Cloud, ListAlt, Mail, MoreVert, Notifications, Search } from '@material-ui/icons';
import * as Colors from '@pxblue/colors';
import { ScoreCard, InfoListItem } from '@pxblue/react-components';
import { action } from '@storybook/addon-actions';
import { number } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

const backgroundImage = require('../../assets/topology_40.png');

export const actionRow = (
    <InfoListItem dense chevron title={'View Location'} hidePadding onClick={action('view location')} />
);

export const actionItems = [
    <MoreVert onClick={action('clicked more')} key={'morevert'} />,
    <Search onClick={action('clicked search')} key={'search'} />,
    <Mail onClick={action('clicked mail')} key={'mail'} />,
    <Notifications onClick={action('clicked alarms')} key={'notifications'} />,
    <ListAlt onClick={action('clicked list')} key={'listalt'} />,
    <Cloud onClick={action('clicked cloud')} key={'cloud'} />,
];

export const withActions = (): StoryFnReactReturnType => (
    <ScoreCard
        style={{ width: 400, flex: '0 0 auto' }}
        headerTitle={'Substation 3'}
        headerSubtitle={'High Humidity Alarm'}
        headerInfo={'4 Devices'}
        headerColor={Colors.red[500]}
        headerFontColor={Colors.white[50]}
        headerBackgroundImage={backgroundImage}
        actionItems={actionItems}
        actionLimit={number('actionLimit', 3, { range: true, min: 1, max: 6, step: 1 })}
        actionRow={actionRow}
    >
        <List>
            <ListItem>
                <ListItemText primary={'Body Content'} />
            </ListItem>
        </List>
    </ScoreCard>
);

withActions.story = { name: 'with actions' };
