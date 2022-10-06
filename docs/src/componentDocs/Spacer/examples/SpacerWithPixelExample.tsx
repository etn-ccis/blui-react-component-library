import React from 'react';
import { Box } from '@mui/material';
import { Spacer } from '@brightlayer-ui/react-components';

export const SpacerWithPixelExample = (): JSX.Element => (
    <Box>
        <Box sx={{ height: '56px', display: 'flex' }}>
            <Spacer width={25} flex={0} sx={{ backgroundColor: '#4da3d4' }}>
                25
            </Spacer>
            <Spacer width={75} flex={0} sx={{ backgroundColor: '#f5db6d' }}>
                75
            </Spacer>
            <Spacer width={200} flex={0} sx={{ backgroundColor: '#da7777' }}>
                200
            </Spacer>
        </Box>

        <Box sx={{ mt: 4, width: '300px' }}>
            <Spacer height={25} sx={{ backgroundColor: '#4da3d4' }}>
                25
            </Spacer>
            <Spacer height={50} sx={{ backgroundColor: '#f5db6d' }}>
                50
            </Spacer>
            <Spacer height={75} sx={{ backgroundColor: '#da7777' }}>
                75
            </Spacer>
        </Box>
    </Box>
);
