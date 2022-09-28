import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { EmptyStateWithContentExample } from './EmptyStateWithContentExample';

const codeSnippet = (
    `<EmptyState
        icon={<ReportIcon fontSize={'inherit'} />}
        title={'Request Permission'}
        description={'You must contact your system admin to view this content.'}
    />`
);

export const EmptyStateWithContent = (): JSX.Element => (
    <Box>
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
            <EmptyStateWithContentExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" dataLine={'3-4'} />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/EmptyState/examples/EmptyStateWithContentExample.tsx"
        />
    </Box>
);
