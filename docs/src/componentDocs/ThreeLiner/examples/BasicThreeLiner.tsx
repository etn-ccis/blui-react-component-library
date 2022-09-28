import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { BasicThreeLinerExample } from './BasicThreeLinerExample';

const codeSnippet = `<ThreeLiner title="title" subtitle="subtitle" info="info" />`;

export const BasicThreeLiner = (): JSX.Element => (
    <Box>
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4, display: 'flex', justifyContent: 'center' }}>
            <BasicThreeLinerExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ThreeLiner/examples/BasicThreeLinerExample.tsx"
        />
    </Box>
);
