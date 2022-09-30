import React from 'react';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerRailItem } from '@brightlayer-ui/react-components';
import Box from '@mui/material/Box';
import Gavel from '@mui/icons-material/Gavel';
import { Devices, LocationOn } from '@mui/icons-material';
import * as colors from '@brightlayer-ui/colors';

export const RailDrawerExample = (): JSX.Element => (
    <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
        <Drawer open width={250} variant="rail" sx={{ mx: 'auto' }} noLayout>
            <DrawerBody sx={{ flex: '1 1 auto' }}>
                <DrawerNavGroup>
                    <DrawerRailItem title="Devices" icon={<Devices />} itemID="1" divider />
                    <DrawerRailItem title="Locations" icon={<LocationOn />} itemID="2" divider />
                    <DrawerRailItem title="Legal" icon={<Gavel />} itemID="3" divider />
                </DrawerNavGroup>
            </DrawerBody>
        </Drawer>
    </Box>
);
