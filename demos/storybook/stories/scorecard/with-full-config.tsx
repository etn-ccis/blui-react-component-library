import { List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import { ChevronRight, Cloud, ListAlt, Mail, MoreVert, Notifications, Search } from '@material-ui/icons';
import * as Colors from '@pxblue/colors';
import { HeroBanner, InfoListItem, ScoreCard } from '@pxblue/react-components';
import { action } from '@storybook/addon-actions';
import { boolean, color, number, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { heroes } from './with-heroes';

const backgroundImage = require('../../assets/topology_40.png');

export const withFullConfig = (): StoryFnReactReturnType => (
    <ScoreCard
        style={{ width: 400, flex: '0 0 auto' }}
        headerTitle={text('headerTitle', 'Substation 3')}
        headerSubtitle={text('headerSubtitle', 'High Humidity Alarm')}
        headerInfo={text('headerInfo', '4 Devices')}
        headerColor={color('headerColor', Colors.red[500])}
        headerFontColor={color('headerFontColor', Colors.white[50])}
        headerBackgroundImage={boolean('headerBackgroundImage', true) ? backgroundImage : undefined}
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
            <List style={{ cursor: 'pointer'}}>
                <ListItem onClick={action('view location')}>
                    <ListItemText primary="View Location" />
                    <ListItemSecondaryAction>
                        <ChevronRight />
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        }
        badge={
            <HeroBanner>
                {heroes.slice(0, number('Number of Heroes', 1, { range: true, min: 0, max: 2, step: 1 }))}
            </HeroBanner>
        }
        badgeOffset={number('badgeOffset', -40)}
    >
        <List style={{ padding: '16px 0' }}>
            <InfoListItem dense style={{ height: 36 }} title={'0 Alarms'} icon={<Notifications color={'inherit'} />} />
            <InfoListItem
                dense
                style={{ height: 36 }}
                fontColor={Colors.blue[500]}
                iconColor={Colors.blue[500]}
                title={'1 Event'}
                icon={<ListAlt color={'inherit'} />}
            />
            <InfoListItem dense style={{ height: 36 }} title={'Online'} icon={<Cloud color={'inherit'} />} />
        </List>
    </ScoreCard>
);

withFullConfig.story = { name: 'with full config' };
