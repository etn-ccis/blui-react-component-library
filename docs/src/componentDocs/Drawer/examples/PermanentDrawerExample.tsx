import React from 'react';
import { Drawer, DrawerBody, DrawerHeader, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-components';
import { ExampleShowcase } from '../../../shared';

export const PermanentDrawerExample = (): JSX.Element => (
    <ExampleShowcase>
        <Drawer open width={250} variant="permanent" sx={{ mx: 'auto' }} noLayout>
            <DrawerHeader title="Header" />
            <DrawerBody sx={{ flex: '1 1 auto' }}>
                <DrawerNavGroup>
                    <DrawerNavItem title="Dashboard" itemID="1" hidePadding />
                    <DrawerNavItem title="Locations" itemID="2" hidePadding />
                    <DrawerNavItem title="Legal" itemID="3" hidePadding />
                </DrawerNavGroup>
            </DrawerBody>
        </Drawer>
    </ExampleShowcase>
);
