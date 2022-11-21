import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { ToolbarMenuWithIconExample } from './ToolbarMenuWithIconExample';

const codeSnippet = `<ToolbarMenu
    label="My Home"
    icon={<Home />}
    menuGroups={[
        {
            items: [{ title: 'London' }, { title: 'New York' }, { title: 'New Haven' }],
        },
    ]}
/>`;

export const ToolbarMenuWithIcon = (): JSX.Element => (
    <Box>
        <ToolbarMenuWithIconExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="3" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ToolbarMenu/examples/ToolbarMenuWithIconExample.tsx"
        />
    </Box>
);
