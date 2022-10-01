import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { DrawerNavItemNestedItemsExample } from './DrawerNavItemNestedItemsExample';

const codeSnippet = `<DrawerBody>
    <DrawerNavGroup>
        <DrawerNavItem title="Locations" itemID="Locations" hidePadding={true}>
            <DrawerNavItem title="By Type" itemID="By Type" hidePadding={false}/>
            <DrawerNavItem title="By State" itemID="By State" hidePadding={false}/>
        </DrawerNavItem>
        <DrawerNavItem title="Reports" itemID="Reports" hidePadding={true}>
            <DrawerNavItem title="Local" itemID="Local" hidePadding={false}/>
            <DrawerNavItem title="Regional" itemID="Regional" hidePadding={false}/>
        </DrawerNavItem>
        <DrawerNavItem title="Users" itemID="Users" hidePadding={true}/>
    </DrawerNavGroup>
</DrawerBody>
`;

export const DrawerNavItemNestedItems = (): JSX.Element => (
    <Box>
        <Box sx={{ m: '32px 0', backgroundColor: colors.white[600], p: 4 }}>
            <DrawerNavItemNestedItemsExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" dataLine="3-11" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/DrawerNavItem/examples/DrawerNavItemNestedItemsExample.tsx"
        />
    </Box>
);
