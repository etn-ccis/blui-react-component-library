import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { BasicDrawerRailItemExample } from './BasicDrawerRailItemExample';

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

export const BasicDrawerRailItem = (): JSX.Element => (
    <Box>
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
            <BasicDrawerRailItemExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/DrawerRailItem/examples/BasicDrawerRailItemExample.tsx"
        />
    </Box>
);
