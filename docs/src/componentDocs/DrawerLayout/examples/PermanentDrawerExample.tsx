import React from 'react';
import { DrawerLayout, Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-components';
import Box from '@mui/material/Box';

export const PermanentDrawerExample = (): JSX.Element => (
    <DrawerLayout
        drawer={
            <Drawer open={true} width={332} variant={'permanent'}>
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem title="Dashboard" itemID="1" hidePadding />
                        <DrawerNavItem title="Locations" itemID="2" hidePadding />
                        <DrawerNavItem title="Legal" itemID="3" hidePadding />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        }
        sx={{
            '& .BluiDrawerLayout-drawer': { position: 'absolute', height: 250, zIndex: 'auto' },
            '& .BluiDrawerLayout-content': { zIndex: 'auto' },
        }}
    >
        <Box sx={{ p: 2, backgroundColor: (theme) => theme.palette.background.paper, height: 250 }}>
            App Content Here.
        </Box>
    </DrawerLayout>
);
