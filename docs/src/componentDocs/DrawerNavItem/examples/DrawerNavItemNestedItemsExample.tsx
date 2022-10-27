import React from 'react';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-components';
import { ExampleShowcase } from '../../../shared';

export const DrawerNavItemNestedItemsExample = (): JSX.Element => (
    <ExampleShowcase>
        <Drawer open width={250} sx={{ mx: 'auto' }} noLayout>
            <DrawerBody sx={{ flex: '1 1 auto' }}>
                <DrawerNavGroup hidePadding={true}>
                    <DrawerNavItem title="Locations" itemID="Locations">
                        <DrawerNavItem title="By Type" itemID="By Type" hidePadding={false} />
                        <DrawerNavItem title="By State" itemID="By State" hidePadding={false} />
                    </DrawerNavItem>
                    <DrawerNavItem title="Reports" itemID="Reports" />
                    <DrawerNavItem title="Users" itemID="Users" />
                </DrawerNavGroup>
            </DrawerBody>
        </Drawer>
    </ExampleShowcase>
);
