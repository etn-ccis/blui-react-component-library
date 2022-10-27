import React from 'react';
import { ChannelValue } from '@brightlayer-ui/react-components';
import { ExampleShowcase } from '../../../shared';

export const BasicChannelValueExample = (): JSX.Element => (
    <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center' }}>
        <ChannelValue value="123" units="hz" />
    </ExampleShowcase>
);
