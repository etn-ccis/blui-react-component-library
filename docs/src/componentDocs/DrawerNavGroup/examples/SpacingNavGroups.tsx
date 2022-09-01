import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CopyToClipboard, FullCodeOnGithub } from '../../../shared';
import { SpacingNavGroupsExample } from './SpacingNavGroupsExample';

const codeSnippet = `<Drawer open={true} width={250} sx={{ margin: '0 auto', height: 350 }} noLayout>
    <DrawerBody sx={{ flex: '1 1 auto' }}>
        <DrawerNavGroup title="Group 1" hidePadding>
            <DrawerNavItem title="Item 1" itemID="1" />
            <DrawerNavItem title="Item 2" itemID="2" />
        </DrawerNavGroup>
        <Spacer />
        <Divider />
        <DrawerNavGroup title="Group 2" hidePadding>
            <DrawerNavItem title="Item 3" itemID="3" />
            <DrawerNavItem title="Item 4" itemID="4" />
        </DrawerNavGroup>
    </DrawerBody>
</Drawer>
`;
export const SpacingNavGroups = (): JSX.Element => (
    <Box>
        <SpacingNavGroupsExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="3-12" />{' '}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <CopyToClipboard title={'Copy All'} copyText={codeSnippet} />
            <FullCodeOnGithub sx={{ ml: 2 }} url="componentDocs/DrawerNavGroup/examples/SpacingNavGroupsExample.tsx" />
        </Box>
    </Box>
);
