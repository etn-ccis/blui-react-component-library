import React from 'react';
import { Hero } from '@brightlayer-ui/react-components/core/Hero';
import GradeB from '@brightlayer-ui/icons-mui/GradeB';
import { ExampleShowcase } from '../../../shared';

export const HeroWithValueAndUnitsExample = (): JSX.Element => (
    <ExampleShowcase>
        <Hero icon={<GradeB fontSize="inherit" />} label="Efficiency" ChannelValueProps={{ value: '88', units: '%' }} />
    </ExampleShowcase>
);
