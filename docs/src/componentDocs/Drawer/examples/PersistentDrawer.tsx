import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { PersistentDrawerExample } from './PersistentDrawerExample';

const codeSnippet = `<Drawer open={open} width={332} variant="persistent">
    <DrawerHeader title="Title" icon={<Menu />} onClick={(): void => setOpen(!open)} />
    <DrawerBody hidePadding>
        <DrawerNavGroup>
            <DrawerNavItem title="Dashboard" icon={<Dashboard />} itemID="1" />
            <DrawerNavItem title="Locations" icon={<Notifications />} itemID="2" />
            <DrawerNavItem title="Legal" icon={<Gavel />} itemID="3" />
        </DrawerNavGroup>
    </DrawerBody>
</Drawer>`;

export const PersistentDrawer = (): JSX.Element => (
    <Box>
        <PersistentDrawerExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine={'1'} />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/Drawer/examples/PersistentDrawerExample.tsx"
        />
    </Box>
);
