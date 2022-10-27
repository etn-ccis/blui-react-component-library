import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { BasicScoreCardExample } from './BasicScoreCardExample';

const codeSnippet = `<ScoreCard sx={{ width: 350 }} headerTitle="Card Title">
    <List>
        <ListItem>
            <ListItemText primary="Body Content" />
        </ListItem>
    </List>
</ScoreCard>`;

export const BasicScoreCard = (): JSX.Element => (
    <Box>
        <BasicScoreCardExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ScoreCard/examples/BasicScoreCardExample.tsx"
        />
    </Box>
);
