import React from 'react';
import Box from '@mui/material/Box';
import { ChannelValue } from '@brightlayer-ui/react-components';

export const BasicChannelValueExample = (): JSX.Element => (
    <Box>
        <ChannelValue value="123" units="hz" />
    </Box>
);
