import React from 'react';
import { Box } from '@mui/material';
import { Drawer, DrawerHeader, DrawerSubheader } from '@brightlayer-ui/react-components';
import { ExampleShowcase } from '../../../shared';

export const BasicDrawerSubheaderExample = (): JSX.Element => (
    <ExampleShowcase>
        <Drawer open width={250} sx={{ mx: 'auto' }} noLayout>
            <DrawerHeader title="Title" />
            <DrawerSubheader hideContentOnCollapse={false}>
                <Box sx={{ p: 2 }}>Custom Content Goes here</Box>
            </DrawerSubheader>
        </Drawer>
    </ExampleShowcase>
);
