import React from 'react';
import { Drawer, DrawerHeader } from '@brightlayer-ui/react-components';
import Menu from '@mui/icons-material/Menu';
import { ExampleShowcase } from '../../../shared';

export const DrawerHeaderWithIconExample = (): JSX.Element => (
    <ExampleShowcase>
        <Drawer open={true} width={250} sx={{ mx: 'auto' }} noLayout>
            <DrawerHeader title="Title" icon={<Menu />} />
        </Drawer>
    </ExampleShowcase>
);
