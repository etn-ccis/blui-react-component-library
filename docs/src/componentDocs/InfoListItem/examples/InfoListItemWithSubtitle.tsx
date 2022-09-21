import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { InfoListItemWithSubtitleExample } from './InfoListItemWithSubtitleExample';

const codeSnippet = `<InfoListItem title="Info List Item" subtitle="this is a subtitle within an InfoListItem" />`;

export const InfoListItemWithSubtitle = (): JSX.Element => (
    <Box>
        <InfoListItemWithSubtitleExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ListItemTag/examples/InfoListItemWithSubtitleExample.tsx"
        />
    </Box>
);
