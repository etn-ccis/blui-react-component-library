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
    DrawerHeaderProps,
    DrawerNavGroup,
    DrawerNavItem,
} from '@brightlayer-ui/react-components';
import NotificationsActive from '@mui/icons-material/NotificationsActive';
import Person from '@mui/icons-material/Person';
import Today from '@mui/icons-material/Today';
import Accessibility from '@mui/icons-material/Accessibility';
import { getIcon, getIconSnippetWithProps, getImage } from '../../../shared';

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
        id: 'backgroundImage',
        type: 'select',
        typeLabel: `string`,
        description: 'An image to display in the header',
        initialValue: 'undefined',
        defaultValue: 'undefined',
        options: ['undefined', 'pattern', 'farm'],
        required: false,
        category: 'Optional Props',
    },
    {
        id: 'backgroundOpacity',
        type: 'number',
        typeLabel: `number`,
        description: 'The opacity of the background image',
        required: false,
        initialValue: 0.3,
        minValue: 0,
        maxValue: 1,
        valueStep: 0.1,
        defaultValue: 0.3,
        category: 'Optional Props',
    },
    {
        id: 'divider',
        type: 'boolean',
        description: 'Optional divider which appears beneath the header',
        required: false,
        initialValue: false,
        defaultValue: false,
        category: 'Optional Props',
    },
    {
        id: 'fontColor',
        type: 'color',
        typeLabel: 'string',
        description: 'The color of the text elements',
        required: false,
        initialValue: '',
        category: 'Optional Props',
    },
    {
        id: 'icon',
        type: 'select',
        typeLabel: 'JSX.Element',
        description: 'A component to render for the icon',
        initialValue: '<Menu />',
        options: ['undefined', '<Menu />', '<ArrowBack />'],
        required: false,
        category: 'Optional Props',
    },
    {
        id: 'subtitle',
        type: 'string',
        typeLabel: `string`,
        description: 'The text to show on the second line',
        required: false,
        initialValue: 'Organize your menu items here',
        category: 'Optional Props',
    },
    {
        id: 'title',
        type: 'string',
        typeLabel: `string`,
        description: 'The text to show on the first line',
        required: false,
        initialValue: 'Brightlayer UI Drawer',
        category: 'Optional Props',
    },

    // Other Configuration
    // NONE
];

const DrawerHeaderPreview: PreviewComponent = ({ data }) => {
    const { icon, backgroundImage, ...rest } = data as unknown as DrawerHeaderProps;

    return (
        <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: '100%' }}>
            <Drawer noLayout open={true} sx={{ minHeight: 'unset' }}>
                <DrawerHeader
                    {...rest}
                    icon={getIcon(icon as string)}
                    backgroundImage={getImage(backgroundImage as string)}
                ></DrawerHeader>
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
            </Drawer>
        </Stack>
    );
};

const generateSnippet: CodeSnippetFunction = (data) =>
    `<DrawerHeader 
    ${getPropsToString(getPropsMapping(data, inputConfig), { join: '\n\t', skip: ['icon', 'backgroundImage'] })}
    ${data.icon && data.icon !== 'undefined' ? `icon={${getIconSnippetWithProps(data.icon as string)}}` : ''}
    ${data.backgroundImage !== 'undefined' ? `backgroundImage={'../images/${data.backgroundImage as string}.png'}` : ''}
/>`.replace(/^\s*$(?:\r\n?|\n)/gm, '');

export const DrawerHeaderPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            height: { xs: 'calc(100vh - 105px)', sm: 'calc(100vh - 113px)' },
        }}
    >
        <Playground inputConfig={inputConfig} codeSnippet={generateSnippet} previewComponent={DrawerHeaderPreview} />
    </Box>
);
