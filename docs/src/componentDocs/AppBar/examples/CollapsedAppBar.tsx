import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { CollapsedAppBarExample } from './CollapsedAppBarExample';

const codeSnippet = `<Box>
    <AppBar variant={'collapsed'}>
        <Typography variant="h6">Content</Typography>
    </AppBar>
    <Box>
        {getBodyFiller()}
    </Box>
</Box>
`;

export const CollapsedAppBar = (): JSX.Element => (
    <Box>
        <CollapsedAppBarExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="2" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/AppBar/examples/CollapsedAppBarExample.tsx"
        />
    </Box>
);
