import React from 'react';
import Box from '@mui/material/Box';
import HeroPlayground from './PropsPlayground';
import { PreviewComponent } from './PreviewComponent';

export const HeroPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        }}
    >
        <PreviewComponent />
        <HeroPlayground />
    </Box>
);
