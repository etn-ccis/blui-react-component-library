import React from 'react';
import { Drawer, DrawerBody, DrawerHeader, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-components';
import Box from '@mui/material/Box';
import * as colors from '@brightlayer-ui/colors';

export const PermanentDrawerExample = (): JSX.Element => (
    <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
        <Drawer open width={250} variant="permanent" sx={{ mx: 'auto' }} noLayout>
            <DrawerHeader title="Header" />
            <DrawerBody sx={{ flex: '1 1 auto' }}>
                <DrawerNavGroup>
                    <DrawerNavItem title="Dashboard" itemID="1" hidePadding />
                    <DrawerNavItem title="Locations" itemID="2" hidePadding />
                    <DrawerNavItem title="Legal" itemID="3" hidePadding />
                </DrawerNavGroup>
            </DrawerBody>
        </Drawer>
    </Box>
);
