import React from 'react';
import Box from '@mui/material/Box';
import DrawerPlayground from './PropsPlayground';
import { PreviewComponent } from './PreviewComponent';

export const DrawerPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        }}
    >
        <PreviewComponent />
        <DrawerPlayground />
    </Box>
);
