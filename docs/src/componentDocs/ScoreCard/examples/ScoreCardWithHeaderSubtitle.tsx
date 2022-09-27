import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
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
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4, display: 'flex', justifyContent: 'center' }}>
            <ScoreCardWithHeaderSubtitleExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" dataLine="4-5" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ScoreCard/examples/ScoreCardWithHeaderSubtitleExample.tsx"
        />
    </Box>
);
