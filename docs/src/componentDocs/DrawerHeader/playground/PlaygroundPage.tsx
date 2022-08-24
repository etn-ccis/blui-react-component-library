import React from 'react';
import { Box } from '@mui/material';
import DrawerHeaderPlayground from './PropsPlayground';
import { PreviewComponent } from './PreviewComponent';

export const DrawerHeaderPlaygroundComponent = (): JSX.Element => (
    <Box>
        <Box>
            <PreviewComponent />
        </Box>
        <Box>
            <DrawerHeaderPlayground />
        </Box>
    </Box>
);
