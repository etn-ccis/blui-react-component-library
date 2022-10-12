import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { ListItemTagExample } from './ListItemTagExample';

const codeSnippet = `<Box>
    <ListItemTag label="Default Tag" />
    <ListItemTag label="Custom Tag" fontColor="#424e54" backgroundColor="#f0cb2f" />
</Box>`;

export const ListItemTag = (): JSX.Element => (
    <Box>
        <Box sx={{ my: 2, backgroundColor: colors.white[600], p: 4, display: 'flex', justifyContent: 'center' }}>
            <ListItemTagExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ListItemTag/examples/ListItemTagExample.tsx"
        />
    </Box>
);
