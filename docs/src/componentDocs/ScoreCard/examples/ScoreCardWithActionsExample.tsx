import React from 'react';
import { InfoListItem, ScoreCard } from '@brightlayer-ui/react-components';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { MoreVert, Settings, Star } from '@mui/icons-material';
import { ExampleShowcase } from '../../../shared';
import Box from '@mui/material/Box';
const backgroundImage = require('../../../shared/images/topology_40.png');

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
                headerBackgroundImage={backgroundImage}
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
