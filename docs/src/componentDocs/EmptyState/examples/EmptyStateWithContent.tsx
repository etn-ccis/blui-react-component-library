import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { EmptyStateWithContentExample } from './EmptyStateWithContentExample';

const codeSnippet = `<EmptyState
    icon={<ReportIcon fontSize={'inherit'} />}
    title={<Typography color={'primary'} variant={'h6'}>Request Permission</Typography>}
    description={<Typography variant={'body2'}>You must <Link>contact your system admin</Link> to view this content.</Typography>}
/>`;

export const EmptyStateWithContent = (): JSX.Element => (
    <Box>
        <EmptyStateWithContentExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="3-4" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/EmptyState/examples/EmptyStateWithContentExample.tsx"
        />
    </Box>
);
