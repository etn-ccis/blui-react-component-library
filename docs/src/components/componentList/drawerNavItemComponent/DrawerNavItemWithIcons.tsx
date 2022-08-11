import React from 'react';
import { Box, Button } from '@mui/material';
import { CodeBlock } from '../../codeSnippet/codeBlock';
import { CopyToClipboard } from '../../CopyToClipboardButton';
import CodeIcon from '@mui/icons-material/Code';
import { DrawerNavItemWithIconsExample } from '../../../example/drawerNavItem/DrawerNavItemWithIcons';

const codeSnippet = `<DrawerBody>
    <DrawerNavGroup>
        <DrawerNavItem title="Dashboard" icon={<Dashboard/>} itemID="1" />
        <DrawerNavItem title="Locations" icon={<Notifications />} itemID="2" />
        <DrawerNavItem title="Legal" icon={<Gavel />} itemID="3" />
    </DrawerNavGroup>
</DrawerBody>
`;
export const DrawerNavItemWithIcons = (): JSX.Element => {
    return (
        <Box>
          <DrawerNavItemWithIconsExample />
            <CodeBlock code={codeSnippet} language="jsx" dataLine="3-5" />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <CopyToClipboard title={'Copy All'} copyText={codeSnippet} />
                <Button sx={{ml: 2}} variant='outlined' target="_blank" href='https://codesandbox.io/s/drawernavitemwithicons-7k0oiy?file=/src/DrawerNavItemWithIcons.tsx' startIcon={<CodeIcon/>}>SandBox</Button>
            </Box>
        </Box>
    );
};
