import React from 'react';
import Box from '@mui/material/Box';
import ChannelValuePlayground from './PropsPlayground';
import { PreviewComponent } from './PreviewComponent';

export const ChannelValuePlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        }}
    >
        <PreviewComponent />
        <ChannelValuePlayground />
    </Box>
);
