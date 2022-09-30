import React from 'react';
import Box from '@mui/material/Box';
import { ScoreCard } from '@brightlayer-ui/react-components';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export const ScoreCardWithHeaderSubtitleExample = (): JSX.Element => (
    <Box>
        <ScoreCard
            sx={{ width: 350 }}
            headerTitle="Station 3"
            headerSubtitle="High Humidity Alarm"
            headerInfo="4 Devices"
        >
            <List>
                <ListItem>
                    <ListItemText primary="Body Content" />
                </ListItem>
            </List>
        </ScoreCard>
    </Box>
);
