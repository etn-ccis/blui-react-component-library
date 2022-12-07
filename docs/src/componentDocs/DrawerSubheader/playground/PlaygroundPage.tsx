import React from 'react';
import Box from '@mui/material/Box';
import DrawerSubheaderPlayground from './PropsPlayground';
import { PreviewComponent } from './PreviewComponent';

export const DrawerSubheaderPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        }}
    >
        <PreviewComponent />
        <DrawerSubheaderPlayground />
    </Box>
);
