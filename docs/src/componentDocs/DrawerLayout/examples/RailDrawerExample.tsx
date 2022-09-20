import React from 'react';
import { DrawerLayout, Drawer, DrawerBody, DrawerNavGroup, DrawerRailItem } from '@brightlayer-ui/react-components';
import Box from '@mui/material/Box';
import Gavel from '@mui/icons-material/Gavel';
import { Devices, LocationOn } from '@mui/icons-material';

export const RailDrawerExample = (): JSX.Element => (
    <DrawerLayout
        drawer={
            <Drawer open={true} width={332} variant={'rail'}>
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerRailItem title="Devices" icon={<Devices />} itemID="1" divider/>
                        <DrawerRailItem title="Locations" icon={<LocationOn />} itemID="2" divider/>
                        <DrawerRailItem title="Legal" icon={<Gavel />} itemID="3" divider/>
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        }
        sx={{
            '& .BluiDrawerLayout-drawer': { position: 'absolute', height: 210, zIndex: 'auto' },
            '& .BluiDrawerLayout-content': { zIndex: 'auto' },
        }}
    >
        <Box sx={{ p: 2, backgroundColor: (theme) => theme.palette.background.paper, height: 210 }}>
            App Content Here.
        </Box>
    </DrawerLayout>
);
