import React from 'react';
import { Drawer, DrawerHeader } from '@brightlayer-ui/react-components';
import { ExampleShowcase } from '../../../shared';

export const BasicDrawerHeaderExample = (): JSX.Element => (
    <ExampleShowcase>
        <Drawer open={true} width={250} sx={{ mx: 'auto' }} noLayout>
            <DrawerHeader title="Title" />
        </Drawer>
    </ExampleShowcase>
);
