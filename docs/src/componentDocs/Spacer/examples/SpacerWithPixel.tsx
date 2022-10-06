import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { SpacerWithPixelExample } from './SpacerWithPixelExample';

const codeSnippet = `<Box>
    <Box sx={{ width: '300px', height: '56px', display: 'flex' }}>
        <Spacer sx={{ width: 25, backgroundColor: '#4da3d4' }}>25</Spacer>
        <Spacer sx={{ width: 75, backgroundColor: '#f5db6d' }}>75</Spacer>
        <Spacer sx={{ width: 200, backgroundColor: '#da7777' }}>200</Spacer>
    </Box>
    <Box sx={{ mt: 4, width: '300px' }}>
        <Spacer sx={{ height: 25, backgroundColor: '#4da3d4' }}>25</Spacer>
        <Spacer sx={{ height: 50, backgroundColor: '#f5db6d' }}>50</Spacer>
        <Spacer sx={{ height: 75, backgroundColor: '#da7777' }}>75</Spacer>
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
