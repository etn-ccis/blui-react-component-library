import React from 'react';
import Box from '@mui/material/Box';
import { CodeBlock } from '../../codeSnippet/codeBlock';
import { CopyToClipboard } from '../../CopyToClipboardButton';
import { FullCodeOnGithub } from '../../FullCodeOnGithubButton';
import { BasicDrawerNavItemExample } from '../../../example/drawerNavItem/BasicDrawerNavItemExample';

const codeSnippet = `<DrawerBody>
    <DrawerNavGroup hidePadding divider>
        <DrawerNavItem title="Dashboard" itemID="1" />
        <DrawerNavItem title="Locations" itemID="2" />
        <DrawerNavItem title="Legal" itemID="3" />
    </DrawerNavGroup>
</DrawerBody>
`;
export const BasicDrawerNavItem = (): JSX.Element => {
    return (
        <Box>
            <BasicDrawerNavItemExample />
            <CodeBlock code={codeSnippet} language="jsx" dataLine="3-5" />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <CopyToClipboard title={'Copy All'} copyText={codeSnippet} />
                <FullCodeOnGithub url="example/drawerNavItem/BasicDrawerNavItemExample.tsx" />
            </Box>
        </Box>
    );
};
