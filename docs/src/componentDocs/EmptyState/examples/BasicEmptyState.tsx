import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { BasicEmptyStateExample } from './BasicEmptyStateExample';

const codeSnippet = `<EmptyState icon={<NotListedLocation fontSize={'inherit'} />} title={'Location Unknown'} />`;

export const BasicEmptyState = (): JSX.Element => (
    <Box>
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
            <BasicEmptyStateExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/EmptyState/examples/BasicEmptyStateExample.tsx"
        />
    </Box>
);
