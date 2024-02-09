import React from 'react';
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
    DrawerFooter,
    DrawerFooterProps,
    DrawerNavGroup,
    DrawerNavItem,
} from '@brightlayer-ui/react-components';
import Menu from '@mui/icons-material/Menu';
import NotificationsActive from '@mui/icons-material/NotificationsActive';
import Person from '@mui/icons-material/Person';
import Today from '@mui/icons-material/Today';
import Accessibility from '@mui/icons-material/Accessibility';
import { removeEmptyProps } from '../../../shared';

const inputConfig: InputConfig = [
    // Required Props
    // NONE

    // Optional Props
    {
        id: 'backgroundColor',
        type: 'color',
        typeLabel: 'string',
        description: 'The color used for the background',
        required: false,
        initialValue: '',
        category: 'Optional Props',
    },
    {
        id: 'divider',
        type: 'boolean',
        description: 'Optional divider which appears above the Footer',
        required: false,
        initialValue: true,
        defaultValue: true,
        category: 'Optional Props',
    },
    {
        id: 'hideContentOnCollapse',
        type: 'boolean',
        description: 'Hide footer contents when drawer is closed',
        required: false,
        initialValue: true,
        defaultValue: true,
        category: 'Optional Props',
    },

    // Other Configuration
    {
        id: 'open',
        label: 'Drawer Open',
        type: 'boolean',
        description: 'Is the drawer open',
        required: false,
        initialValue: true,
        category: 'Other Configuration',
    },
];

const DrawerFooterPreview: PreviewComponent = ({ data }) => {
    const { open, ...rest } = data as unknown as DrawerFooterProps & { open: boolean };

    return (
        <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: '100%' }}>
            <Drawer noLayout open={open} sx={{ minHeight: 'unset' }}>
                <DrawerHeader icon={<Menu />} title={'Footer Demo'} subtitle={'See the DrawerFooter below'} />
                <DrawerBody sx={{ flex: '1 1 auto' }}>
                    <DrawerNavGroup>
                        <DrawerNavItem icon={<Person />} itemID={'Identity Management'} title={'Identity Management'} />
                        <DrawerNavItem icon={<Today />} itemID={'Calendar'} title={'Calendar'} />
                        <DrawerNavItem icon={<Accessibility />} title={'Accessibility'} itemID={'Accessibility'} />
                        <DrawerNavItem
                            icon={<NotificationsActive />}
                            title={'Notifications'}
                            itemID={'Notifications'}
                        />
                    </DrawerNavGroup>
                </DrawerBody>
                <DrawerFooter {...removeEmptyProps(rest)}>
                    <Box sx={{ p: 2 }}>Footer Content Here</Box>
                </DrawerFooter>
            </Drawer>
        </Stack>
    );
};

const generateSnippet: CodeSnippetFunction = (data) =>
    `<DrawerFooter 
    ${getPropsToString(getPropsMapping(data, inputConfig), { join: '\n\t', skip: ['open'] })}
>
    <Box sx={{ p: 2 }}>Footer Content Here</Box>
</DrawerFooter>`
        .replace(/^\s*$(?:\r\n?|\n)/gm, '')
        .replace(/^<DrawerFooter(\s)+\n>/, '<DrawerFooter>')
        .replace(/(?:^|)( {4}|\t)/gm, '    ');

export const DrawerFooterPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            height: { xs: 'calc(100vh - 105px)', sm: 'calc(100vh - 113px)' },
        }}
    >
        <Playground inputConfig={inputConfig} codeSnippet={generateSnippet} previewComponent={DrawerFooterPreview} />
    </Box>
);
