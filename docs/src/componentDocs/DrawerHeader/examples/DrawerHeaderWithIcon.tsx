import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CopyToClipboard, FullCodeOnGithub } from '../../../shared';
import { DrawerHeaderWithIconExample } from './DrawerHeaderWithIconExample';

const codeSnippet = `<Drawer open={true} width={250}>
    <DrawerHeader title="Title" icon={<Menu />} />
</Drawer>
`;

export const DrawerHeaderWithIcon = (): JSX.Element => (
    <Box>
        <DrawerHeaderWithIconExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="2" />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
            <CopyToClipboard title={'Copy All'} copyText={codeSnippet} />
            <FullCodeOnGithub
                sx={{ ml: 2 }}
                url="componentDocs/DrawerHeader/examples/DrawerHeaderWithIconExample.tsx"
            />
        </Box>
    </Box>
);
