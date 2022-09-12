import React from 'react';
import { Box } from '@mui/material';
import DrawerNavItemPlayground from './PropsPlayground';
import { PreviewComponent } from './PreviewComponent';

export const DrawerNavItemPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        }}
    >
        <PreviewComponent />
        <DrawerNavItemPlayground />
    </Box>
);
