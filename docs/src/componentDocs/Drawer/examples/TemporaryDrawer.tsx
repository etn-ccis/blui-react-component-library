import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { TemporaryDrawerExample } from './TemporaryDrawerExample';

const codeSnippet = `<Drawer open={open} variant="temporary">
    <DrawerHeader
        title="Title"
        icon={<Close />}
        onClick={(): void => setOpen(false)}
    />
    <DrawerBody>
        <DrawerNavGroup>
            <DrawerNavItem
                title="Dashboard"
                itemID="1"
                hidePadding
                onClick={(): void => setOpen(false)}
            />
            <DrawerNavItem
                title="Locations"
                itemID="2"
                hidePadding
                onClick={(): void => setOpen(false)}
            />
            <DrawerNavItem
                title="Legal"
                itemID="3"
                hidePadding
                onClick={(): void => setOpen(false)}
            />
        </DrawerNavGroup>
    </DrawerBody>
</Drawer>`;

export const TemporaryDrawer = (): JSX.Element => (
    <Box>
        <TemporaryDrawerExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine={'1'} />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/Drawer/examples/TemporaryDrawerExample.tsx"
        />
    </Box>
);
