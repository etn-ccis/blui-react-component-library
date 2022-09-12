import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { MultipleDrawerNavGroupsExample } from './MultipleDrawerNavGroupsExample';

const codeSnippet = `<Drawer open={true} width={250}>
    <DrawerBody>
        <DrawerNavGroup title="Locations" hidePadding divider>
            <DrawerNavItem title="Regional" itemID="1" divider={false} />
            <DrawerNavItem title="National" itemID="2" divider={false} />
        </DrawerNavGroup>
        <DrawerNavGroup title="Status" hidePadding divider>
            <DrawerNavItem title="Network" itemID="3" divider={false} />
            <DrawerNavItem title="Node" itemID="4" divider={false} />
        </DrawerNavGroup>
    </DrawerBody>
</Drawer>
`;

export const MultipleDrawerNavGroups = (): JSX.Element => (
    <Box>
        <MultipleDrawerNavGroupsExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="3-10" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/DrawerNavGroup/examples/MultipleDrawerNavGroupsExample.tsx"
        />
    </Box>
);
