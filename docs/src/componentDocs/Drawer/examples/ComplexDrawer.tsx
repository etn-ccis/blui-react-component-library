import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CopyToClipboard, FullCodeOnGithub } from '../../../shared';
import { ComplexDrawerExample } from './ComplexDrawerExample';

const codeSnippet = `<Drawer open={true} width={300}>
    <DrawerHeader icon={<Menu />} title="Brightlayer UI" subtitle="Drawer Component" />
    <DrawerBody sx={{ flex: '1 1 auto' }}>
        <DrawerNavGroup title="Group 1" hidePadding divider>
            <DrawerNavItem
                title="Overview"
                subtitle="Learn more about us"
                icon={<Dashboard />}
                statusColor={colors.green[500]}
                itemID="1"
            >
                <DrawerNavItem title="Monthly Report" itemID="2" hidePadding={false} />
                <DrawerNavItem title="Annual Report" itemID="3" hidePadding={false} />
            </DrawerNavItem>
            <DrawerNavItem title="Timeline" icon={<Toc />} itemID="4" />
            <DrawerNavItem
                title="Devices"
                subtitle="4 new warnings"
                icon={<Devices />}
                statusColor={colors.yellow[500]}
                itemID="5"
            />
            <DrawerNavItem title="Schedule" icon={<AirportShuttle />} itemID="6" />
        </DrawerNavGroup>
        <DrawerNavGroup title="Group 2" hidePadding divider>
            <DrawerNavItem title="User Guide" icon={<MoveToInbox />} itemID="7" />
            <DrawerNavItem
                title="License Agreement"
                subtitle="For Eaton employees only"
                icon={<FactCheck />}
                itemID="8"
            />
            <DrawerNavItem
                title="Accessibility"
                icon={<Accessibility />}
                itemID="9"
            >
                <DrawerNavItem title="Color Contrast Guide" itemID="10" hidePadding={false} />
                <DrawerNavItem title="Screen Reader" itemID="11" hidePadding={false} />
            </DrawerNavItem>
            <DrawerNavItem title="Notifications" icon={<Notifications />} itemID="12" />
        </DrawerNavGroup>
    </DrawerBody>
</Drawer>
`;

export const ComplexDrawer = (): JSX.Element => (
    <Box>
        <ComplexDrawerExample />
        <CodeBlock code={codeSnippet} language="jsx" />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
            <CopyToClipboard title={'Copy All'} copyText={codeSnippet} />
            <FullCodeOnGithub sx={{ ml: 2 }} url="componentDocs/Drawer/examples/ComplexDrawerExample.tsx" />
        </Box>
    </Box>
);
