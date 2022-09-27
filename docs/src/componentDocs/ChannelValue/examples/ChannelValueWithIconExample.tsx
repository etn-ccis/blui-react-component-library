import React from 'react';
import Box from '@mui/material/Box';
import { ChannelValue } from '@brightlayer-ui/react-components';
import { TrendingUp } from '@mui/icons-material';

export const ChannelValueWithIconExample = (): JSX.Element => (
    <Box>
        <ChannelValue value="123" units="hz" icon={<TrendingUp />} />
    </Box>
);
