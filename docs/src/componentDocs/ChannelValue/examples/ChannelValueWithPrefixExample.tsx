import React from 'react';
import Box from '@mui/material/Box';
import { ChannelValue } from '@brightlayer-ui/react-components';
import { TrendingUp } from '@mui/icons-material';

export const ChannelValueWithPrefixExample = (): JSX.Element => (
    <Box>
        <ChannelValue value="123" units="hz" prefix icon={<TrendingUp />} />
    </Box>
);
