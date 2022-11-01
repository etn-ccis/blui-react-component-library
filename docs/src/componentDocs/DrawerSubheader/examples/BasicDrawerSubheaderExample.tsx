import React from 'react';
import { Box } from '@mui/material';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerNavGroup,
    DrawerNavItem,
    DrawerSubheader,
} from '@brightlayer-ui/react-components';
import { ExampleShowcase } from '../../../shared';

export const BasicDrawerSubheaderExample = (): JSX.Element => (
    <ExampleShowcase>
        <Drawer open width={250} sx={{ mx: 'auto' }} noLayout>
            <DrawerHeader title="Title" />
            <DrawerSubheader hideContentOnCollapse={false}>
                <Box sx={{ p: 2 }}>Custom Content Goes here</Box>
            </DrawerSubheader>
            <DrawerBody sx={{ flex: '1 1 auto', mt: 1 }}>
                <DrawerNavGroup>
                    <DrawerNavItem title="Dashboard" itemID="1" hidePadding />
                    <DrawerNavItem title="Locations" itemID="2" hidePadding />
                </DrawerNavGroup>
            </DrawerBody>
        </Drawer>
    </ExampleShowcase>
);
