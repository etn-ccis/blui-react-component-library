import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { DrawerHeaderExample } from './DrawerHeaderExample';

const codeSnippet = `<Drawer open={true} width={250}>
    <DrawerHeader title="Title" subtitle="Subtitle" icon={<Menu />} />
</Drawer>
`;

export const DrawerHeader = (): JSX.Element => (
    <Box>
        <DrawerHeaderExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="2" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/DrawerHeader/examples/DrawerHeaderExample.tsx"
        />
    </Box>
);
