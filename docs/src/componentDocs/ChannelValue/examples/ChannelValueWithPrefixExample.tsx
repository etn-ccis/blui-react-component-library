import React from 'react';
import { ChannelValue } from '@brightlayer-ui/react-components';
import { TrendingUp } from '@mui/icons-material';
import { ExampleShowcase } from '../../../shared';

export const ChannelValueWithPrefixExample = (): JSX.Element => (
    <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center' }}>
        <ChannelValue value="123" units="hz" prefix icon={<TrendingUp />} />
    </ExampleShowcase>
);
