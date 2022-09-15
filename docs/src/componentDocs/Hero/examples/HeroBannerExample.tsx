import React from 'react';
import { Hero } from '@brightlayer-ui/react-components/core/Hero';
import { HeroBanner } from '@brightlayer-ui/react-components/core/HeroBanner';
import GradeA from '@brightlayer-ui/icons-mui/GradeA';
import CurrentCircled from '@brightlayer-ui/icons-mui/CurrentCircled';
import Temp from '@brightlayer-ui/icons-mui/Temp';

export const HeroBannerExample = (): JSX.Element => (
    <HeroBanner divider sx={{ maxWidth: 275, m: '0 auto' }}>
        <Hero
            icon={<GradeA fontSize={'inherit'} />}
            label={'Health'}
            ChannelValueProps={{ value: '96', units: '/100', unitSpace: 'hide' }}
        />
        <Hero
            icon={<CurrentCircled fontSize={'inherit'} />}
            label={'Load'}
            ChannelValueProps={{ value: '90', units: '%' }}
        />
        <Hero icon={<Temp fontSize={'inherit'} />} label={'Temp'} ChannelValueProps={{ value: 96, units: '°C' }} />
    </HeroBanner>
);
