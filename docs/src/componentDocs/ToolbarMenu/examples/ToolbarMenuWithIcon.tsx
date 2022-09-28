import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
import { ToolbarMenuWithIconExample } from './ToolbarMenuWithIconExample';

const codeSnippet = `<ToolbarMenu
    sx={{ maxWidth: 'inherit' }}
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
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4, display: 'flex', justifyContent: 'center' }}>
            <ToolbarMenuWithIconExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ToolbarMenu/examples/ToolbarMenuWithIconExample.tsx"
        />
    </Box>
);
