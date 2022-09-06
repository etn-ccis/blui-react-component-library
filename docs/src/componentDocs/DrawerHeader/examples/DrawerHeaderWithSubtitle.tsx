import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CopyToClipboard, FullCodeOnGithub } from '../../../shared';
import { DrawerHeaderWithSubtitleExample } from './DrawerHeaderWithSubtitleExample';

const codeSnippet = `<Drawer open={true} width={250} sx={{ margin: '0 auto' }} noLayout>
    <DrawerHeader title="Title" subtitle="Subtitle" />
</Drawer>
`;

export const DrawerHeaderWithSubtitle = (): JSX.Element => (
    <Box>
        <DrawerHeaderWithSubtitleExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="9-11" />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
            <CopyToClipboard title={'Copy All'} copyText={codeSnippet} />
            <FullCodeOnGithub
                sx={{ ml: 2 }}
                url="componentDocs/DrawerHeader/examples/DrawerHeaderWithSubtitleExample.tsx"
            />
        </Box>
    </Box>
);
