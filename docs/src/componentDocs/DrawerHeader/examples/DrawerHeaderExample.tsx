import React from 'react';
import { Drawer, DrawerHeader } from '@brightlayer-ui/react-components';
import Menu from '@mui/icons-material/Menu';
import { ExampleShowcase } from '../../../shared';

export const DrawerHeaderExample = (): JSX.Element => (
    <ExampleShowcase>
        <Drawer open width={250} sx={{ mx: 'auto' }} noLayout>
            <DrawerHeader title="Title" subtitle="Subtitle" icon={<Menu />} />
        </Drawer>
    </ExampleShowcase>
);
