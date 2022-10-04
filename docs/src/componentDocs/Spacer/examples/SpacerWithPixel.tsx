import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { SpacerWithPixelExample } from './SpacerWithPixelExample';

const codeSnippet = `<Box>
    <Box sx={{ width: '300px', height: '56px', display: 'flex' }}>
        <Spacer maxWidth={75} style={{ background: '#4da3d4' }}>75</Spacer>
        <Spacer maxWidth={75} style={{ background: '#f5db6d' }}>75</Spacer>
        <Spacer maxWidth={150} style={{ background: '#da7777' }}>150</Spacer>
    </Box>
    <Box sx={{ mt: 4, width: '300px' }}>
        <Spacer height={25} style={{ background: '#4da3d4' }}>25</Spacer>
        <Spacer height={25} style={{ background: '#f5db6d' }}>25</Spacer>
        <Spacer height={50} style={{ background: '#da7777' }}>50</Spacer>
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
            url="componentDocs/EmptyState/examples/SpacerWithPixelExample.tsx"
        />
    </Box>
);
