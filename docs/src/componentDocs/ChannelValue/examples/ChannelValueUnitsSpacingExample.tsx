import React from 'react';
import Stack from '@mui/material/Stack';
import { ChannelValue } from '@brightlayer-ui/react-components';
import { ExampleShowcase } from '../../../shared';

export const ChannelValueUnitsSpacingExample = (): JSX.Element => (
    <ExampleShowcase>
        <Stack direction={'column'} spacing={0.25} alignItems={'center'}>
            <ChannelValue value="85" units="kWh" unitSpace="hide" />
            <ChannelValue value="85" units="kWh" unitSpace="show" />
            <ChannelValue value="97" units="°F" />
            <ChannelValue value="32" units="°C" />
            <ChannelValue value="100" units="%" />
            <ChannelValue value="13.62" units="$" prefix />
        </Stack>
    </ExampleShowcase>
);
