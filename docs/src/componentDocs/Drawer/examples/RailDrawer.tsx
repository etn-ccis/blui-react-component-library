import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { RailDrawerExample } from './RailDrawerExample';

const codeSnippet = `<DrawerLayout
    drawer={
        <Drawer open={true} variant={'rail'}>
            <DrawerBody>
                <DrawerNavGroup>
                    <DrawerRailItem title="Devices" icon={<Devices />} itemID="1"/>
                    <DrawerRailItem title="Locations" icon={<LocationOn />} itemID="2"/>
                    <DrawerRailItem title="Legal" icon={<Gavel />} itemID="3"/>
                </DrawerNavGroup>
            </DrawerBody>
        </Drawer>
    }
    >
    <Box>
        App Content Here.
    </Box>
</DrawerLayout>`;

export const RailDrawer = (): JSX.Element => (
    <Box>
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
            <RailDrawerExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/Drawer/examples/RailDrawerExample.tsx"
        />
    </Box>
);
