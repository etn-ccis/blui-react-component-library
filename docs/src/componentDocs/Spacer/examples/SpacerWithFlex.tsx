import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { SpacerWithFlexExample } from './SpacerWithFlexExample';

const codeSnippet = `<Box sx={{ display: 'flex', height: '56px', width: '300px' }}>
    <Spacer sx={{ flex: 1, backgroundColor: '#4da3d4' }}>1</Spacer>
    <Spacer sx={{ flex: 2, backgroundColor: '#f5db6d' }}>2</Spacer>
    <Spacer sx={{ flex: 3, backgroundColor: '#da7777' }}>3</Spacer>
</Box>`;

export const SpacerWithFlex = (): JSX.Element => (
    <Box>
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4, display: 'flex', justifyContent: 'center' }}>
            <SpacerWithFlexExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/Spacer/examples/SpacerWithFlexExample.tsx"
        />
    </Box>
);
