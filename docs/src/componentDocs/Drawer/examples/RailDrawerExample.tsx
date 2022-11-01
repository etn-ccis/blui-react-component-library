import React from 'react';
import { Drawer, DrawerBody, DrawerLayout, DrawerNavGroup, DrawerRailItem } from '@brightlayer-ui/react-components';
import Gavel from '@mui/icons-material/Gavel';
import { Devices, LocationOn } from '@mui/icons-material';
import { ExampleShowcase } from '../../../shared';
import { Box } from '@mui/material';

export const RailDrawerExample = (): JSX.Element => (
    <ExampleShowcase>
        <DrawerLayout
            drawer={
                <Drawer open variant="rail">
                    <DrawerBody>
                        <DrawerNavGroup>
                            <DrawerRailItem title="Devices" icon={<Devices />} itemID="1" divider />
                            <DrawerRailItem title="Locations" icon={<LocationOn />} itemID="2" divider />
                            <DrawerRailItem title="Legal" icon={<Gavel />} itemID="3" divider />
                        </DrawerNavGroup>
                    </DrawerBody>
                </Drawer>
            }
            sx={{
                '& .BluiDrawerLayout-drawer': { position: 'absolute', height: 250, zIndex: 'auto' },
                '& .BluiDrawerLayout-content': { zIndex: 'auto' },
            }}
        >
            <Box sx={{ p: 2, backgroundColor: 'background.paper', height: 250 }}>App Content Here.</Box>
        </DrawerLayout>
    </ExampleShowcase>
);
