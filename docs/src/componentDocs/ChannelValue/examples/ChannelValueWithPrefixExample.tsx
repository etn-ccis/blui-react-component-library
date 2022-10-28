import React from 'react';
import { ChannelValue } from '@brightlayer-ui/react-components';
import { CheckCircle } from '@mui/icons-material';
import { ExampleShowcase } from '../../../shared';

export const ChannelValueWithPrefixExample = (): JSX.Element => (
    <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center' }}>
        <ChannelValue value="12" units="$" prefix icon={<CheckCircle />} />
    </ExampleShowcase>
);
