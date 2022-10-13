import React from 'react';
import { Box, Divider } from '@mui/material';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem, Spacer } from '@brightlayer-ui/react-components';
import * as colors from '@brightlayer-ui/colors';

export const SpacingNavGroupsExample = (): JSX.Element => (
    <Box sx={{ my: 2, backgroundColor: colors.white[600], p: 4 }}>
        <Drawer open={true} width={250} sx={{ mx: 'auto', height: 350 }} noLayout>
            <DrawerBody sx={{ flex: '1 1 auto' }}>
                <DrawerNavGroup title="Group 1" hidePadding titleDivider={false}>
                    <DrawerNavItem title="Item 1" itemID="1" />
                    <DrawerNavItem title="Item 2" itemID="2" />
                </DrawerNavGroup>
                <Spacer />
                <Divider />
                <DrawerNavGroup title="Group 2" hidePadding titleDivider={false}>
                    <DrawerNavItem title="Item 3" itemID="3" />
                    <DrawerNavItem title="Item 4" itemID="4" />
                </DrawerNavGroup>
            </DrawerBody>
        </Drawer>
    </Box>
);
