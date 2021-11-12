import { List } from '@material-ui/core';
import { Cloud, ListAlt, Notifications } from '@material-ui/icons';
import * as Colors from '@brightlayer-ui/colors';
import { HeroBanner, InfoListItem, ScoreCard } from '@brightlayer-ui/react-components';
import { boolean, color, number, text } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import React from 'react';
import { WITH_FULL_CONFIG_STORY_NAME } from '../../src/constants';
import { actionItems, actionRow } from './with-actions';
import { useDarkMode } from 'storybook-dark-mode';
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
        actionItems={actionItems}
        actionRow={actionRow}
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
                fontColor={useDarkMode() ? Colors.blue[300] : Colors.blue[500]}
                iconColor={useDarkMode() ? Colors.blue[300] : Colors.blue[500]}
                title={'1 Event'}
                icon={<ListAlt color={'inherit'} />}
            />
            <InfoListItem dense style={{ height: 36 }} title={'Online'} icon={<Cloud color={'inherit'} />} />
        </List>
    </ScoreCard>
);

withFullConfig.story = { name: WITH_FULL_CONFIG_STORY_NAME };
