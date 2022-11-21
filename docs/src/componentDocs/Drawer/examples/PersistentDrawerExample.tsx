import React, { useState } from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerNavGroup,
    DrawerNavItem,
    DrawerHeader,
    DrawerLayout,
} from '@brightlayer-ui/react-components';
import Dashboard from '@mui/icons-material/Dashboard';
import Notifications from '@mui/icons-material/Notifications';
import Gavel from '@mui/icons-material/Gavel';
import Menu from '@mui/icons-material/Menu';
import { ExampleShowcase } from '../../../shared';
import Box from '@mui/material/Box';

export const PersistentDrawerExample = (): JSX.Element => {
    const [open, setOpen] = useState(true);
    return (
        <ExampleShowcase>
            <DrawerLayout
                drawer={
                    <Drawer open={open} width={332} variant="persistent">
                        <DrawerHeader
                            title="Title"
                            icon={<Menu />}
                            onClick={(): void => setOpen(!open)}
                            sx={{ cursor: 'pointer' }}
                        />
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
                    '& .BluiDrawerLayout-drawer': { position: 'absolute', height: 250, zIndex: 'auto' },
                    '& .BluiDrawerLayout-content': { zIndex: 'auto' },
                }}
            >
                <Box sx={{ p: 2, backgroundColor: 'background.paper', height: 250 }}>App Content Here.</Box>
            </DrawerLayout>
        </ExampleShowcase>
    );
};
