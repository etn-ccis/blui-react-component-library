import React from 'react';
import { Hero } from '@brightlayer-ui/react-components/core/Hero';
import GradeA from '@brightlayer-ui/icons-mui/GradeA';
import { ExampleShowcase } from '../../../shared';

export const BasicHeroExample = (): JSX.Element => (
    <ExampleShowcase>
        <Hero icon={<GradeA fontSize="inherit" />} label="Efficiency" />
    </ExampleShowcase>
);
