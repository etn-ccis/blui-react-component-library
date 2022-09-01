import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CopyToClipboard, FullCodeOnGithub } from '../../../shared';
import { BasicDrawerFooterExample } from './BasicDrawerFooterExample';

const codeSnippet = `<Drawer open={true} width={250} sx={{ margin: '0 auto' }} noLayout>
    <DrawerBody sx={{ flex: '1 1 auto' }}>
        <DrawerNavGroup hidePadding>
            <DrawerNavItem title="Dashboard" itemID="1" />
            <DrawerNavItem title="Locations" itemID="2" />
            <DrawerNavItem title="Legal" itemID="3" />
        </DrawerNavGroup>
    </DrawerBody>
    <DrawerFooter sx={{ p: 2 }}>Footer Content Here</DrawerFooter>
</Drawer>
`;

export const BasicDrawerFooter = (): JSX.Element => (
    <Box>
        <BasicDrawerFooterExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="9-11" />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <CopyToClipboard title={'Copy All'} copyText={codeSnippet} />
            <FullCodeOnGithub sx={{ ml: 2 }} url="componentDocs/DrawerFooter/examples/BasicDrawerFooterExample.tsx" />
        </Box>
    </Box>
);
