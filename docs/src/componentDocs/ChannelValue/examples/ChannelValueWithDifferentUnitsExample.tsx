import React from 'react';
import Box from '@mui/material/Box';
import { ChannelValue } from '@brightlayer-ui/react-components';

export const ChannelValueWithDifferentUnitsExample = (): JSX.Element => (
    <Box sx={{ display: 'flex', flexDirection: 'column', '& .BluiChannelValue-root': { my: 0.25 } }}>
        <ChannelValue value="85" units="kWh" unitSpace="hide" />
        <ChannelValue value="85" units="kWh" unitSpace="show" />
        <ChannelValue value="97" units="°F" />
        <ChannelValue value="32" units="°C" />
        <ChannelValue value="100" units="%" />
        <ChannelValue value="13.62" units="$" prefix />
    </Box>
);
