import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import {
    InputConfig,
    PreviewComponent,
    CodeSnippetFunction,
    getPropsToString,
    getPropsMapping,
    Playground,
    usePlaygroundValues,
} from '@brightlayer-ui/react-doc-components';
import Stack from '@mui/material/Stack';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerProps,
    DrawerNavGroup,
    NavItem,
    DrawerLayout,
} from '@brightlayer-ui/react-components';
import * as Colors from '@brightlayer-ui/colors';
import Menu from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Close from '@mui/icons-material/Close';
import Dashboard from '@mui/icons-material/Dashboard';
import Toc from '@mui/icons-material/Toc';
import Devices from '@mui/icons-material/Devices';
import AirportShuttle from '@mui/icons-material/AirportShuttle';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { sharedPropsConfig } from './sharedPropsConfig';
import { getIcon, getIconSnippetWithProps, removeEmptyProps } from '../../../shared';

const inputConfig: InputConfig = [
    // Required Props
    {
        id: 'open',
        type: 'boolean',
        description: 'Controls the open/closed state of the drawer',
        required: true,
        initialValue: true,
        defaultValue: false,
        category: 'Required Props',
    },

    // Optional Props
    {
        id: 'activeItem',
        type: 'select',
        typeLabel: `string`,
        description: `itemID for the 'active' item`,
        initialValue: 'undefined',
        defaultValue: 'undefined',
        options: ['undefined', 'Overview', 'Monthly Report', 'Annual Report', 'Timeline', 'Devices', 'Schedule'],
        required: false,
        category: 'Optional Props',
    },
    {
        id: 'condensed',
        type: 'boolean',
        description: 'Show condensed nav items without labels (rail variant only)',
        required: false,
        initialValue: false,
        defaultValue: false,
        category: 'Optional Props',
    },
    {
        id: 'openOnHover',
        type: 'boolean',
        description: 'Automatically open the drawer on hover when closed (persistent variant only)',
        required: false,
        initialValue: true,
        defaultValue: true,
        category: 'Optional Props',
    },
    {
        id: 'openOnHoverDelay',
        type: 'number',
        typeLabel: `number`,
        description: 'Delay (ms) before triggering open on hover (persistent variant only)',
        required: false,
        initialValue: 500,
        minValue: 100,
        maxValue: 1000,
        valueStep: 100,
        defaultValue: 500,
        category: 'Optional Props',
    },
    {
        id: 'sideBorder',
        type: 'boolean',
        description: 'Whether to use a side border for the drawer instead of a shadow',
        required: false,
        initialValue: false,
        defaultValue: false,
        category: 'Optional Props',
    },
    {
        id: 'variant',
        type: 'select',
        typeLabel: `'persistent' | 'permanent' | 'temporary' | 'rail'`,
        description: 'The variant / style of drawer to use',
        initialValue: 'persistent',
        defaultValue: 'persistent',
        options: ['persistent', 'permanent', 'temporary', 'rail'],
        required: false,
        category: 'Optional Props',
    },
    {
        id: 'width',
        type: 'number',
        typeLabel: `number | string`,
        description: 'Sets the width of the drawer when open',
        required: false,
        initialValue: 360,
        minValue: 200,
        maxValue: 700,
        valueStep: 10,
        defaultValue: 360,
        category: 'Optional Props',
    },

    // Shared Props
    ...sharedPropsConfig,

    // Other Configuration
    // NONE
];

const DrawerPreview: PreviewComponent = ({ data }) => {
    const { variant, open, collapseIcon, expandIcon, ...rest } = data as unknown as Omit<
        DrawerProps,
        'collapseIcon' | 'expandIcon'
    > & { collapseIcon: string; expandIcon: string };
    const { updateData } = usePlaygroundValues();
    const containerRef = useRef(null);
    const persistent = variant === 'persistent';
    const permanent = variant === 'permanent';
    const temporary = variant === 'temporary';
    const rail = variant === 'rail';

    const navGroupItems: NavItem[] = [
        {
            icon: <Dashboard />,
            itemID: 'Overview',
            title: 'Overview',
            onClick: (): void => updateData('activeItem', 'Overview'),
            items: [
                {
                    itemID: 'Monthly Report',
                    title: 'Monthly Report',
                    onClick: (): void => updateData('activeItem', 'Monthly Report'),
                },
                {
                    itemID: 'Annual Report',
                    title: 'Annual Report',
                    onClick: (): void => updateData('activeItem', 'Annual Report'),
                },
            ],
        },
        {
            icon: <Toc />,
            itemID: 'Timeline',
            title: 'Timeline',
            onClick: (): void => updateData('activeItem', 'Timeline'),
        },
        {
            icon: <Devices />,
            title: 'Devices',
            itemID: 'Devices',
            subtitle: '5 new warnings',
            statusColor: Colors.yellow[500],
            onClick: (): void => updateData('activeItem', 'Devices'),
        },
        {
            icon: <AirportShuttle />,
            itemID: 'Schedule',
            title: 'Schedule',
            onClick: (): void => updateData('activeItem', 'Schedule'),
        },
    ];

    return (
        <Stack
            alignItems={'center'}
            justifyContent={'center'}
            sx={{ overflowY: 'auto', width: '100%', height: '100%', p: 1 }}
        >
            <Box
                sx={{
                    m: '16px 0',
                    backgroundColor: Colors.white[600],
                    maxHeight: '100%',
                    maxWidth: '80%',
                    position: 'relative',
                }}
                ref={containerRef}
            >
                <DrawerLayout
                    drawer={
                        <Drawer
                            open={open}
                            // noLayout
                            variant={variant}
                            collapseIcon={getIcon(collapseIcon)}
                            expandIcon={getIcon(expandIcon)}
                            ModalProps={{
                                disablePortal: temporary,
                                slotProps: {
                                    backdrop: { sx: { position: 'absolute' } },
                                },
                            }}
                            SlideProps={{
                                container: containerRef.current,
                            }}
                            sx={{
                                position: 'absolute',
                                // minWidth: '100%',
                                '& .MuiPaper-root': {
                                    background: 'transparent',
                                    width: persistent ? 'inherit' : 'initial',
                                },
                                '& .BluiDrawer-content': { backgroundColor: 'background.paper' },
                            }}
                            {...removeEmptyProps(rest)}
                        >
                            {temporary && (
                                <DrawerHeader
                                    title="Temporary"
                                    icon={<Close />}
                                    onClick={(): void => updateData('open', !open)}
                                    sx={{ cursor: 'pointer' }}
                                />
                            )}

                            {persistent && (
                                <DrawerHeader
                                    title="Persistent"
                                    icon={<Menu />}
                                    onClick={(): void => updateData('open', !open)}
                                    sx={{ cursor: 'pointer' }}
                                />
                            )}

                            {permanent && <DrawerHeader title="Permanent" />}
                            <DrawerBody sx={{ flex: '1 1 auto' }}>
                                <DrawerNavGroup items={navGroupItems}></DrawerNavGroup>
                            </DrawerBody>
                        </Drawer>
                    }
                    sx={{
                        '& .BluiDrawerLayout-drawer': { height: 330 },
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: 'background.paper',
                            height: 330,
                            width: 650,
                            maxWidth: '100%',
                        }}
                    >
                        {rail ? (
                            <Box sx={{ p: 2, ml: 9 }}>App Content Here.</Box>
                        ) : (
                            <>
                                <AppBar position="static">
                                    <Toolbar>
                                        {variant === 'temporary' && (
                                            <IconButton
                                                size="large"
                                                edge="start"
                                                color="inherit"
                                                aria-label="menu"
                                                sx={{ mr: 2 }}
                                                onClick={(): void => updateData('open', !open)}
                                            >
                                                <Menu />
                                            </IconButton>
                                        )}
                                        <Typography variant="h6">Toolbar</Typography>
                                    </Toolbar>
                                </AppBar>
                                <Box
                                    sx={{
                                        p: 2,
                                        ml: 1,
                                        marginLeft: 0,
                                    }}
                                >
                                    App Content Here.
                                </Box>
                            </>
                        )}
                    </Box>
                </DrawerLayout>
            </Box>
        </Stack>
    );
};

const generateSnippet: CodeSnippetFunction = (data) =>
    `<Drawer 
    ${getPropsToString(getPropsMapping(data, inputConfig), { join: '\n\t', skip: ['collapseIcon', 'expandIcon'] })}
    ${data.collapseIcon !== 'undefined' ? `collapseIcon={${getIconSnippetWithProps(data.collapseIcon as string)}}` : ''}
    ${data.expandIcon !== 'undefined' ? `expandIcon={${getIconSnippetWithProps(data.expandIcon as string)}}` : ''}
>
    <DrawerHeader {...headerProps} />
    <DrawerBody>
        <DrawerNavGroup {...navGroupProps} />
    </DrawerBody>
</Drawer>`
        .replace(/^\s*$(?:\r\n?|\n)/gm, '')
        .replace(/(?:^|)( {4}|\t)/gm, '    ');

export const DrawerPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            height: { xs: 'calc(100vh - 105px)', sm: 'calc(100vh - 113px)' },
        }}
    >
        <Playground inputConfig={inputConfig} codeSnippet={generateSnippet} previewComponent={DrawerPreview} />
    </Box>
);
