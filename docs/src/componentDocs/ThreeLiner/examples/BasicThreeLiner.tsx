import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { BasicThreeLinerExample } from './BasicThreeLinerExample';

const codeSnippet = `<ThreeLiner title="title" subtitle="subtitle" info="info" />`;

export const BasicThreeLiner = (): JSX.Element => (
    <Box>
        <BasicThreeLinerExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ThreeLiner/examples/BasicThreeLinerExample.tsx"
        />
    </Box>
);
