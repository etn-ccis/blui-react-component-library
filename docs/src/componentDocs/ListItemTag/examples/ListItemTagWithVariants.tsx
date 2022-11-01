import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { ListItemTagWithVariantsExample } from './ListItemTagWithVariantsExample';

const codeSnippet = `<ListItemTag variant="overline" label="overline" />
<ListItemTag variant="button" label="button" />
<ListItemTag variant="h6" label="h6" />`;

export const ListItemTagWithVariants = (): JSX.Element => (
    <Box>
        <ListItemTagWithVariantsExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ListItemTag/examples/ListItemTagWithVariantsExample.tsx"
        />
    </Box>
);
