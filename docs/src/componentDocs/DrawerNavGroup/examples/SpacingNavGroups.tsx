import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { SpacingNavGroupsExample } from './SpacingNavGroupsExample';

const codeSnippet = `<Drawer open={true} width={250}>
    <DrawerBody>
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
        <CodeBlock code={codeSnippet} language="jsx" dataLine="3-12" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/DrawerNavGroup/examples/SpacingNavGroupsExample.tsx"
        />
    </Box>
);
