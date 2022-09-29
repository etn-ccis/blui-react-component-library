import React from 'react';
import Box from '@mui/material/Box';
import { ScoreCard } from '@brightlayer-ui/react-components';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export const BasicScoreCardExample = (): JSX.Element => (
    <Box>
        <ScoreCard sx={{ width: 350 }} headerTitle="Card Title">
            <List>
                <ListItem>
                    <ListItemText primary="Body Content" />
                </ListItem>
            </List>
        </ScoreCard>
    </Box>
);
