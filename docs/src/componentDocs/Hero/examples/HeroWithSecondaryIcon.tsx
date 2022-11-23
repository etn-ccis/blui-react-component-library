import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
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
        <HeroWithSecondaryIconExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="4" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/Hero/examples/HeroWithSecondaryIconExample.tsx"
        />
    </Box>
);
