import React from 'react';
import { DrawerLayout, Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-components';
import Box from '@mui/material/Box';
import Dashboard from '@mui/icons-material/Dashboard';
import Notifications from '@mui/icons-material/Notifications';
import Gavel from '@mui/icons-material/Gavel';

export const RailDrawerExample = (): JSX.Element => (
    <DrawerLayout
        drawer={
            <Drawer open={true} width={332} variant={'rail'}>
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem title="Dashboard" icon={<Dashboard />} itemID="1" />
                        <DrawerNavItem title="Locations" icon={<Notifications />} itemID="2" />
                        <DrawerNavItem title="Legal" icon={<Gavel />} itemID="3" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        }
        sx={{
            '& .BluiDrawerLayout-drawer': { position: 'absolute', height: 160, zIndex: 'auto' },
            '& .BluiDrawerLayout-content': { zIndex: 'auto' },
        }}
    >
        <Box sx={{ p: 2, backgroundColor: (theme) => theme.palette.background.paper, height: 160 }}>
            App Content Here.
        </Box>
    </DrawerLayout>
);
