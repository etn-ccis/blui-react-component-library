import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { DrawerNavItemExample } from './DrawerNavItemExample';

const codeSnippet = `<DrawerBody>
    <DrawerNavGroup>
        <DrawerNavItem title="Dashboard" icon={<Dashboard/>} itemID="1" />
        <DrawerNavItem title="Locations" icon={<Notifications />} itemID="2" />
        <DrawerNavItem title="Legal" icon={<Gavel />} itemID="3" />
    </DrawerNavGroup>
</DrawerBody>
`;

export const DrawerNavItem = (): JSX.Element => (
    <Box>
        <DrawerNavItemExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="3-5" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/DrawerNavItem/examples/DrawerNavItemExample.tsx"
        />
    </Box>
);
