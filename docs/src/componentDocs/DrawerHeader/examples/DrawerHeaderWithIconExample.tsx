import React from 'react';
import { Box } from '@mui/material';
import { Drawer, DrawerHeader } from '@brightlayer-ui/react-components';
import * as colors from '@brightlayer-ui/colors';
import Menu from '@mui/icons-material/Menu';

export const DrawerHeaderWithIconExample = (): JSX.Element => (
    <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
        <Drawer open={true} width={250} sx={{ margin: '0 auto' }} noLayout>
            <DrawerHeader title="Title" icon={<Menu />} />
        </Drawer>
    </Box>
);
