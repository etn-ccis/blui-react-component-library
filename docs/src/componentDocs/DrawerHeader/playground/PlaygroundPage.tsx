import React from 'react';
import Box from '@mui/material/Box';
import DrawerHeaderPlayground from './PropsPlayground';
import { PreviewComponent } from './PreviewComponent';

export const DrawerHeaderPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        }}
    >
        <PreviewComponent />
        <DrawerHeaderPlayground />
    </Box>
);
