import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { ExpandedAppBarExample } from './ExpandedAppBarExample';

const codeSnippet = `<Box>
    <AppBar variant={'expanded'}>
        <Typography variant="h6">Content</Typography>
    </AppBar>
    <Box>
        {getBodyFiller()}
    </Box>
</Box>
`;

export const ExpandedAppBar = (): JSX.Element => (
    <Box>
        <ExpandedAppBarExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="2" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/AppBar/examples/ExpandedAppBarExample.tsx"
        />
    </Box>
);
