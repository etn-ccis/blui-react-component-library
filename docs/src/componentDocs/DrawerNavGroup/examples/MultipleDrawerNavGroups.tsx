import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CopyToClipboard, FullCodeOnGithub } from '../../../shared';
import { MultipleDrawerNavGroupsExample } from './MultipleDrawerNavGroupsExample';

const codeSnippet = `<Drawer>
    <DrawerBody>
        <DrawerNavGroup title="Locations" hidePadding divider>
            <DrawerNavItem title="Regional" itemID="1" />
            <DrawerNavItem title="National" itemID="2" />
        </DrawerNavGroup>
        <DrawerNavGroup title="Status" hidePadding divider>
            <DrawerNavItem title="Network" itemID="1" />
            <DrawerNavItem title="Node" itemID="2" />
        </DrawerNavGroup>
    </DrawerBody>
</Drawer>
`;

export const MultipleDrawerNavGroups = (): JSX.Element => (
    <Box>
        <MultipleDrawerNavGroupsExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="3-10" />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <CopyToClipboard title={'Copy All'} copyText={codeSnippet} />
            <FullCodeOnGithub
                sx={{ ml: 2 }}
                url="componentDocs/DrawerNavGroup/examples/MultipleDrawerNavGroupsExample.tsx"
            />
        </Box>
    </Box>
);
