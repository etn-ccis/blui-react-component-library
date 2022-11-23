import React from 'react';
import Box from '@mui/material/Box';
import ThreeLinerPlayground from './PropsPlayground';
import { PreviewComponent } from './PreviewComponent';

export const ThreeLinerPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        }}
    >
        <PreviewComponent />
        <ThreeLinerPlayground />
    </Box>
);
