import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { RailDrawerExample } from './RailDrawerExample';

const codeSnippet = `<Drawer open width={250} variant="rail">
    <DrawerBody>
        <DrawerNavGroup>
            <DrawerRailItem title="Devices" icon={<Devices />} itemID="1" divider />
            <DrawerRailItem
                title="Locations"
                icon={<LocationOn />}
                itemID="2"
                divider
            />
            <DrawerRailItem title="Legal" icon={<Gavel />} itemID="3" divider />
        </DrawerNavGroup>
    </DrawerBody>
</Drawer>`;

export const RailDrawer = (): JSX.Element => (
    <Box>
            <RailDrawerExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow copyText={codeSnippet} url="componentDocs/Drawer/examples/RailDrawerExample.tsx" />
    </Box>
);
