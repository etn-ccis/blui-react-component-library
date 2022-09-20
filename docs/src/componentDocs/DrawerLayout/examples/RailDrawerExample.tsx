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
                        <DrawerRailItem
                            sx={{ cursor: 'pointer' }}
                            title="Devices"
                            icon={<Devices />}
                            itemID="1"
                            divider
                        />
                        <DrawerRailItem
                            sx={{ cursor: 'pointer' }}
                            title="Locations"
                            icon={<LocationOn />}
                            itemID="2"
                            divider
                        />
                        <DrawerRailItem sx={{ cursor: 'pointer' }} title="Legal" icon={<Gavel />} itemID="3" divider />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        }
        sx={{
            '& .BluiDrawerLayout-drawer': { position: 'absolute', height: 216, zIndex: 'auto' },
            '& .BluiDrawerLayout-content': { zIndex: 'auto' },
        }}
    >
        <Box sx={{ p: 2, backgroundColor: (theme) => theme.palette.background.paper, height: 216 }}>
            App Content Here.
        </Box>
    </DrawerLayout>
);
