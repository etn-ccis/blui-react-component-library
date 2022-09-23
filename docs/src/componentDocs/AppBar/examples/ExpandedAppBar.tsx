import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { ExpandedAppBarExample } from './ExpandedAppBarExample';

const codeSnippet = `<Box>
    <AppBar collapsedHeight={64} variant={'expanded'}>
        <Toolbar>
            <Typography variant="h6">Content</Typography>
        </Toolbar>
    </AppBar>
    <Box>
        {getBodyFiller()}
    </Box>
</Box>
`;

export const ExpandedAppBar = (): JSX.Element => (
    <Box>
        <ExpandedAppBarExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="2-6" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/AppBar/examples/ExpandedAppBarExample.tsx"
        />
    </Box>
);
