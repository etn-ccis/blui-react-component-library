import React from 'react';
import { Drawer, DrawerBody, DrawerFooter, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-components';
import { ExampleShowcase } from '../../../shared';

export const BasicDrawerFooterExample = (): JSX.Element => (
    <ExampleShowcase>
        <Drawer open={true} width={250} sx={{ mx: 'auto' }} noLayout>
            <DrawerBody sx={{ flex: '1 1 auto' }}>
                <DrawerNavGroup hidePadding>
                    <DrawerNavItem title="Dashboard" itemID="1" />
                    <DrawerNavItem title="Locations" itemID="2" />
                    <DrawerNavItem title="Legal" itemID="3" />
                </DrawerNavGroup>
            </DrawerBody>
            <DrawerFooter sx={{ p: 2 }}>Footer Content Here</DrawerFooter>
        </Drawer>
    </ExampleShowcase>
);
