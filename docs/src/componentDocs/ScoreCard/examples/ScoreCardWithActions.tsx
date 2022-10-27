import React from 'react';
import { Box } from '@mui/material';
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
    headerBackgroundImage='../../../shared/images/topology_40.png'
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
        <CodeBlock code={codeSnippet} language="jsx" dataLine="4-9" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ScoreCard/examples/ScoreCardWithActionsExample.tsx"
        />
    </Box>
);
