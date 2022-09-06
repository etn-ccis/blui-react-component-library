import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CopyToClipboard, FullCodeOnGithub } from '../../../shared';
import { DrawerAnatomyExample } from './DrawerAnatomyExample';

const codeSnippet = `<Drawer open={true} width={250} sx={{ margin: '0 auto' }} noLayout>
    <DrawerHeader title="Header" />
    <DrawerSubheader>
        <Box sx={{p: 2}}>Subheader Content Here</Box>
    </DrawerSubheader>
    <DrawerBody sx={{ flex: '1 1 auto' }}>
        <DrawerNavGroup hidePadding>
            <DrawerNavItem title="Item 1" itemID="1" />
            <DrawerNavItem title="Item 2" itemID="2" />
            <DrawerNavItem title="Item 3" itemID="3" />
        </DrawerNavGroup>
    </DrawerBody>
    <DrawerFooter>
        <Box sx={{p: 2}}>Footer Content Here</Box>
    </DrawerFooter>
</Drawer>
`;

export const DrawerAnatomy = (): JSX.Element => (
    <Box>
        <DrawerAnatomyExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="3-5" />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
            <CopyToClipboard title={'Copy All'} copyText={codeSnippet} />
            <FullCodeOnGithub sx={{ ml: 2 }} url="componentDocs/Drawer/examples/DrawerAnatomyExample.tsx" />
        </Box>
    </Box>
);
