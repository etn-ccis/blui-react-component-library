import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { ThreeLinerWithCustomContentExample } from './ThreeLinerWithCustomContentExample';

const codeSnippet = `<ThreeLiner
    title="title"
    subtitle="subtitle"
    info={
        <ToolbarMenu
            label="info"
            menuGroups={[
                {
                    items: [
                        {
                            title: 'Menu Item 1'
                        },
                        {
                            title: 'Menu Item 2'
                        },
                        {
                            title: 'Menu Item 3'
                        },
                    ],
                },
            ]}
        />
    }
/>`;

export const ThreeLinerWithCustomContent = (): JSX.Element => (
    <Box>
        <ThreeLinerWithCustomContentExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="5-22" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ThreeLiner/examples/ThreeLinerWithCustomContentExample.tsx"
        />
    </Box>
);
