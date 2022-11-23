import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { BasicDrawerExample } from './BasicDrawerExample';

const codeSnippet = `<Drawer open width={250}>
    <DrawerHeader title="Header" />
    <DrawerSubheader>
        <Box>Subheader Content Here</Box>
    </DrawerSubheader>
    <DrawerBody>
        <DrawerNavGroup hidePadding>
            <DrawerNavItem title="Item 1" itemID="1" />
            <DrawerNavItem title="Item 2" itemID="2" />
            <DrawerNavItem title="Item 3" itemID="3" />
        </DrawerNavGroup>
    </DrawerBody>
    <DrawerFooter>
        <Box>Footer Content Here</Box>
    </DrawerFooter>
</Drawer>
`;

export const BasicDrawer = (): JSX.Element => (
    <Box>
        <BasicDrawerExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow copyText={codeSnippet} url="componentDocs/Drawer/examples/BasicDrawerExample.tsx" />
    </Box>
);
