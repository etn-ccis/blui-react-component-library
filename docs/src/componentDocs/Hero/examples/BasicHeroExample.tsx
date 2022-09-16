import React from 'react';
import { Hero } from '@brightlayer-ui/react-components/core/Hero';
import GradeA from '@brightlayer-ui/icons-mui/GradeA';

export const BasicHeroExample = (): JSX.Element => <Hero icon={<GradeA fontSize={'inherit'} />} label={'Efficiency'} />;
