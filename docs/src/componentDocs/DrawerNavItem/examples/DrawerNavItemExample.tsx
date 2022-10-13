import React from 'react';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-components';
import Dashboard from '@mui/icons-material/Dashboard';
import Notifications from '@mui/icons-material/Notifications';
import Gavel from '@mui/icons-material/Gavel';

export const DrawerNavItemExample = (): JSX.Element => (
    <Drawer open={true} width={250} sx={{ mx: 'auto' }} noLayout>
        <DrawerBody sx={{ flex: '1 1 auto' }}>
            <DrawerNavGroup>
                <DrawerNavItem title="Dashboard" icon={<Dashboard />} itemID="1" />
                <DrawerNavItem title="Locations" icon={<Notifications />} itemID="2" />
                <DrawerNavItem title="Legal" icon={<Gavel />} itemID="3" />
            </DrawerNavGroup>
        </DrawerBody>
    </Drawer>
);
