import React from 'react';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-components';

export const BasicDrawerNavItemExample = (): JSX.Element => (
    <Drawer open={true} width={250} sx={{ margin: '0 auto' }} noLayout>
        <DrawerBody sx={{ flex: '1 1 auto' }}>
            <DrawerNavGroup hidePadding>
                <DrawerNavItem title="Dashboard" itemID="1" />
                <DrawerNavItem title="Locations" itemID="2" />
                <DrawerNavItem title="Legal" itemID="3" />
            </DrawerNavGroup>
        </DrawerBody>
    </Drawer>
);
