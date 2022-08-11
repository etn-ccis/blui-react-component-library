import React from 'react';
import { Box } from '@mui/material';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-components';
import * as colors from '@brightlayer-ui/colors';

export const BasicDrawerNavItemExample = (): JSX.Element => {
    return (
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
            <Drawer open={true} width={250} sx={{ margin: '0 auto' }} noLayout>
                <DrawerBody sx={{ flex: '1 1 auto' }}>
                    <DrawerNavGroup hidePadding>
                        <DrawerNavItem title="Dashboard" itemID="1" />
                        <DrawerNavItem title="Locations" itemID="2" />
                        <DrawerNavItem title="Legal" itemID="3" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        </Box>
    );
};
