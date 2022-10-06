import React from 'react';
import { Box } from '@mui/material';
import { Spacer } from '@brightlayer-ui/react-components';

export const SpacerWithFlexExample = (): JSX.Element => (
    <Box sx={{ display: 'flex', height: '56px', width: '300px' }}>
        <Spacer sx={{ flex: 1, backgroundColor: '#4da3d4' }}>1</Spacer>
        <Spacer sx={{ flex: 2, backgroundColor: '#f5db6d' }}>2</Spacer>
        <Spacer sx={{ flex: 3, backgroundColor: '#da7777' }}>3</Spacer>
    </Box>
);
