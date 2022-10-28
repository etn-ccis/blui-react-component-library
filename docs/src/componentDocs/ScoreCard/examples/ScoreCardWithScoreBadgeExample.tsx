import React from 'react';
import Box from '@mui/material/Box';
import { Hero, HeroBanner, ScoreCard } from '@brightlayer-ui/react-components';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { GradeA } from '@brightlayer-ui/icons-mui';
import * as colors from '@brightlayer-ui/colors';
import { ExampleShowcase } from '../../../shared';

export const ScoreCardWithScoreBadgeExample = (): JSX.Element => (
    <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box>
            <ScoreCard
                sx={{ width: 350 }}
                headerTitle="Substation 3"
                headerSubtitle="High Humidity Alarm"
                headerInfo="4 Devices"
                badge={
                    <HeroBanner>
                        <Hero
                            icon={<GradeA fontSize="inherit" />}
                            label="Grade"
                            iconSize={72}
                            iconBackgroundColor={colors.white[50]}
                            ChannelValueProps={{ value: '98', units: '/100', unitSpace: 'hide' }}
                        />
                    </HeroBanner>
                }
                badgeOffset={-54}
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
