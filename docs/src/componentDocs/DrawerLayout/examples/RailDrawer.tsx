import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { RailDrawerExample } from './RailDrawerExample';

const codeSnippet = `<DrawerLayout
    drawer={
        <Drawer open={true} width={332} variant={'rail'}>
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

export const RailDrawer = (): JSX.Element => (
    <Box>
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
            <RailDrawerExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/DrawerLayout/examples/RailDrawerExample.tsx"
        />
    </Box>
);
