import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { HeroWithSecondaryIconExample } from './HeroWithSecondaryIconExample';

const codeSnippet = `<Hero
    label={'Velocity'}
    ChannelValueProps={{
        icon: <TrendingUp />,
        value: 470,
        units: 'RPM',
    }}
    icon={<Fan fontSize={'inherit'} />}
/>`;
export const HeroWithSecondaryIcon = (): JSX.Element => (
    <Box>
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
            <HeroWithSecondaryIconExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" dataLine={'4'} />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/Hero/examples/HeroWithSecondaryIconExample.tsx"
        />
    </Box>
);
