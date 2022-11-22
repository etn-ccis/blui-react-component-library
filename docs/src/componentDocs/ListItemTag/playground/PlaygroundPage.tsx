import React from 'react';
import Box from '@mui/material/Box';
import ListItemTagPlayground from './PropsPlayground';
import { PreviewComponent } from './PreviewComponent';

export const ListItemTagPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        }}
    >
        <PreviewComponent />
        <ListItemTagPlayground />
    </Box>
);
