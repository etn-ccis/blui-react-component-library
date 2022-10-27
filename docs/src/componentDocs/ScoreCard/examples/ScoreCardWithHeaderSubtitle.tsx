import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { ScoreCardWithHeaderSubtitleExample } from './ScoreCardWithHeaderSubtitleExample';

const codeSnippet = `<ScoreCard
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
</ScoreCard>`;

export const ScoreCardWithHeaderSubtitle = (): JSX.Element => (
    <Box>
        <ScoreCardWithHeaderSubtitleExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="4-5" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ScoreCard/examples/ScoreCardWithHeaderSubtitleExample.tsx"
        />
    </Box>
);
