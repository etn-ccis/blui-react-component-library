import React, { useState } from 'react';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem, DrawerHeader } from '@brightlayer-ui/react-components';
import Box from '@mui/material/Box';
import Dashboard from '@mui/icons-material/Dashboard';
import Notifications from '@mui/icons-material/Notifications';
import Gavel from '@mui/icons-material/Gavel';
import Menu from '@mui/icons-material/Menu';
import * as colors from '@brightlayer-ui/colors';

export const PersistentDrawerExample = (): JSX.Element => {
    const [open, setOpen] = useState(true);
    return (
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
            <Drawer open={open} width={332} variant="persistent" sx={{ mx: 'auto' }} noLayout>
                <DrawerHeader title="Title" icon={<Menu />} onClick={(): void => setOpen(!open)} />
                <DrawerBody sx={{ flex: '1 1 auto' }}>
                    <DrawerNavGroup>
                        <DrawerNavItem title="Dashboard" icon={<Dashboard />} itemID="1" />
                        <DrawerNavItem title="Locations" icon={<Notifications />} itemID="2" />
                        <DrawerNavItem title="Legal" icon={<Gavel />} itemID="3" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        </Box>
    );
};
