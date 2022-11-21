import React from 'react';
import Box from '@mui/material/Box';
import UserMenuPlayground from './PropsPlayground';
import { PreviewComponent } from './PreviewComponent';

export const UserMenuPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        }}
    >
        <PreviewComponent />
        <UserMenuPlayground />
    </Box>
);
