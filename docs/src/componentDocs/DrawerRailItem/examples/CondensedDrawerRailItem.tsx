import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { CondensedDrawerRailItemExample } from './CondensedDrawerRailItemExample';

const codeSnippet = `<Drawer open width={250} variant="rail" condensed>
    <DrawerBody>
        <DrawerNavGroup>
            <DrawerRailItem title="Devices" icon={<Devices />} itemID="1" />
            <DrawerRailItem title="Locations" icon={<LocationOn />} itemID="2" />
            <DrawerRailItem title="Legal" icon={<Gavel />} itemID="3" />
        </DrawerNavGroup>
    </DrawerBody>
</Drawer>`;

export const CondensedDrawerRailItem = (): JSX.Element => (
    <Box>
        <CondensedDrawerRailItemExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/DrawerRailItem/examples/CondensedDrawerRailItemExample.tsx"
        />
    </Box>
);
