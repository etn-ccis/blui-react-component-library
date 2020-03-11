import { List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import { ChevronRight, Cloud, ListAlt, Mail, MoreVert, Notifications, Search } from '@material-ui/icons';
import * as Colors from '@pxblue/colors';
//@ts-ignore
import { ScoreCard } from '@pxblue/react-components';
import { action } from '@storybook/addon-actions';
import { color, number, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';

const backgroundImage = require('../../assets/topology_40.png');

export const withBackgroundAndActions = (): StoryFnReactReturnType => (
    <ScoreCard
        style={{ width: 400, flex: '0 0 auto' }}
        headerTitle={'Substation 3'}
        headerSubtitle={'High Humidity Alarm'}
        headerInfo={'4 Devices'}
        headerColor={color('headerColor', Colors.red[500])}
        headerFontColor={color('headerFontColor', Colors.white[50])}
        headerBackgroundImage={backgroundImage}
        actionLimit={number('actionLimit', 3, { range: true, min: 1, max: 6, step: 1 })}
        actionItems={[
            <MoreVert onClick={action('clicked more')} key={'morevert'} />,
            <Search onClick={action('clicked search')} key={'search'} />,
            <Mail onClick={action('clicked mail')} key={'mail'} />,
            <Notifications onClick={action('clicked alarms')} key={'notifications'} />,
            <ListAlt onClick={action('clicked list')} key={'listalt'} />,
            <Cloud onClick={action('clicked cloud')} key={'cloud'} />,
        ].slice(0, number('Number of Actions', 1, { range: true, min: 0, max: 6, step: 1 }))}
        actionRow={
            <List style={{ cursor: 'pointer' }}>
                <ListItem onClick={action('view location')}>
                    <ListItemText primary="View Location" />
                    <ListItemSecondaryAction>
                        <ChevronRight />
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        }
    >
        <List>
            <ListItem>
                <ListItemText primary={'Body Content'} />
            </ListItem>
        </List>
    </ScoreCard>
);

withBackgroundAndActions.story = { name: 'with background and actions' };
