import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { BasicInfoListItemExample } from './BasicInfoListItemExample';

const codeSnippet = `<InfoListItem title='Info List Item' />`;

export const BasicInfoListItem = (): JSX.Element => (
    <Box>
        <BasicInfoListItemExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/InfoListItem/examples/BasicInfoListItemExample.tsx"
        />
    </Box>
);
