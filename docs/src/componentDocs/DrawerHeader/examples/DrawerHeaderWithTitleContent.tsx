import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CopyToClipboard, FullCodeOnGithub } from '../../../shared';
import { DrawerHeaderWithTitleContentExample } from './DrawerHeaderWithTitleContentExample';

const codeSnippet = ` <Drawer open={true} width={250} sx={{ margin: '0 auto' }} noLayout>
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
        <CodeBlock code={codeSnippet} language="jsx" dataLine="9-11" />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
            <CopyToClipboard title={'Copy All'} copyText={codeSnippet} />
            <FullCodeOnGithub
                sx={{ ml: 2 }}
                url="componentDocs/DrawerHeader/examples/DrawerHeaderWithTitleContentExample.tsx"
            />
        </Box>
    </Box>
);
