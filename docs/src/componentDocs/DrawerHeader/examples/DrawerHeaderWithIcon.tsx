import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { DrawerHeaderWithIconExample } from './DrawerHeaderWithIconExample';

const codeSnippet = `<Drawer open={true} width={250}>
    <DrawerHeader title="Title" icon={<Menu />} />
</Drawer>
`;

export const DrawerHeaderWithIcon = (): JSX.Element => (
    <Box>
        <DrawerHeaderWithIconExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="2" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/DrawerHeader/examples/DrawerHeaderWithIconExample.tsx"
        />
    </Box>
);
