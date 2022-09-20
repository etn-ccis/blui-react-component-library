import React from 'react';
import { Box } from '@mui/material';
import { CodeBlock, CodeBlockActionButtonRow } from '../../../shared';
import { ComplexDrawerExample } from './ComplexDrawerExample';

const codeSnippet = `<Drawer open={true} width={300}>
    <DrawerHeader icon={<Menu />} title="Brightlayer UI"/>
    <DrawerBody>
        <DrawerNavGroup title="Group 1" divider>
            <DrawerNavItem
                title="Overview"
                icon={<Dashboard />}
                itemID="1"
            >
                <DrawerNavItem title="Monthly Report" itemID="2" />
                <DrawerNavItem title="Annual Report" itemID="3" />
            </DrawerNavItem>
            <DrawerNavItem title="Timeline" icon={<Toc />} itemID="4" />
            <DrawerNavItem
                title="Devices"
                icon={<Devices />}
                itemID="5"
            />
            <DrawerNavItem title="Schedule" icon={<AirportShuttle />} itemID="6" />
        </DrawerNavGroup>
        <DrawerNavGroup title="Group 2" divider>
            <DrawerNavItem title="User Guide" icon={<MoveToInbox />} itemID="7" />
            <DrawerNavItem
                title="License Agreement"
                icon={<FactCheck />}
                itemID="8"
            />
            <DrawerNavItem
                title="Accessibility"
                icon={<Accessibility />}
                itemID="9"
            >
                <DrawerNavItem title="Color Contrast Guide" itemID="10" />
                <DrawerNavItem title="Screen Reader" itemID="11" />
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
        <CodeBlockActionButtonRow copyText={codeSnippet} url="componentDocs/Drawer/examples/ComplexDrawerExample.tsx" />
    </Box>
);
