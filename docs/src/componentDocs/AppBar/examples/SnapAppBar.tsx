import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { SnapAppBarExample } from './SnapAppBarExample';

const codeSnippet = `<Box>
    <AppBar
        variant={'snap'}
        expandedHeight={200}
        collapsedHeight={64}
        scrollThreshold={100}
        scrollContainerId="appBarSnapContainer"
        animationDuration={300}
    >
        <Toolbar>
            <Typography variant="h6">Content</Typography>
        </Toolbar>
    </AppBar>
    <Box id='appBarSnapContainer'>
        {getBodyFiller()}
    </Box>
</Box>
`;

export const SnapAppBar = (): JSX.Element => (
    <Box>
        <SnapAppBarExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="2-13" />
        <CodeBlockActionButtonRow copyText={codeSnippet} url="componentDocs/AppBar/examples/SnapAppBarExample.tsx" />
    </Box>
);
