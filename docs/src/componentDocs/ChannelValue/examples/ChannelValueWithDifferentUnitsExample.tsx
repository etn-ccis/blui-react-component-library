import React from 'react';
import { ChannelValue } from '@brightlayer-ui/react-components';
import { ExampleShowcase } from '../../../shared';

export const ChannelValueWithDifferentUnitsExample = (): JSX.Element => (
    <ExampleShowcase
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            '& .BluiChannelValue-root': { my: 0.25 },
        }}
    >
        <ChannelValue value="85" units="kWh" unitSpace="hide" />
        <ChannelValue value="85" units="kWh" unitSpace="show" />
        <ChannelValue value="97" units="°F" />
        <ChannelValue value="32" units="°C" />
        <ChannelValue value="100" units="%" />
        <ChannelValue value="13.62" units="$" prefix />
    </ExampleShowcase>
);
