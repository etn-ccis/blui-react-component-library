import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { BasicHeroExample } from './BasicHeroExample';

const codeSnippet = `<Hero 
    icon={<GradeA fontSize={'inherit'} />}
    label={'Efficiency'} 
/>`;
export const BasicHero = (): JSX.Element => (
    <Box>
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
            <BasicHeroExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow copyText={codeSnippet} url="componentDocs/Hero/examples/BasicHeroExample.tsx" />
    </Box>
);
