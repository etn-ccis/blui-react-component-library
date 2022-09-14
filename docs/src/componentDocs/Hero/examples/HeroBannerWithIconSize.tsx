import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { HeroBannerWithIconSizeExample } from './HeroBannerWithIconSizeExample';

const codeSnippet = `<HeroBanner sx={{ maxWidth: 350, m: '0 auto' }}>
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
        icon={<img src={Trex36} height={36} alt="A T-Rex as the avatar image" />}
        iconSize={36}
        label={'PNG'}
        ChannelValueProps={{ value: '36', units: 'px' }}
    />
</HeroBanner>
<HeroBanner sx={{ maxWidth: 350, m: '0 auto' }}>
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
        icon={<img src={Trex48} height={48} alt="A T-Rex as the avatar image" />}
        iconSize={48}
        label={'PNG'}
        ChannelValueProps={{ value: '48', units: 'px' }}
    />
</HeroBanner>
<HeroBanner sx={{ maxWidth: 350, m: '0 auto' }}>
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
        icon={<img src={Trex72} height={72} alt="A T-Rex as the avatar image" />}
        iconSize={72}
        label={'PNG'}
        ChannelValueProps={{ value: '72', units: 'px' }}
    />
</HeroBanner>`;
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
