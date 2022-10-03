import React from 'react';
import { Box } from '@mui/material';
// import * as Colors from '@brightlayer-ui/colors';
import { Spacer } from '@brightlayer-ui/react-components';

export const SpacerWithFlexExample = (): JSX.Element => (
    <Box sx={{ display: 'flex', height: '56px', width: '300px' }}>
        <Spacer flex={1} style={{ background: '#4da3d4' }}>
            1
        </Spacer>
        <Spacer flex={2} style={{ background: '#f5db6d' }}>
            2
        </Spacer>
        <Spacer flex={3} style={{ background: '#da7777' }}>
            3
        </Spacer>
    </Box>
);
