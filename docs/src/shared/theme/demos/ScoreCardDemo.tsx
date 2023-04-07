import React from 'react';
import { Hero, InfoListItem, ScoreCard } from '@brightlayer-ui/react-components';
import { Temp } from '@brightlayer-ui/icons-mui';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CloudDone, Info, Notifications } from '@mui/icons-material';

/*
 * cannot iterate through variations due to the way MUI implemented text fields
 */

export const ScoreCardDemo: JSX.Element = (
    <ScoreCard
        headerTitle={'Score Card'}
        headerSubtitle={'Brightlayer UI'}
        headerInfo={'Used for summary of an asset'}
        sx={{ width: 320, my: 8, mx: 2, flex: '0 0 auto' }}
        badge={
            <Hero
                key={'hero1'}
                icon={<Temp fontSize={'inherit'} />}
                label={'Temperature'}
                iconSize={48}
                ChannelValueProps={{
                    value: 98,
                    units: '°F',
                }}
                fontSize={'normal'}
            />
        }
        actionRow={<InfoListItem dense chevron title={'View Location'} hidePadding />}
    >
        <List>
            <ListItem sx={{ py: 0.5 }}>
                <ListItemIcon>
                    <Notifications />
                </ListItemIcon>
                <ListItemText primary={'0 alarms'} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
                <ListItemIcon>
                    <Info />
                </ListItemIcon>
                <ListItemText primary={'2 events'} />
            </ListItem>
            <ListItem sx={{ py: 0.5 }}>
                <ListItemIcon>
                    <CloudDone />
                </ListItemIcon>
                <ListItemText primary={'Online'} />
            </ListItem>
        </List>
    </ScoreCard>
);
