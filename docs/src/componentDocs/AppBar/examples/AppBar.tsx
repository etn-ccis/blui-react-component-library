import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { AppBarExample } from './AppBarExample';

const codeSnippet = `<Box>
    <AppBar
        variant="snap"
        scrollContainerId={'appbarBodyFiller1'}
        position={'sticky'}
    >
        <Typography variant="h6">Content</Typography>
    </AppBar>
    <Box id='appbarBodyFiller1'>
        {getBodyFiller()}
    </Box>
</Box>
`;

export const AppBar = (): JSX.Element => (
    <Box>
        <AppBarExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="2-10" />
        <CodeBlockActionButtonRow copyText={codeSnippet} url="componentDocs/AppBar/examples/AppBarExample.tsx" />
    </Box>
);
