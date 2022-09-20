import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { BasicDrawerHeaderExample } from './BasicDrawerHeaderExample';

const codeSnippet = `<Drawer open={true} width={250}>
    <DrawerHeader title="Title" />
</Drawer>
`;

export const BasicDrawerHeader = (): JSX.Element => (
    <Box>
        <BasicDrawerHeaderExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="2" />
        <CodeBlockActionButtonRow
            copyText={codeSnippet}
            url="componentDocs/DrawerHeader/examples/BasicDrawerHeaderExample.tsx"
        />
    </Box>
);
