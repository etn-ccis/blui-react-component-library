import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CopyToClipboard, FullCodeOnGithub } from '../../../shared';
import { BasicDrawerBodyExample } from './BasicDrawerBodyExample';

const codeSnippet = `<Drawer open={true} width={250}>
    <DrawerBody>
        <DrawerNavGroup hidePadding>
            <DrawerNavItem title="Dashboard" itemID="1" />
            <DrawerNavItem title="Locations" itemID="2" />
            <DrawerNavItem title="Legal" itemID="3" />
        </DrawerNavGroup>
    </DrawerBody>
</Drawer>
`;

export const BasicDrawerBody = (): JSX.Element => (
    <Box>
        <BasicDrawerBodyExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="2-8" />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
            <CopyToClipboard title={'Copy All'} copyText={codeSnippet} />
            <FullCodeOnGithub sx={{ ml: 2 }} url="componentDocs/DrawerBody/examples/BasicDrawerBodyExample.tsx" />
        </Box>
    </Box>
);
