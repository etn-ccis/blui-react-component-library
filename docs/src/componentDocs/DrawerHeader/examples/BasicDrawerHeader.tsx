import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CopyToClipboard, FullCodeOnGithub } from '../../../shared';
import { BasicDrawerHeaderExample } from './BasicDrawerHeaderExample';

const codeSnippet = `<Drawer open={true} width={250}>
    <DrawerHeader title="Title" />
</Drawer>
`;

export const BasicDrawerHeader = (): JSX.Element => (
    <Box>
        <BasicDrawerHeaderExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="2" />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
            <CopyToClipboard title={'Copy All'} copyText={codeSnippet} />
            <FullCodeOnGithub sx={{ ml: 2 }} url="componentDocs/DrawerHeader/examples/BasicDrawerHeaderExample.tsx" />
        </Box>
    </Box>
);
