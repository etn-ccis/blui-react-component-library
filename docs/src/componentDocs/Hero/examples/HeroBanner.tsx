import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { HeroBannerExample } from './HeroBannerExample';

const codeSnippet = `<HeroBanner divider sx={{maxWidth: 275, m: '0 auto'}}>
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
    <Hero
        icon={<Temp fontSize={'inherit'} />}
        label={'Temp'}
        ChannelValueProps={{ value: 96, units: '°C' }}
    />
</HeroBanner>`;
export const HeroBanner = (): JSX.Element => (
    <Box>
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
            <HeroBannerExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow copyText={codeSnippet} url="componentDocs/Hero/examples/HeroBannerExample.tsx" />
    </Box>
);
