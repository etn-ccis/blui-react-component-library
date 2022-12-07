import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { DrawerNavItemNestedItemsExample } from './DrawerNavItemNestedItemsExample';

const codeSnippet = `<DrawerBody>
    <DrawerNavGroup>
        <DrawerNavItem title="Locations" itemID="Locations">
            <DrawerNavItem title="By Type" itemID="By Type" hidePadding={false}/>
            <DrawerNavItem title="By State" itemID="By State" hidePadding={false}/>
        </DrawerNavItem>
        <DrawerNavItem title="Reports" itemID="Reports"/>
        <DrawerNavItem title="Users" itemID="Users"/>
    </DrawerNavGroup>
</DrawerBody>
`;

export const DrawerNavItemNestedItems = (): JSX.Element => (
    <Box>
        <DrawerNavItemNestedItemsExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="3-6" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/DrawerNavItem/examples/DrawerNavItemNestedItemsExample.tsx"
        />
    </Box>
);
