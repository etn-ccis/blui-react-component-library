import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { ListItemTagWithVariantsExample } from './ListItemTagWithVariantsExample';

const codeSnippet = `<Box>
    <ListItemTag variant="overline" label="overline" />
    <ListItemTag variant="button" label="button" />
    <ListItemTag variant="h6" label="h6" />
</Box>`;

export const ListItemTagWithVariants = (): JSX.Element => (
    <Box>
        <Box sx={{ my: 2, backgroundColor: colors.white[600], p: 4, display: 'flex', justifyContent: 'center' }}>
            <ListItemTagWithVariantsExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ListItemTag/examples/ListItemTagWithVariantsExample.tsx"
        />
    </Box>
);
