import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { PermanentDrawerExample } from './PermanentDrawerExample';

const codeSnippet = `<DrawerLayout
    drawer={
        <Drawer open={true} width={332} variant={'permanent'}>
            <DrawerBody>
                <DrawerNavGroup>
                    <DrawerNavItem title="Dashboard" itemID="1" />
                    <DrawerNavItem title="Locations" itemID="2" />
                    <DrawerNavItem title="Legal" itemID="3" />
                </DrawerNavGroup>
            </DrawerBody>
        </Drawer>
    }
    >
    <Box>
        App Content Here.
    </Box>
</DrawerLayout>`;

export const PermanentDrawer = (): JSX.Element => (
    <Box>
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
            <PermanentDrawerExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/DrawerLayout/examples/PermanentDrawerExample.tsx"
        />
    </Box>
);
