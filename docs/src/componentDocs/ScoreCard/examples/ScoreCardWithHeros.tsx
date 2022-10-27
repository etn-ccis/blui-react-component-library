import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { ScoreCardWithHerosExample } from './ScoreCardWithHerosExample';

const codeSnippet = `<ScoreCard
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
</ScoreCard>`;

export const ScoreCardWithHeros = (): JSX.Element => (
    <Box>
        <ScoreCardWithHerosExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="6-20" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ScoreCard/examples/ScoreCardWithHerosExample.tsx"
        />
    </Box>
);
