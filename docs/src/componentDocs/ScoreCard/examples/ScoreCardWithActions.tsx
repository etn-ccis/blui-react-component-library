import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { ScoreCardWithActionsExample } from './ScoreCardWithActionsExample';

const codeSnippet = `<ScoreCard
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
</ScoreCard>`;

export const ScoreCardWithActions = (): JSX.Element => (
    <Box>
        <ScoreCardWithActionsExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="5-9" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ScoreCard/examples/ScoreCardWithActionsExample.tsx"
        />
    </Box>
);
