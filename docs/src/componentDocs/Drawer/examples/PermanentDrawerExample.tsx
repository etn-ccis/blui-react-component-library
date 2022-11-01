import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerLayout,
    DrawerNavGroup,
    DrawerNavItem,
} from '@brightlayer-ui/react-components';
import { ExampleShowcase } from '../../../shared';
import { Box } from '@mui/material';

export const PermanentDrawerExample = (): JSX.Element => (
    <ExampleShowcase>
        <DrawerLayout
            drawer={
                <Drawer open={true} width={332} variant="permanent">
                    <DrawerHeader title="Header" />
                    <DrawerBody hidePadding>
                        <DrawerNavGroup>
                            <DrawerNavItem title="Dashboard" itemID="1" />
                            <DrawerNavItem title="Locations" itemID="2" />
                            <DrawerNavItem title="Legal" itemID="3" />
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
