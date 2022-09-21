import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { DenseInfoListItemExample } from './DenseInfoListItemExample';

const codeSnippet = `<InfoListItem title='Info List Item' dense={true} />`;

export const DenseInfoListItem = (): JSX.Element => (
    <Box>
        <DenseInfoListItemExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine={'6-18'} />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ListItemTag/examples/DenseInfoListItemExample.tsx"
        />
    </Box>
);
