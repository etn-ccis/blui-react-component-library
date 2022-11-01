import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { SpacerWithFlexExample } from './SpacerWithFlexExample';

const codeSnippet = `<Box sx={{ display: 'flex', height: 56, width: 300 }}>
    <Spacer flex={1} sx={{ backgroundColor: colors.blue[300] }}>1</Spacer>
    <Spacer flex={2} sx={{ backgroundColor: colors.yellow[300] }}>2</Spacer>
    <Spacer flex={3} sx={{ backgroundColor: colors.red[300] }}>3</Spacer>
</Box>`;

export const SpacerWithFlex = (): JSX.Element => (
    <Box>
        <SpacerWithFlexExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/Spacer/examples/SpacerWithFlexExample.tsx"
        />
    </Box>
);
