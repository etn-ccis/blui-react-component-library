import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { ChannelValue, ChannelValueProps } from '@brightlayer-ui/react-components';
import {
    InputConfig,
    PreviewComponent,
    CodeSnippetFunction,
    getPropsToString,
    getPropsMapping,
    Playground,
} from '@brightlayer-ui/react-doc-components';
import { getIcon, getIconSnippetWithProps, removeEmptyProps } from '../../../shared';

const inputConfig: InputConfig = [
    // Required Props
    {
        id: 'value',
        type: 'string',
        typeLabel: `number | string`,
        description: 'The value (bold text) to display',
        required: true,
        initialValue: '123',
        category: 'Required Props',
    },
    // Optional Props
    {
        id: 'units',
        type: 'string',
        typeLabel: 'string',
        description: 'The text to display for the units (light text)',
        required: false,
        initialValue: 'hz',
        category: 'Optional Props',
    },
    {
        id: 'icon',
        type: 'select',
        typeLabel: 'JSX.Element',
        description: 'The inline icon to display',
        required: false,
        initialValue: '<TrendingUp />',
        options: [
            { label: 'undefined', value: 'undefined' },
            { label: '<TrendingUp />', value: '<TrendingUp />' },
            { label: '<TrendingDown />', value: '<TrendingDown />' },
        ],
        category: 'Optional Props',
    },
    {
        id: 'fontSize',
        type: 'number',
        typeLabel: `number | string`,
        description: 'The size of the font',
        required: false,
        initialValue: 30,
        minValue: 10,
        maxValue: 50,
        valueStep: 10,
        defaultValue: 'inherit',
        category: 'Optional Props',
    },
    {
        id: 'color',
        label: 'color',
        type: 'color',
        typeLabel: 'string',
        description: 'The color of the font',
        required: false,
        defaultValue: 'inherit',
        allowMuiColors: true,
        category: 'Optional Props',
    },
    {
        id: 'prefix',
        type: 'boolean',
        initialValue: false,
        typeLabel: 'boolean',
        description: 'Show units before the value',
        required: false,
        defaultValue: false,
        category: 'Optional Props',
    },
    {
        id: 'unitSpace',
        type: 'select',
        typeLabel: `'auto' | 'show' | 'hide'`,
        description: 'Show/Hide spacing between the value and units',
        required: false,
        initialValue: 'auto',
        options: [
            { label: 'auto', value: 'auto' },
            { label: 'hide', value: 'hide' },
            { label: 'show', value: 'show' },
        ],
        defaultValue: 'auto',
        category: 'Optional Props',
    },
    // Other Configuration
    {
        id: 'htmlColor',
        label: 'Icon Color',
        type: 'color',
        description: 'The color applied to the primary icon',
        required: false,
        initialValue: '#f33333',
        category: 'Other Configuration',
    },
];

const ChannelValuePreview: PreviewComponent = ({ data }) => {
    const { htmlColor, icon, ...rest } = data as unknown as ChannelValueProps & { htmlColor: string };

    return (
        <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: '100%' }}>
            <ChannelValue
                {...removeEmptyProps(rest)}
                value={rest.value}
                icon={getIcon(icon as unknown as string, { htmlColor: htmlColor || 'inherit' })}
            />
        </Stack>
    );
};

const generateSnippet: CodeSnippetFunction = (data) =>
    `<ChannelValue 
    ${getPropsToString(getPropsMapping(data, inputConfig), { join: '\n\t', skip: ['icon', 'htmlColor'] })}
    ${
        data.icon && data.icon !== 'undefined'
            ? `icon={${getIconSnippetWithProps(data.icon as string, {
                  fontSize: 'inherit',
                  htmlColor: data.htmlColor as string,
              })}}`
            : ''
    }
/>`.replace(/^\s*$(?:\r\n?|\n)/gm, '');

export const ChannelValuePlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            height: { xs: 'calc(100vh - 105px)', sm: 'calc(100vh - 113px)' },
        }}
    >
        <Playground inputConfig={inputConfig} codeSnippet={generateSnippet} previewComponent={ChannelValuePreview} />
    </Box>
);
