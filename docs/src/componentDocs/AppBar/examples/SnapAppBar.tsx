import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { SnapAppBarExample } from './SnapAppBarExample';

const codeSnippet = `<Box>
    <AppBar
        variant="snap"
        scrollContainerId={'appbarBodyFiller1'}
        position={'sticky'}
    >
        <Toolbar>
            <Typography variant="h6">Content</Typography>
        </Toolbar>
    </AppBar>
    <Box id='appbarBodyFiller1'>
        {getBodyFiller()}
    </Box>
</Box>
`;

export const SnapAppBar = (): JSX.Element => (
    <Box>
        <SnapAppBarExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="2-10" />
        <CodeBlockActionButtonRow copyText={codeSnippet} url="componentDocs/AppBar/examples/SnapAppBarExample.tsx" />
    </Box>
);
