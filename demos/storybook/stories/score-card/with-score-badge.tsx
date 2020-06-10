import { List } from '@material-ui/core';
import { Cloud, ListAlt, MoreVert, Notifications } from '@material-ui/icons';
import * as Colors from '@pxblue/colors';
import { GradeA } from '@pxblue/icons-mui';
import { Hero, HeroBanner, InfoListItem, ScoreCard } from '@pxblue/react-components';
import { action } from '@storybook/addon-actions';
import { number } from '@storybook/addon-knobs';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import { actionRow } from './with-actions';
import React from 'react';
import { useDarkMode } from 'storybook-dark-mode';

const backgroundImage = require('../../assets/topology_40.png');

export const withScoreBadge = (): StoryFnReactReturnType => (
    <ScoreCard
        style={{ width: 400, flex: '0 0 auto' }}
        headerTitle={'Substation 3'}
        headerSubtitle={'Normal'}
        headerInfo={'4 Devices'}
        headerFontColor={Colors.white[50]}
        headerBackgroundImage={backgroundImage}
        actionItems={[<MoreVert onClick={action('clicked more')} key={'morevert'} />]}
        actionRow={actionRow}
        badge={
            <HeroBanner>
                <Hero
                    icon={<GradeA fontSize={'inherit'} htmlColor={Colors.green[500]} />}
                    label={'Grade'}
                    iconSize={72}
                    iconBackgroundColor={useDarkMode() ? Colors.black[900] : Colors.white[50]}
                    value={'98'}
                    units={'/100'}
                />
            </HeroBanner>
        }
        badgeOffset={number('badgeOffset', -52)}
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

withScoreBadge.story = { name: 'with score badge' };
