import React from 'react';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-components';
import { ExampleShowcase } from '../../../shared';

export const BasicDrawerBodyExample = (): JSX.Element => (
    <ExampleShowcase>
        <Drawer open={true} width={250} sx={{ mx: 'auto' }} noLayout>
            <DrawerBody hidePadding sx={{ flex: '1 1 auto' }}>
                <DrawerNavGroup>
                    <DrawerNavItem title="Dashboard" itemID="1" />
                    <DrawerNavItem title="Locations" itemID="2" />
                    <DrawerNavItem title="Legal" itemID="3" />
                </DrawerNavGroup>
            </DrawerBody>
        </Drawer>
    </ExampleShowcase>
);
