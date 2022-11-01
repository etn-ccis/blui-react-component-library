import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { BasicToolbarMenuExample } from './BasicToolbarMenuExample';

const codeSnippet = `<ToolbarMenu
    label="label"
    menuGroups={[
        {
            items: [{ title: 'Item 1' }, { title: 'Item 2' }, { title: 'Item 3' }],
        },
    ]}
/>`;

export const BasicToolbarMenu = (): JSX.Element => (
    <Box>
        <BasicToolbarMenuExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ToolbarMenu/examples/BasicToolbarMenuExample.tsx"
        />
    </Box>
);
