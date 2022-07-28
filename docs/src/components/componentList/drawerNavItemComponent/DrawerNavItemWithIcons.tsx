import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock } from '../../codeSnippet/codeBlock';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-components';
import Dashboard from '@mui/icons-material/Dashboard';
import Notifications from '@mui/icons-material/Notifications';
import Gavel from '@mui/icons-material/Gavel';

const htmlCode = `<DrawerBody>
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
            <Drawer open={true} width={250} sx={{ height: '156px', margin: '0 auto' }} noLayout>
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem title="Dashboard" icon={<Dashboard />} itemID="1" />
                        <DrawerNavItem title="Locations" icon={<Notifications />} itemID="2" />
                        <DrawerNavItem title="Legal" icon={<Gavel />} itemID="3" />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
            <CodeBlock code={htmlCode} language="html" />
        </Box>
    );
};
