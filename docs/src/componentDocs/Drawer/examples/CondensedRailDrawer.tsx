import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { CondensedRailDrawerExample } from './CondensedRailDrawerExample';

const codeSnippet = ` <Drawer open width={250} variant="rail" condensed>
    <DrawerBody>
        <DrawerNavGroup>
            <DrawerRailItem title="Devices" icon={<Devices />} itemID="1" />
            <DrawerRailItem title="Locations" icon={<LocationOn />} itemID="2" />
            <DrawerRailItem title="Legal" icon={<Gavel />} itemID="3" />
        </DrawerNavGroup>
    </DrawerBody>
</Drawer>`;

export const CondensedRailDrawer = (): JSX.Element => (
    <Box>
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
            <CondensedRailDrawerExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/Drawer/examples/CondensedRailDrawerExample.tsx"
        />
    </Box>
);
