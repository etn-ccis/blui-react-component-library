import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CopyToClipboard } from '../../../shared';
import { BasicDrawerBodyExample } from './BasicDrawerBodyExample';

const codeSnippet = `<Drawer>
    <DrawerBody>
        <DrawerNavGroup hidePadding divider>
            <DrawerNavItem title="Dashboard" itemID="1" />
            <DrawerNavItem title="Locations" itemID="2" />
            <DrawerNavItem title="Legal" itemID="3" />
        </DrawerNavGroup>
    </DrawerBody>
</Drawer>
`;

export const BasicDrawerBody = (): JSX.Element => (
    <Box>
        <BasicDrawerBodyExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="2-8" />
        <CopyToClipboard title={'Copy All'} copyText={codeSnippet} />
    </Box>
);
