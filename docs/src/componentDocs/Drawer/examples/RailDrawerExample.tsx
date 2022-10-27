import React from 'react';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerRailItem } from '@brightlayer-ui/react-components';
import Gavel from '@mui/icons-material/Gavel';
import { Devices, LocationOn } from '@mui/icons-material';
import { ExampleShowcase } from '../../../shared';

export const RailDrawerExample = (): JSX.Element => (
    <ExampleShowcase>
        <Drawer open width={250} variant="rail" sx={{ mx: 'auto' }} noLayout>
            <DrawerBody sx={{ flex: '1 1 auto' }}>
                <DrawerNavGroup>
                    <DrawerRailItem title="Devices" icon={<Devices />} itemID="1" divider />
                    <DrawerRailItem title="Locations" icon={<LocationOn />} itemID="2" divider />
                    <DrawerRailItem title="Legal" icon={<Gavel />} itemID="3" divider />
                </DrawerNavGroup>
            </DrawerBody>
        </Drawer>
    </ExampleShowcase>
);
