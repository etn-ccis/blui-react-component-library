import React from 'react';
import Box from '@mui/material/Box';
import InfoListItemPlayground from './PropsPlayground';
import { PreviewComponent } from './PreviewComponent';

export const InfoListItemPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        }}
    >
        <PreviewComponent />
        <InfoListItemPlayground />
    </Box>
);
