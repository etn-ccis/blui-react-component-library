import Box from '@mui/material/Box';
import { Drawer, DrawerBody, DrawerHeader, DrawerNavGroup, DrawerNavItem } from '@brightlayer-ui/react-components';
import * as colors from '@brightlayer-ui/colors';
import Menu from '@mui/icons-material/Menu';
import Dashboard from '@mui/icons-material/Dashboard';
import Toc from '@mui/icons-material/Toc';
import Devices from '@mui/icons-material/Devices';
import AirportShuttle from '@mui/icons-material/AirportShuttle';
import MoveToInbox from '@mui/icons-material/MoveToInbox';
import FactCheck from '@mui/icons-material/FactCheck';
import Accessibility from '@mui/icons-material/Accessibility';
import Notifications from '@mui/icons-material/Notifications';
import { useState } from 'react';

export const ComplexDrawerExample = (): JSX.Element => {
    const [selected, setSelected] = useState('1');

    return (
        <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
            <Drawer
                open={true}
                width={300}
                sx={{ margin: '0 auto', height: 580, '& .MuiPaper-root': { overflow: 'auto' } }}
                activeItem={selected}
                noLayout
            >
                <DrawerHeader icon={<Menu />} title="Brightlayer UI" subtitle="Drawer Component" />
                <DrawerBody sx={{ flex: '1 1 auto' }}>
                    <DrawerNavGroup title="Group 1" hidePadding divider>
                        <DrawerNavItem
                            title="Overview"
                            subtitle="Learn more about us"
                            icon={<Dashboard />}
                            statusColor={colors.green[500]}
                            itemID="1"
                            onClick={(): void => setSelected('1')}
                            divider
                        >
                            <DrawerNavItem title="Monthly Report" itemID="2" hidePadding={false} divider />
                            <DrawerNavItem title="Annual Report" itemID="3" hidePadding={false} divider />
                        </DrawerNavItem>
                        <DrawerNavItem title="Timeline" icon={<Toc />} itemID="4" />
                        <DrawerNavItem
                            title="Devices"
                            subtitle="4 new warnings"
                            icon={<Devices />}
                            statusColor={colors.yellow[500]}
                            itemID="5"
                            divider
                        />
                        <DrawerNavItem
                            title="Schedule"
                            icon={<AirportShuttle />}
                            itemID="6"
                            hidePadding={false}
                            divider
                        />
                    </DrawerNavGroup>
                    <DrawerNavGroup title="Group 2" hidePadding divider>
                        <DrawerNavItem
                            title="User Guide"
                            icon={<MoveToInbox />}
                            itemID="7"
                            hidePadding={false}
                            divider
                        />
                        <DrawerNavItem
                            title="License Agreement"
                            subtitle="For Eaton employees only"
                            icon={<FactCheck />}
                            itemID="8"
                            hidePadding={false}
                            divider
                        />
                        <DrawerNavItem
                            title="Accessibility"
                            icon={<Accessibility />}
                            itemID="9"
                            hidePadding={false}
                            onClick={(): void => setSelected('9')}
                            divider
                        >
                            <DrawerNavItem title="Color Contrast Guide" itemID="10" hidePadding={false} />
                            <DrawerNavItem title="Screen Reader" itemID="11" hidePadding={false} />
                        </DrawerNavItem>
                        <DrawerNavItem
                            title="Notifications"
                            icon={<Notifications />}
                            itemID="12"
                            hidePadding={false}
                            divider
                        />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
        </Box>
    );
};
