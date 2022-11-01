import React from 'react';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerRailItem } from '@brightlayer-ui/react-components';
import Gavel from '@mui/icons-material/Gavel';
import { Devices, LocationOn } from '@mui/icons-material';
import { ExampleShowcase } from '../../../shared';

export const CondensedDrawerRailItemExample = (): JSX.Element => (
    <ExampleShowcase>
        <Drawer open width={250} sx={{ mx: 'auto' }} variant="rail" condensed noLayout>
            <DrawerBody sx={{ flex: '1 1 auto' }}>
                <DrawerNavGroup>
                    <DrawerRailItem title="Devices" icon={<Devices />} itemID="1" />
                    <DrawerRailItem title="Locations" icon={<LocationOn />} itemID="2" />
                    <DrawerRailItem title="Legal" icon={<Gavel />} itemID="3" />
                </DrawerNavGroup>
            </DrawerBody>
        </Drawer>
    </ExampleShowcase>
);
