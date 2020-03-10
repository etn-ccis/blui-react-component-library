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
        headerTitle={text('Title', 'Substation 3')}
        headerSubtitle={text('Subtitle', 'High Humidity Alarm')}
        headerInfo={text('infotext', '4 Devices')}
        headerColor={color('backgroundColor', Colors.red[500])}
        headerFontColor={color('fontColor', Colors.white[50])}
        headerBackgroundImage={backgroundImage}
        actionLimit={number('Action Limit', 3, { range: true, min: 1, max: 6, step: 1 })}
        actionItems={[
            <MoreVert onClick={action('clicked more')} key={'morevert'} />,
            <Search onClick={action('clicked search')} key={'search'} />,
            <Mail onClick={action('clicked mail')} key={'mail'} />,
            <Notifications onClick={action('clicked alarms')} key={'notifications'} />,
            <ListAlt onClick={action('clicked list')} key={'listalt'} />,
            <Cloud onClick={action('clicked cloud')} key={'cloud'} />,
        ].slice(0, number('Actions Length', 1, { range: true, min: 0, max: 6, step: 1 }))}
        actionRow={
            <List style={{ margin: 0 }}>
                <ListItem>
                    <ListItemText primary="View Location" />
                    <ListItemSecondaryAction style={{ display: 'flex' }}>
                        {' '}
                        <ChevronRight />{' '}
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
