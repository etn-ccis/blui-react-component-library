import React from 'react';
import Box from '@mui/material/Box';
import EmptyStatePlayground from './PropsPlayground';
import { PreviewComponent } from './PreviewComponent';

export const EmptyStatePlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        }}
    >
        <PreviewComponent />
        <EmptyStatePlayground />
    </Box>
);
