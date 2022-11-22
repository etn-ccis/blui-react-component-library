import React from 'react';
import Box from '@mui/material/Box';
import ToolbarMenuPlayground from './PropsPlayground';
import { PreviewComponent } from './PreviewComponent';

export const ToolbarMenuPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        }}
    >
        <PreviewComponent />
        <ToolbarMenuPlayground />
    </Box>
);
