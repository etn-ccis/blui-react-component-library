import React from 'react';
import Box from '@mui/material/Box';
import { Hero, HeroBanner, InfoListItem, ScoreCard } from '@brightlayer-ui/react-components';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Moisture, Temp } from '@brightlayer-ui/icons-mui';
import { ExampleShowcase } from '../../../shared';

export const ScoreCardWithHerosExample = (): JSX.Element => (
    <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box>
            <ScoreCard
                sx={{ width: 350 }}
                headerTitle="Station 3"
                headerSubtitle="High Humidity Alarm"
                headerInfo="4 Devices"
                badge={
                    <HeroBanner>
                        <Hero
                            icon={<Temp fontSize="inherit" />}
                            label="Temperature"
                            ChannelValueProps={{ value: 98, units: '°F' }}
                            sx={{ overflow: 'visible' }}
                        />
                        <Hero
                            icon={<Moisture fontSize="inherit" />}
                            label="Humidity"
                            ChannelValueProps={{ value: 54, units: '%' }}
                        />
                    </HeroBanner>
                }
                actionRow={
                    <List sx={{ p: 0 }}>
                        <InfoListItem dense chevron title="View Location" hidePadding />
                    </List>
                }
            >
                <List>
                    <ListItem>
                        <ListItemText primary="Body Content" />
                    </ListItem>
                </List>
            </ScoreCard>
        </Box>
    </ExampleShowcase>
);
