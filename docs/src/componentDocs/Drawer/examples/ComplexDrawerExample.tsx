import React, { useState } from 'react';
import { Drawer, DrawerBody, DrawerHeader, DrawerNavGroup, DrawerNavItemProps } from '@brightlayer-ui/react-components';
import * as colors from '@brightlayer-ui/colors';
import Menu from '@mui/icons-material/Menu';
import Dashboard from '@mui/icons-material/Dashboard';
import Toc from '@mui/icons-material/Toc';
import Devices from '@mui/icons-material/Devices';
import AirportShuttle from '@mui/icons-material/AirportShuttle';
import FactCheck from '@mui/icons-material/FactCheck';
import Accessibility from '@mui/icons-material/Accessibility';
import Notifications from '@mui/icons-material/Notifications';
import { ExampleShowcase } from '../../../shared';
import { MoveToInbox } from '@mui/icons-material';

export const ComplexDrawerExample = (): JSX.Element => {
    const [selected, setSelected] = useState('1');
    const group1: DrawerNavItemProps[] = [
        {
            title: 'Overview',
            subtitle: 'Learn more about us',
            icon: <Dashboard />,
            statusColor: colors.green[500],
            itemID: '1',
            onClick: (): void => setSelected('1'),
            items: [
                {
                    title: 'Monthly Report',
                    itemID: '2',
                    hidePadding: false,
                },
                {
                    title: 'Annual Report',
                    itemID: '3',
                    hidePadding: false,
                },
            ],
        },
        {
            title: 'Timeline',
            icon: <Toc />,
            itemID: '4',
            onClick: (): void => setSelected('4'),
        },
        {
            title: 'Devices',
            subtitle: '4 new warnings',
            icon: <Devices />,
            statusColor: colors.yellow[500],
            itemID: '5',
            onClick: (): void => setSelected('5'),
        },
        {
            title: 'Schedule',
            icon: <AirportShuttle />,
            itemID: '6',
            onClick: (): void => setSelected('6'),
        },
    ];

    const group2: DrawerNavItemProps[] = [
        {
            title: 'User Guide',
            icon: <MoveToInbox />,
            itemID: '7',
            onClick: (): void => setSelected('7'),
        },
        {
            title: 'License Agreement',
            subtitle: 'For Eaton employees only',
            icon: <FactCheck />,
            itemID: '8',
            onClick: (): void => setSelected('8'),
        },
        {
            title: 'Accessibility',
            icon: <Accessibility />,
            itemID: '9',
            onClick: (): void => setSelected('9'),
            items: [
                {
                    title: 'Color Contrast Guide',
                    itemID: '10',
                    hidePadding: false,
                },
                {
                    title: 'Screen Reader',
                    itemID: '11',
                    hidePadding: false,
                },
            ],
        },
        {
            title: 'Notifications',
            icon: <Notifications />,
            itemID: '12',
            onClick: (): void => setSelected('12'),
        },
    ];

    return (
        <ExampleShowcase>
            <Drawer open width={300} sx={{ mx: 'auto', height: 580 }} activeItem={selected} noLayout>
                <DrawerHeader icon={<Menu />} title="Brightlayer UI" subtitle="Drawer Component" />
                <DrawerBody>
                    <DrawerNavGroup title="Group 1" hidePadding divider items={group1} />
                    <DrawerNavGroup title="Group 2" hidePadding divider items={group2} />
                </DrawerBody>
            </Drawer>
        </ExampleShowcase>
    );
};
