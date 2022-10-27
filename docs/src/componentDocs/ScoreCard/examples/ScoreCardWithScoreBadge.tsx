import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { ScoreCardWithScoreBadgeExample } from './ScoreCardWithScoreBadgeExample';

const codeSnippet = `<ScoreCard
    sx={{ width: 350 }}
    headerTitle={'Substation 3'}
    headerSubtitle={'High Humidity Alarm'}
    headerInfo={'4 Devices'}
    actionRow={
        <List sx={{ p: 0 }}>
            <InfoListItem dense chevron title="View Location" hidePadding />
        </List>
    }
    badge={
        <HeroBanner>
            <Hero
                icon={<GradeA fontSize={'inherit'} />}
                label={'Grade'}
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
</ScoreCard>`;

export const ScoreCardWithScoreBadge = (): JSX.Element => (
    <Box>
        <ScoreCardWithScoreBadgeExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="11-23" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ScoreCard/examples/ScoreCardWithScoreBadgeExample.tsx"
        />
    </Box>
);
