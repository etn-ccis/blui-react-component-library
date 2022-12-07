import React from 'react';
import Box from '@mui/material/Box';
import DrawerRailItemPlayground from './PropsPlayground';
import { PreviewComponent } from './PreviewComponent';

export const DrawerRailItemPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        }}
    >
        <PreviewComponent />
        <DrawerRailItemPlayground />
    </Box>
);
