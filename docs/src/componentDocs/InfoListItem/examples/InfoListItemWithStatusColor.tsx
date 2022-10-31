import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { InfoListItemWithStatusColorExample } from './InfoListItemWithStatusColorExample';

const codeSnippet = `<InfoListItem
    title="Info List Item"
    subtitle="with a status indicator"
    icon={<OfflineBolt />}
    avatar
    statusColor='#2ca618'
/>`;

export const InfoListItemWithStatusColor = (): JSX.Element => (
    <Box>
        <InfoListItemWithStatusColorExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine={'5-6'} />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/InfoListItem/examples/InfoListItemWithStatusColorExample.tsx"
        />
    </Box>
);
