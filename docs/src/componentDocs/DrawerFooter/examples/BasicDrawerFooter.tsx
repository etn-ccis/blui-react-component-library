import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CopyToClipboard } from '../../../shared';
import { BasicDrawerFooterExample } from './BasicDrawerFooterExample';

const codeSnippet = `<Drawer>
    <DrawerBody>
        <DrawerNavGroup hidePadding divider>
            <DrawerNavItem title="Dashboard" itemID="1" />
            <DrawerNavItem title="Locations" itemID="2" />
            <DrawerNavItem title="Legal" itemID="3" />
        </DrawerNavGroup>
    </DrawerBody>
    <DrawerFooter>
        Footer Content Here
    </DrawerFooter>
</Drawer>
`;

export const BasicDrawerFooter = (): JSX.Element => (
    <Box>
        <BasicDrawerFooterExample />
        <CodeBlock code={codeSnippet} language="jsx" dataLine="9-11" />
        <CopyToClipboard title={'Copy All'} copyText={codeSnippet} />
    </Box>
);
