import React from 'react';
import { Box } from '@mui/material';
import { Drawer, DrawerHeader, DrawerSubheader } from '@brightlayer-ui/react-components';
import * as colors from '@brightlayer-ui/colors';

export const BasicDrawerSubheaderExample = (): JSX.Element => (
    <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
        <Drawer open={true} width={250} sx={{ margin: '0 auto' }} noLayout>
            <DrawerHeader title="Title" />
            <DrawerSubheader hideContentOnCollapse={false}>
                <Box sx={{ p: 2 }}>Custom Content Goes here</Box>
            </DrawerSubheader>
        </Drawer>
    </Box>
);
