import React from 'react';
import Box from '@mui/material/Box';
import { Hero } from '@brightlayer-ui/react-components/core/Hero';
import { HeroBanner } from '@brightlayer-ui/react-components/core/HeroBanner';
import VoltageCircledOutline from '@brightlayer-ui/icons-mui/VoltageCircledOutline';
import Schedule from '@mui/icons-material/Schedule';
import Trex from '../images/trex.png';
export const HeroBannerWithIconSizeExample = (): JSX.Element => (
    <Box sx={{ maxWidth: 350, m: '0 auto' }}>
        {/* iconSize 36px */}
        <HeroBanner>
            <Hero
                icon={<VoltageCircledOutline fontSize={'inherit'} />}
                iconSize={36}
                label={'SVG'}
                ChannelValueProps={{ value: '36', units: 'px' }}
            />
            <Hero
                icon={<Schedule fontSize={'inherit'} />}
                iconSize={36}
                label={'Mui Icon'}
                ChannelValueProps={{ value: '36', units: 'px' }}
            />
            <Hero
                icon={<i className="blui-current_circled"></i>}
                iconSize={36}
                label={'icon font'}
                ChannelValueProps={{ value: '36', units: 'px' }}
            />
            <Hero
                icon={<img src={Trex} height={36} alt="A T-Rex as the avatar image" />}
                iconSize={36}
                label={'PNG'}
                ChannelValueProps={{ value: '36', units: 'px' }}
            />
        </HeroBanner>

        {/* iconSize 48px */}
        <HeroBanner>
            <Hero
                icon={<VoltageCircledOutline fontSize={'inherit'} />}
                iconSize={48}
                label={'SVG'}
                ChannelValueProps={{ value: '48', units: 'px' }}
            />
            <Hero
                icon={<Schedule fontSize={'inherit'} />}
                iconSize={48}
                label={'Mui Icon'}
                ChannelValueProps={{ value: '48', units: 'px' }}
            />
            <Hero
                icon={<i className="blui-current_circled"></i>}
                iconSize={48}
                label={'icon font'}
                ChannelValueProps={{ value: '48', units: 'px' }}
            />
            <Hero
                icon={<img src={Trex} height={48} alt="A T-Rex as the avatar image" />}
                iconSize={48}
                label={'PNG'}
                ChannelValueProps={{ value: '48', units: 'px' }}
            />
        </HeroBanner>

        {/* iconSize 72px */}
        <HeroBanner>
            <Hero
                icon={<VoltageCircledOutline fontSize={'inherit'} />}
                iconSize={72}
                label={'SVG'}
                ChannelValueProps={{ value: '72', units: 'px' }}
            />
            <Hero
                icon={<Schedule fontSize={'inherit'} />}
                iconSize={72}
                label={'Mui Icon'}
                ChannelValueProps={{ value: '72', units: 'px' }}
            />
            <Hero
                icon={<i className="blui-current_circled"></i>}
                iconSize={72}
                label={'icon font'}
                ChannelValueProps={{ value: '72', units: 'px' }}
            />
            <Hero
                icon={<img src={Trex} height={72} alt="A T-Rex as the avatar image" />}
                iconSize={72}
                label={'PNG'}
                ChannelValueProps={{ value: '72', units: 'px' }}
            />
        </HeroBanner>
    </Box>
);
