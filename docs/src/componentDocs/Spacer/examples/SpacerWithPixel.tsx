import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { SpacerWithPixelExample } from './SpacerWithPixelExample';

const codeSnippet = `<Box>
    <Box sx={{ width: '300px', height: '56px', display: 'flex' }}>
        <Spacer width={25} sx={{ backgroundColor: '#4da3d4' }}>25</Spacer>
        <Spacer width={75} sx={{ backgroundColor: '#f5db6d' }}>75</Spacer>
        <Spacer width={200} sx={{ backgroundColor: '#da7777' }}>200</Spacer>
    </Box>
    <Box sx={{ mt: 4, width: '300px' }}>
        <Spacer height={25} sx={{ backgroundColor: '#4da3d4' }}>25</Spacer>
        <Spacer height={50} sx={{ backgroundColor: '#f5db6d' }}>50</Spacer>
        <Spacer height={75} sx={{ backgroundColor: '#da7777' }}>75</Spacer>
    </Box>
</Box>`;

export const SpacerWithPixel = (): JSX.Element => (
    <Box>
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4, display: 'flex', justifyContent: 'center' }}>
            <SpacerWithPixelExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/Spacer/examples/SpacerWithPixelExample.tsx"
        />
    </Box>
);
