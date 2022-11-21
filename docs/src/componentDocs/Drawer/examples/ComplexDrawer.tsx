import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { ComplexDrawerExample } from './ComplexDrawerExample';

const codeSnippet = `<Drawer open width={300}>
    <DrawerHeader icon={<Menu />} title="Brightlayer UI" subtitle="Drawer Component" />
    <DrawerBody>
        <DrawerNavGroup title="Group 1" hidePadding divider items={group1} />
        <DrawerNavGroup title="Group 2" hidePadding divider items={group2} />
    </DrawerBody>
</Drawer>`;

export const ComplexDrawer = (): JSX.Element => (
    <Box>
        <ComplexDrawerExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <CodeBlockActionButtonRow copyText={codeSnippet} url="componentDocs/Drawer/examples/ComplexDrawerExample.tsx" />
    </Box>
);
