import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { DrawerHeaderWithSubtitleExample } from './DrawerHeaderWithSubtitleExample';

const codeSnippet = `<Drawer open={true} width={250}>
    <DrawerHeader title="Title" subtitle="Subtitle" />
</Drawer>
`;

export const DrawerHeaderWithSubtitle = (): JSX.Element => (
    <Box>
        <DrawerHeaderWithSubtitleExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="2" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/DrawerHeader/examples/DrawerHeaderWithSubtitleExample.tsx"
        />
    </Box>
);
