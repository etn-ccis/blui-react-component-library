import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import * as colors from '@brightlayer-ui/colors';
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
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4, display: 'flex', justifyContent: 'center' }}>
            <ThreeLinerWithCustomContentExample />
        </Box>
        <CodeBlock code={codeSnippet} language="jsx" dataLine="5-15" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/ThreeLiner/examples/ThreeLinerWithCustomContentExample.tsx"
        />
    </Box>
);
