import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { HeroBannerWithIconSizeExample } from './HeroBannerWithIconSizeExample';

const codeSnippet = `{[36, 48, 72].map((iconSize, index) => (
    <HeroBanner key={index}>
        <Hero
            icon={<VoltageCircledOutline fontSize={'inherit'} />}
            iconSize={iconSize}
            label={'SVG'}
            ChannelValueProps={{ value: iconSize, units: 'px' }}
        />
        <Hero
            icon={<Schedule fontSize={'inherit'} />}
            iconSize={iconSize}
            label={'Mui Icon'}
            ChannelValueProps={{ value: iconSize, units: 'px' }}
        />
        <Hero
            icon={<i className="blui-current_circled"></i>}
            iconSize={iconSize}
            label={'icon font'}
            ChannelValueProps={{ value: iconSize, units: 'px' }}
        />
        <Hero
            icon={<img src={Trex} height={iconSize} alt="A T-Rex as the avatar image" />}
            iconSize={iconSize}
            label={'PNG'}
            ChannelValueProps={{ value: iconSize, units: 'px' }}
        />
    </HeroBanner>
))}`;
export const HeroBannerWithIconSize = (): JSX.Element => (
    <Box>
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
            <HeroBannerWithIconSizeExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/Hero/examples/HeroBannerWithIconSizeExample.tsx"
        />
    </Box>
);