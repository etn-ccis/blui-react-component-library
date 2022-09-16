import React from 'react';
import { Hero } from '@brightlayer-ui/react-components/core/Hero';
import TrendingUp from '@mui/icons-material/TrendingUp';
import Fan from '@brightlayer-ui/icons-mui/Fan';

export const HeroWithSecondaryIconExample = (): JSX.Element => (
    <Hero
        label={'Velocity'}
        ChannelValueProps={{
            icon: <TrendingUp />,
            value: 470,
            units: 'RPM',
        }}
        icon={<Fan fontSize={'inherit'} />}
    />
);
