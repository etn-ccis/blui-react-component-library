import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CopyToClipboard, FullCodeOnGithub } from '../../../shared';
import { BasicDrawerNavGroupExample } from './BasicDrawerNavGroupExample';

const codeSnippet = `<Drawer>
    <DrawerBody>
        <DrawerNavGroup hidePadding divider>
            <DrawerNavItem title="Item 1" itemID="1" />
            <DrawerNavItem title="Item 2" itemID="2" />
        </DrawerNavGroup>
    </DrawerBody>
</Drawer>
`;
export const BasicDrawerNavGroup = (): JSX.Element => (
    <Box>
        <BasicDrawerNavGroupExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="3-6" />{' '}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <CopyToClipboard title={'Copy All'} copyText={codeSnippet} />
            <FullCodeOnGithub
                sx={{ ml: 2 }}
                url="componentDocs/DrawerNavGroup/examples/BasicDrawerNavGroupExample.tsx"
            />
        </Box>
    </Box>
);
