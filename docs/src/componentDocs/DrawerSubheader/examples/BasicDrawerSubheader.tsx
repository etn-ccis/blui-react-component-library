import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CopyToClipboard, FullCodeOnGithub } from '../../../shared';
import { BasicDrawerSubheaderExample } from './BasicDrawerSubheaderExample';

const codeSnippet = `<Drawer open={true} width={250}>
    <DrawerHeader title="Title" />
    <DrawerSubheader hideContentOnCollapse={false}>
        <Box>Custom Content Goes here</Box>
    </DrawerSubheader>
</Drawer>
`;

export const BasicDrawerSubheader = (): JSX.Element => (
    <Box>
        <BasicDrawerSubheaderExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="3-5" />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
            <CopyToClipboard title={'Copy All'} copyText={codeSnippet} />
            <FullCodeOnGithub
                sx={{ ml: 2 }}
                url="componentDocs/DrawerSubheader/examples/BasicDrawerSubheaderExample.tsx"
            />
        </Box>
    </Box>
);
