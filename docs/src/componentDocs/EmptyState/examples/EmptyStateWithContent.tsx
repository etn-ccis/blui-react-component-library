import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { EmptyStateWithContentExample } from './EmptyStateWithContentExample';

const codeSnippet = `<EmptyState
    icon={<ReportIcon fontSize={'inherit'} />}
    title={'Request Permission'}
    description={'You must contact your system admin to view this content.'}
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
