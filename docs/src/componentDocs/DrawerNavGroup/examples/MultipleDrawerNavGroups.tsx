import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CopyToClipboard } from '../../../shared';
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
        <CopyToClipboard title={'Copy All'} copyText={codeSnippet} />
    </Box>
);
