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
import { DrawerNavItem, DrawerNavItemProps } from '@brightlayer-ui/react-components';
import { sharedPropsConfig } from '../../Drawer/playground/sharedPropsConfig';
import { getIcon, getIconSnippetWithProps, removeEmptyProps } from '../../../shared';
import * as Colors from '@brightlayer-ui/colors';

const inputConfig: InputConfig = [
    // Required Props
    {
        id: 'title',
        type: 'string',
        typeLabel: 'string',
        description: 'Text to show on the first line',
        required: true,
        initialValue: 'Title',
        category: 'Required Props',
    },

    // Optional Props
    {
        id: 'subtitle',
        type: 'string',
        typeLabel: 'string',
        description: 'Text to sho on the second line',
        required: false,
        initialValue: 'Subtitle',
        category: 'Optional Props',
    },
    {
        id: 'hidden',
        type: 'boolean',
        description: 'Whether to hide this nav item',
        required: false,
        initialValue: false,
        defaultValue: false,
        category: 'Optional Props',
    },
    {
        id: 'icon',
        type: 'select',
        typeLabel: 'JSX.Element',
        description: 'The icon to display on the left',
        required: false,
        initialValue: '<Home />',
        options: ['undefined', '<Home />', '<Place />'],
        category: 'Optional Props',
    },
    {
        id: 'statusColor',
        type: 'color',
        typeLabel: 'string',
        description: `Status stripe and icon color`,
        required: false,
        initialValue: Colors.blue[500],
        category: 'Optional Props',
    },

    // Shared Props
    ...sharedPropsConfig,

    // Other Configuration
    // NONE
];

const DrawerNavItemPreview: PreviewComponent = ({ data }) => {
    const { expandIcon, collapseIcon, icon, ...rest } = data as unknown as Omit<
        DrawerNavItemProps,
        'collapseIcon' | 'expandIcon' | 'icon'
    > & { collapseIcon: string; expandIcon: string; icon: string };

    return (
        <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: '100%' }}>
            <Box sx={{ width: '100%', maxWidth: 300, backgroundColor: 'background.paper' }}>
                <DrawerNavItem
                    itemID={'item'}
                    icon={getIcon(icon)}
                    collapseIcon={getIcon(collapseIcon)}
                    expandIcon={getIcon(expandIcon)}
                    {...removeEmptyProps(rest)}
                    title={rest.title}
                />
            </Box>
        </Stack>
    );
};

const generateSnippet: CodeSnippetFunction = (data) =>
    `<DrawerNavItem
    itemID={itemID}
    ${getPropsToString(getPropsMapping(data, inputConfig), {
        join: '\n\t',
        skip: ['collapseIcon', 'expandIcon', 'icon'],
    })}
    ${data.icon !== 'undefined' ? `icon={${getIconSnippetWithProps(data.icon as string)}}` : ''}
    ${data.collapseIcon !== 'undefined' ? `collapseIcon={${getIconSnippetWithProps(data.collapseIcon as string)}}` : ''}
    ${data.expandIcon !== 'undefined' ? `expandIcon={${getIconSnippetWithProps(data.expandIcon as string)}}` : ''}
/>`
        .replace(/^\s*$(?:\r\n?|\n)/gm, '')
        .replace(/(?:^|)( {4}|\t)/gm, '    ');

export const DrawerNavItemPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            height: { xs: 'calc(100vh - 105px)', sm: 'calc(100vh - 113px)' },
        }}
    >
        <Playground inputConfig={inputConfig} codeSnippet={generateSnippet} previewComponent={DrawerNavItemPreview} />
    </Box>
);
