import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
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
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4, display: 'flex', justifyContent: 'center' }}>
            <BasicToolbarMenuExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ToolbarMenu/examples/BasicToolbarMenuExample.tsx"
        />
    </Box>
);
