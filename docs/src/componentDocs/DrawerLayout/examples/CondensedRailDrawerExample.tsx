import React from 'react';
import { DrawerLayout, Drawer, DrawerBody, DrawerNavGroup, DrawerRailItem } from '@brightlayer-ui/react-components';
import Box from '@mui/material/Box';
import Gavel from '@mui/icons-material/Gavel';
import { Devices, LocationOn } from '@mui/icons-material';

export const CondensedRailDrawerExample = (): JSX.Element => (
    <DrawerLayout
        drawer={
            <Drawer open={true} width={332} variant={'rail'} condensed={true}>
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerRailItem title="Devices" icon={<Devices />} itemID="1" />
                        <DrawerRailItem title="Locations" icon={<LocationOn />} itemID="2" />
                        <DrawerRailItem title="Legal" icon={<Gavel />} itemID="3" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        }
        sx={{
            '& .BluiDrawerLayout-drawer': { position: 'absolute', height: 216, zIndex: 'auto' },
            '& .BluiDrawerLayout-content': { zIndex: 'auto' },
        }}
    >
        <Box sx={{ p: 2, backgroundColor: 'background.paper', height: 216 }}>App Content Here.</Box>
    </DrawerLayout>
);
