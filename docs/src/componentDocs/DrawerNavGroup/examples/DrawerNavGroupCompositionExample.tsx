import React from 'react';
import { Divider } from '@mui/material';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-components';
import { ExampleShowcase } from '../../../shared';

export const DrawerNavGroupCompositionExample = (): JSX.Element => (
    <ExampleShowcase>
        <Drawer open width={250} sx={{ mx: 'auto' }} noLayout>
            <DrawerBody sx={{ flex: '1 1 auto' }}>
                <DrawerNavGroup title="Group 1" hidePadding titleDivider={false}>
                    <DrawerNavItem title="Item 1" itemID="1" />
                    <DrawerNavItem title="Item 2" itemID="2" />
                </DrawerNavGroup>
                <Divider />
                <DrawerNavGroup
                    title="Group 2"
                    hidePadding
                    titleDivider={false}
                    items={[
                        {
                            title: 'Item 3',
                            itemID: '3',
                        },
                        {
                            title: 'Item 4',
                            itemID: '4',
                        },
                    ]}
                />
            </DrawerBody>
        </Drawer>
    </ExampleShowcase>
);
