import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { DrawerLayoutExample } from './DrawerLayoutExample';

const codeSnippet = `<DrawerLayout
    drawer={
        <Drawer open={open} width={332} variant={'persistent'}>
            <DrawerHeader
                title="Title"
                icon={<Menu />}
                onClick={(): void => setOpen(!open)}
            />
            <DrawerBody>
                <DrawerNavGroup>
                    <DrawerNavItem title="Dashboard" icon={<Dashboard />} itemID="1" />
                    <DrawerNavItem title="Locations" icon={<Notifications />} itemID="2" />
                    <DrawerNavItem title="Legal" icon={<Gavel />} itemID="3" />
                </DrawerNavGroup>
            </DrawerBody>
        </Drawer>
    }
    >
    <Box>
        App Content Here.
    </Box>
</DrawerLayout>`;

export const DrawerLayout = (): JSX.Element => (
    <Box>
        <DrawerLayoutExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/DrawerLayout/examples/DrawerLayoutExample.tsx"
        />
    </Box>
);
