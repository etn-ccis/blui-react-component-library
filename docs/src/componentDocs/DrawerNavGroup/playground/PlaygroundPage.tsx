import React from 'react';
import { Box } from '@mui/material';
import DrawerNavGroupPlayground from './PropsPlayground';
import { PreviewComponent } from './PreviewComponent';

export const DrawerNavGroupPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        }}
    >
        <PreviewComponent />
        <DrawerNavGroupPlayground />
    </Box>
);
