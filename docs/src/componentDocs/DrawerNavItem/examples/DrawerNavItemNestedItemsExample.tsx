import React from 'react';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-components';

export const DrawerNavItemNestedItemsExample = (): JSX.Element => (
    <Drawer open={true} width={250} sx={{ margin: '0 auto' }} noLayout>
        <DrawerBody sx={{ flex: '1 1 auto' }}>
            <DrawerNavGroup hidePadding={true}>
                <DrawerNavItem title="Locations" itemID="Locations">
                    <DrawerNavItem title="By Type" itemID="By Type" hidePadding={false} />
                    <DrawerNavItem title="By State" itemID="By State" hidePadding={false} />
                </DrawerNavItem>
                <DrawerNavItem title="Reports" itemID="Reports">
                    <DrawerNavItem title="Local" itemID="Local" hidePadding={false} />
                    <DrawerNavItem title="Regional" itemID="Regional" hidePadding={false} />
                </DrawerNavItem>
                <DrawerNavItem title="Users" itemID="Users" />
            </DrawerNavGroup>
        </DrawerBody>
    </Drawer>
);
