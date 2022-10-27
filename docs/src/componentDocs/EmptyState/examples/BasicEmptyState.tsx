import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { BasicEmptyStateExample } from './BasicEmptyStateExample';

const codeSnippet = `<EmptyState icon={<NotListedLocation fontSize={'inherit'} />} title={'Location Unknown'} />`;

export const BasicEmptyState = (): JSX.Element => (
    <Box>
        <BasicEmptyStateExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/EmptyState/examples/BasicEmptyStateExample.tsx"
        />
    </Box>
);
