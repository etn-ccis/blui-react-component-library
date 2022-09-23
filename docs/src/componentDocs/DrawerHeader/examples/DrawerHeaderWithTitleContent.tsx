import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { DrawerHeaderWithTitleContentExample } from './DrawerHeaderWithTitleContentExample';

const codeSnippet = ` <Drawer open={true} width={250}>
    <DrawerHeader
        icon={<Menu />}
        titleContent={
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                <Typography variant="subtitle1" sx={{ mb: -1 }}>
                    Customizable
                </Typography>
                <Typography variant="h6">Header Content</Typography>
            </Box>
        }
    />
</Drawer>
`;

export const DrawerHeaderWithTitleContent = (): JSX.Element => (
    <Box>
        <DrawerHeaderWithTitleContentExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="2-12" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/DrawerHeader/examples/DrawerHeaderWithTitleContentExample.tsx"
        />
    </Box>
);
