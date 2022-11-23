import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { BasicDrawerSubheaderExample } from './BasicDrawerSubheaderExample';

const codeSnippet = `<Drawer open width={250}>
    <DrawerHeader title="Title" />
    <DrawerSubheader hideContentOnCollapse={false}>
        <Box>Custom Content Goes here</Box>
    </DrawerSubheader>
    <DrawerBody>
        <DrawerNavGroup>
            <DrawerNavItem title="Dashboard" itemID="1" />
            <DrawerNavItem title="Locations" itemID="2" />
        </DrawerNavGroup>
    </DrawerBody>
</Drawer>
`;

export const BasicDrawerSubheader = (): JSX.Element => (
    <Box>
        <BasicDrawerSubheaderExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="3-5" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/DrawerSubheader/examples/BasicDrawerSubheaderExample.tsx"
        />
    </Box>
);
