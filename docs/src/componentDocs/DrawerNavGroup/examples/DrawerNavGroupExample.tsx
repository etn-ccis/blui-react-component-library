import React from 'react';
import { Box } from '@mui/material';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-components';
import * as colors from '@brightlayer-ui/colors';

export const DrawerNavGroupExample = (): JSX.Element => (
    <Box sx={{ my: 2, backgroundColor: colors.white[600], p: 4 }}>
        <Drawer open={true} width={250} sx={{ mx: 'auto' }} noLayout>
            <DrawerBody sx={{ flex: '1 1 auto' }}>
                <DrawerNavGroup title="Locations" hidePadding divider>
                    <DrawerNavItem title="Regional" itemID="1" divider={false} />
                    <DrawerNavItem title="National" itemID="2" divider={false} />
                </DrawerNavGroup>
                <DrawerNavGroup title="Status" hidePadding divider>
                    <DrawerNavItem title="Network" itemID="3" divider={false} />
                    <DrawerNavItem title="Node" itemID="4" divider={false} />
                </DrawerNavGroup>
            </DrawerBody>
        </Drawer>
    </Box>
);
