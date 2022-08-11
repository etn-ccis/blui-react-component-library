import React from 'react';
import { Box, Button } from '@mui/material';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-components';
import { CodeBlock } from '../../codeSnippet/codeBlock';
import { CopyToClipboard } from '../../CopyToClipboardButton';
import CodeIcon from '@mui/icons-material/Code';
import { Dashboard, Gavel, Notifications } from '@mui/icons-material';
import * as colors from '@brightlayer-ui/colors';

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
            <Box sx={{ m: '32px 0', backgroundColor: colors.white[600], p: 4 }}>
                <Drawer open={true} width={250} sx={{ margin: '0 auto' }}>
                    <DrawerBody sx={{ flex: '1 1 auto' }}>
                        <DrawerNavGroup>
                            <DrawerNavItem title="Dashboard" icon={<Dashboard />} itemID="1" />
                            <DrawerNavItem title="Locations" icon={<Notifications />} itemID="2" />
                            <DrawerNavItem title="Legal" icon={<Gavel />} itemID="3" />
                        </DrawerNavGroup>
                    </DrawerBody>
                </Drawer>
            </Box>
            <CodeBlock code={codeSnippet} language="jsx" dataLine="3-5" />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <CopyToClipboard title={'Copy All'} copyText={codeSnippet} />
                <Button
                    sx={{ ml: 2 }}
                    variant="outlined"
                    target="_blank"
                    href="https://codesandbox.io/s/drawernavitemwithicons-7k0oiy?file=/src/DrawerNavItemWithIconsExample.tsx"
                    startIcon={<CodeIcon />}
                >
                    SandBox
                </Button>
            </Box>
        </Box>
    );
};
