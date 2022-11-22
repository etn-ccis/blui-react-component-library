import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { DenseInfoListItemExample } from './DenseInfoListItemExample';

const codeSnippet = `<InfoListItem title="Dense Info List Item 1" dense divider="full" />
<InfoListItem title="Dense Info List Item 2" dense divider="full" />
<InfoListItem title="Dense Info List Item 3" dense divider="full" />
`;

export const DenseInfoListItem = (): JSX.Element => (
    <Box>
        <DenseInfoListItemExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/InfoListItem/examples/DenseInfoListItemExample.tsx"
        />
    </Box>
);
