import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { ListItemTagExample } from './ListItemTagExample';

const codeSnippet = `<ListItemTag label="Default Tag" />
<ListItemTag label="Custom Tag" fontColor="#424e54" backgroundColor="#f0cb2f" />`;

export const ListItemTag = (): JSX.Element => (
    <Box>
        <ListItemTagExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ListItemTag/examples/ListItemTagExample.tsx"
        />
    </Box>
);
