import React, { useState } from 'react';
import Box from '@mui/material/Box';
import {
    InputConfig,
    PreviewComponent,
    CodeSnippetFunction,
    getPropsToString,
    getPropsMapping,
    Playground,
} from '@brightlayer-ui/react-doc-components';
import Stack from '@mui/material/Stack';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerNavGroup,
    NavItem,
    DrawerNavGroupProps,
} from '@brightlayer-ui/react-components';
import * as Colors from '@brightlayer-ui/colors';
import Menu from '@mui/icons-material/Menu';
import Dashboard from '@mui/icons-material/Dashboard';
import Toc from '@mui/icons-material/Toc';
import Devices from '@mui/icons-material/Devices';
import AirportShuttle from '@mui/icons-material/AirportShuttle';
import { sharedPropsConfig } from '../../Drawer/playground/sharedPropsConfig';
import { getIcon, getIconSnippetWithProps, removeEmptyProps } from '../../../shared';

const inputConfig: InputConfig = [
    // Required Props
    // NONE

    // Optional Props
    {
        id: 'title',
        type: 'string',
        typeLabel: 'string',
        description: 'Text to display in the group header',
        required: false,
        initialValue: 'Brightlayer UI Drawer',
        category: 'Optional Props',
    },
    {
        id: 'titleColor',
        type: 'color',
        typeLabel: 'string',
        description: `Color used for the title text`,
        required: false,
        initialValue: '',
        category: 'Optional Props',
    },
    {
        id: 'titleDivider',
        type: 'boolean',
        description: 'Whether to show a divider line below the title',
        required: false,
        initialValue: true,
        defaultValue: true,
        category: 'Optional Props',
    },

    // Shared Props
    ...sharedPropsConfig,

    // Other Configuration
    // NONE
];

const DrawerNavGroupPreview: PreviewComponent = ({ data }) => {
    const { expandIcon, collapseIcon, ...rest } = data as unknown as Omit<
        DrawerNavGroupProps,
        'collapseIcon' | 'expandIcon'
    > & { collapseIcon: string; expandIcon: string };
    const [activeItem, setActiveItem] = useState('Overview');

    const navGroupItems: NavItem[] = [
        {
            icon: <Dashboard />,
            itemID: 'Overview',
            title: 'Overview',
            onClick: (): void => setActiveItem('Overview'),
            items: [
                {
                    itemID: 'Monthly Report',
                    title: 'Monthly Report',
                    onClick: (): void => setActiveItem('Monthly Report'),
                },
                {
                    itemID: 'Annual Report',
                    title: 'Annual Report',
                    onClick: (): void => setActiveItem('Annual Report'),
                },
            ],
        },
        {
            icon: <Toc />,
            itemID: 'Timeline',
            title: 'Timeline',
            onClick: (): void => setActiveItem('Timeline'),
        },
        {
            icon: <Devices />,
            title: 'Devices',
            itemID: 'Devices',
            subtitle: '5 new warnings',
            statusColor: Colors.yellow[500],
            onClick: (): void => setActiveItem('Devices'),
        },
        {
            icon: <AirportShuttle />,
            itemID: 'Schedule',
            title: 'Schedule',
            onClick: (): void => setActiveItem('Schedule'),
        },
    ];

    return (
        <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: '100%' }}>
            <Box>
                <Drawer open noLayout activeItem={activeItem}>
                    <DrawerHeader title="Header" icon={<Menu />} />
                    <DrawerBody sx={{ flex: '1 1 auto' }}>
                        <DrawerNavGroup
                            items={navGroupItems}
                            collapseIcon={getIcon(collapseIcon)}
                            expandIcon={getIcon(expandIcon)}
                            {...removeEmptyProps(rest)}
                        />
                    </DrawerBody>
                </Drawer>
            </Box>
        </Stack>
    );
};

const generateSnippet: CodeSnippetFunction = (data) =>
    `<DrawerNavGroup
    ${getPropsToString(getPropsMapping(data, inputConfig), { join: '\n\t', skip: ['collapseIcon', 'expandIcon'] })}
    ${data.collapseIcon !== 'undefined' ? `collapseIcon={${getIconSnippetWithProps(data.collapseIcon as string)}}` : ''}
    ${data.expandIcon !== 'undefined' ? `expandIcon={${getIconSnippetWithProps(data.expandIcon as string)}}` : ''}
    items={navGroupItems}
/>`
        .replace(/^\s*$(?:\r\n?|\n)/gm, '')
        .replace(/(?:^|)( {4}|\t)/gm, '    ');

export const DrawerNavGroupPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            height: { xs: 'calc(100vh - 105px)', sm: 'calc(100vh - 113px)' },
        }}
    >
        <Playground inputConfig={inputConfig} codeSnippet={generateSnippet} previewComponent={DrawerNavGroupPreview} />
    </Box>
);
