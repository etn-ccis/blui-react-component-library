import React from 'react';
import Box from '@mui/material/Box';
import { Hero } from '@brightlayer-ui/react-components/core/Hero';
import { HeroBanner } from '@brightlayer-ui/react-components/core/HeroBanner';
import VoltageCircledOutline from '@brightlayer-ui/icons-mui/VoltageCircledOutline';
import Schedule from '@mui/icons-material/Schedule';
import Trex from '../images/trex.png';
import { ExampleShowcase } from '../../../shared';

export const HeroBannerWithIconSizeExample = (): JSX.Element => (
    <ExampleShowcase>
        <Box sx={{ maxWidth: 350, mx: 'auto' }}>
            {[36, 48, 72].map((iconSize, index) => (
                <HeroBanner key={index}>
                    <Hero
                        icon={<VoltageCircledOutline fontSize="inherit" />}
                        iconSize={iconSize}
                        label="SVG"
                        ChannelValueProps={{ value: iconSize, units: 'px', unitSpace: 'hide' }}
                    />
                    <Hero
                        icon={<Schedule fontSize="inherit" />}
                        iconSize={iconSize}
                        label="Mui Icon"
                        ChannelValueProps={{ value: iconSize, units: 'px', unitSpace: 'hide' }}
                    />
                    <Hero
                        icon={<i className="blui-current_circled"></i>}
                        iconSize={iconSize}
                        label="icon font"
                        ChannelValueProps={{ value: iconSize, units: 'px', unitSpace: 'hide' }}
                    />
                    <Hero
                        icon={<img src={Trex} height={iconSize} alt="A T-Rex as the avatar image" />}
                        iconSize={iconSize}
                        label="PNG"
                        ChannelValueProps={{ value: iconSize, units: 'px', unitSpace: 'hide' }}
                    />
                </HeroBanner>
            ))}
        </Box>
    </ExampleShowcase>
);
