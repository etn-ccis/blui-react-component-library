import React from 'react';
import Box from '@mui/material/Box';
import AppBarPlayground from './PropsPlayground';
import { PreviewComponent } from './PreviewComponent';

export const AppBarPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        }}
    >
        <PreviewComponent />
        <AppBarPlayground />
    </Box>
);
