import React from 'react';
import { Box } from '@mui/material';
import { Spacer } from '@brightlayer-ui/react-components';

export const SpacerWithPixelExample = (): JSX.Element => (
    <Box>
        <Box sx={{ width: '300px', height: '56px', display: 'flex' }}>
            <Spacer maxWidth={75} style={{ background: '#4da3d4' }}>75</Spacer>
            <Spacer maxWidth={75} style={{ background: '#f5db6d' }}>75</Spacer>
            <Spacer maxWidth={150} style={{ background: '#da7777' }}>150</Spacer>
            </Box>

        <Box sx={{ mt: 4, width: '300px', display: 'inline' }}>
            <Spacer height={25} style={{ background: '#4da3d4' }}>25</Spacer>
            <Spacer height={25} style={{ background: '#f5db6d' }}>25</Spacer>
            <Spacer height={50} style={{ background: '#da7777' }}>50</Spacer>
        </Box>
    </Box>
);
