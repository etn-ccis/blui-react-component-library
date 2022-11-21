import React from 'react';
import Box from '@mui/material/Box';
import DrawerFooterPlayground from './PropsPlayground';
import { PreviewComponent } from './PreviewComponent';

export const DrawerFooterPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        }}
    >
        <PreviewComponent />
        <DrawerFooterPlayground />
    </Box>
);
