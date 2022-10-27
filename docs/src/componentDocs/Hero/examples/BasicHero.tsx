import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { BasicHeroExample } from './BasicHeroExample';

const codeSnippet = `<Hero 
    icon={<GradeA fontSize={'inherit'} />}
    label={'Efficiency'} 
/>`;
export const BasicHero = (): JSX.Element => (
    <Box>
        <BasicHeroExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow copyText={codeSnippet} url="componentDocs/Hero/examples/BasicHeroExample.tsx" />
    </Box>
);
