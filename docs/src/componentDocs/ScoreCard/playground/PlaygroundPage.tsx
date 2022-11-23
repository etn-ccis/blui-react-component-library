import React from 'react';
import Box from '@mui/material/Box';
import ScoreCardPlayground from './PropsPlayground';
import { PreviewComponent } from './PreviewComponent';

export const ScoreCardPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
        }}
    >
        <PreviewComponent />
        <ScoreCardPlayground />
    </Box>
);
