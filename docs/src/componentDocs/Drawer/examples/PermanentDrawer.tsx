import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { PermanentDrawerExample } from './PermanentDrawerExample';

const codeSnippet = `<Drawer open width={250} variant="permanent">
    <DrawerHeader title="Header" />
    <DrawerBody hidePadding>
        <DrawerNavGroup>
            <DrawerNavItem title="Dashboard" itemID="1" />
            <DrawerNavItem title="Locations" itemID="2" />
            <DrawerNavItem title="Legal" itemID="3" />
        </DrawerNavGroup>
    </DrawerBody>
</Drawer>`;

export const PermanentDrawer = (): JSX.Element => (
    <Box>
        <PermanentDrawerExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine={'1'} />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/Drawer/examples/PermanentDrawerExample.tsx"
        />
    </Box>
);
