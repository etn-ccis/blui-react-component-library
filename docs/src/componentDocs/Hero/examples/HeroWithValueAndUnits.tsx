import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { HeroWithValueAndUnitsExample } from './HeroWithValueAndUnitsExample';

const codeSnippet = `<Hero
    icon={<GradeB fontSize={'inherit'} />}
    label={'Efficiency'}
    ChannelValueProps={{value:'88', units:'%'}}
/>`;

export const HeroWithValueAndUnits = (): JSX.Element => (
    <Box>
        <HeroWithValueAndUnitsExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="4" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/Hero/examples/HeroWithValueAndUnitsExample.tsx"
        />
    </Box>
);
