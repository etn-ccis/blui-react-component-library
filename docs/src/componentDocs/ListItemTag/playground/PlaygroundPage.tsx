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
import { ListItemTag, ListItemTagProps } from '@brightlayer-ui/react-components';
import { removeEmptyProps } from '../../../shared';

const inputConfig: InputConfig = [
    // Required Props
    {
        id: 'label',
        type: 'string',
        typeLabel: 'string',
        description: 'The label text',
        required: true,
        initialValue: 'active',
        category: 'Required Props',
    },

    // Optional Props
    {
        id: 'backgroundColor',
        type: 'color',
        typeLabel: 'string',
        description: 'Color of the label background',
        required: false,
        initialValue: '',
        category: 'Optional Props',
    },
    {
        id: 'fontColor',
        type: 'color',
        typeLabel: 'string',
        description: 'Main text color',
        required: false,
        initialValue: '',
        category: 'Optional Props',
    },

    // Other Configuration
    // NONE
];

const ListItemTagPreview: PreviewComponent = ({ data }) => {
    const { ...rest } = data as unknown as ListItemTagProps;
    return (
        <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: '100%' }}>
            <ListItemTag {...removeEmptyProps(rest)} label={rest.label} />
        </Stack>
    );
};

const generateSnippet: CodeSnippetFunction = (data) =>
    `<ListItemTag 
    ${getPropsToString(getPropsMapping(data, inputConfig), { join: '\n\t' })}
/>`.replace(/^\s*$(?:\r\n?|\n)/gm, '');

export const ListItemTagPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            height: { xs: 'calc(100vh - 105px)', sm: 'calc(100vh - 113px)' },
        }}
    >
        <Playground inputConfig={inputConfig} codeSnippet={generateSnippet} previewComponent={ListItemTagPreview} />
    </Box>
);
