import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CopyToClipboard, FullCodeOnGithub } from '../../../shared';
import { BasicDrawerExample } from './BasicDrawerExample';

const codeSnippet = `<Drawer open={true} width={250}>
    <DrawerHeader title="Title" />
    <DrawerBody sx={{ flex: '1 1 auto' }}>
        <DrawerNavGroup hidePadding>
            <DrawerNavItem title="Dashboard" itemID="1" />
            <DrawerNavItem title="Locations" itemID="2" />
            <DrawerNavItem title="Legal" itemID="3" />
        </DrawerNavGroup>
    </DrawerBody>
</Drawer>
`;

export const BasicDrawer = (): JSX.Element => (
    <Box>
        <BasicDrawerExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
            <CopyToClipboard title={'Copy All'} copyText={codeSnippet} />
            <FullCodeOnGithub sx={{ ml: 2 }} url="componentDocs/Drawer/examples/BasicDrawerExample.tsx" />
        </Box>
    </Box>
);
