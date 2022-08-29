import React from 'react';
import { Box } from '@mui/material';
import DrawerPlayground from './PropsPlayground';
import { PreviewComponent } from './PreviewComponent';

export const DrawerPlaygroundComponent = (): JSX.Element => (
    <Box>
        <Box>
            <PreviewComponent />
        </Box>
        <Box>
            <DrawerPlayground />
        </Box>
    </Box>
);
