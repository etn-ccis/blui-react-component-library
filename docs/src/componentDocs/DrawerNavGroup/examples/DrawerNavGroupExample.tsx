import React from 'react';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-components';
import { ExampleShowcase } from '../../../shared';

export const DrawerNavGroupExample = (): JSX.Element => (
    <ExampleShowcase>
        <Drawer open={true} width={250} sx={{ mx: 'auto' }} noLayout>
            <DrawerBody sx={{ flex: '1 1 auto' }}>
                <DrawerNavGroup title="Locations" hidePadding>
                    <DrawerNavItem title="Regional" itemID="1" divider={false} />
                    <DrawerNavItem title="National" itemID="2" divider={false} />
                </DrawerNavGroup>
                <DrawerNavGroup title="Status" hidePadding>
                    <DrawerNavItem title="Network" itemID="3" divider={false} />
                    <DrawerNavItem title="Node" itemID="4" divider={false} />
                </DrawerNavGroup>
            </DrawerBody>
        </Drawer>
    </ExampleShowcase>
);
