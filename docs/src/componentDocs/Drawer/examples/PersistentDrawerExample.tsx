import React, { useState } from 'react';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem, DrawerHeader } from '@brightlayer-ui/react-components';
import Dashboard from '@mui/icons-material/Dashboard';
import Notifications from '@mui/icons-material/Notifications';
import Gavel from '@mui/icons-material/Gavel';
import Menu from '@mui/icons-material/Menu';
import { ExampleShowcase } from '../../../shared';

export const PersistentDrawerExample = (): JSX.Element => {
    const [open, setOpen] = useState(true);
    return (
        <ExampleShowcase>
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
        </ExampleShowcase>
    );
};
