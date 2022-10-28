import React from 'react';
import { Hero, HeroBanner, InfoListItem, ScoreCard } from '@brightlayer-ui/react-components';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { MoreVert, Settings, Star } from '@mui/icons-material';
import { ExampleShowcase } from '../../../shared';
import Box from '@mui/material/Box';
import { GradeA } from '@brightlayer-ui/icons-mui';
import * as colors from '@brightlayer-ui/colors';

export const ScoreCardWithActionsExample = (): JSX.Element => (
    <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box>
            <ScoreCard
                sx={{ width: 350 }}
                headerTitle="Header Actions"
                actionItems={[<Star />, <Settings />, <MoreVert />]}
                actionRow={
                    <List sx={{ p: 0 }}>
                        <InfoListItem dense chevron title="View Location" hidePadding />
                    </List>
                }
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
