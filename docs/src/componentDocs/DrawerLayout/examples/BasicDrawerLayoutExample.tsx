import React, { useState } from 'react';
import {
    DrawerLayout,
    Drawer,
    DrawerBody,
    DrawerNavGroup,
    DrawerNavItem,
    DrawerHeader,
} from '@brightlayer-ui/react-components';
import Box from '@mui/material/Box';
import Dashboard from '@mui/icons-material/Dashboard';
import Notifications from '@mui/icons-material/Notifications';
import Gavel from '@mui/icons-material/Gavel';
import Menu from '@mui/icons-material/Menu';

export const BasicDrawerLayoutExample = (): JSX.Element => {
    const [open, setOpen] = useState(true);
    return (
        <DrawerLayout
            drawer={
                <Drawer open={open} width={332} variant={'persistent'}>
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
    );
};
