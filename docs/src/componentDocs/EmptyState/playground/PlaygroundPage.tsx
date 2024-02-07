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
import { EmptyState, EmptyStateProps } from '@brightlayer-ui/react-components';
import Add from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { getIcon, getIconSnippetWithProps, removeEmptyProps } from '../../../shared';

const inputConfig: InputConfig = [
    // Required Props
    {
        id: 'icon',
        type: 'select',
        typeLabel: 'ReactNode',
        description: 'The primary icon',
        initialValue: '<Devices />',
        options: ['<Devices />', '<Router />', '<SensorsOff />'],
        required: true,
        category: 'Required Props',
    },
    {
        id: 'title',
        type: 'string',
        typeLabel: 'ReactNode',
        description: 'The main text to display',
        required: true,
        initialValue: 'No Devices',
        category: 'Required Props',
    },

    // Optional Props
    {
        id: 'description',
        type: 'string',
        typeLabel: 'ReactNode',
        description: 'The secondary text to display',
        required: false,
        initialValue: 'Check your network connection',
        category: 'Optional Props',
    },

    // Other Configuration
    {
        id: 'showAction',
        label: 'Show Actions',
        type: 'boolean',
        description: 'Whether to show action section or not',
        required: false,
        initialValue: false,
        category: 'Other Configuration',
    },
];

const EmptyStatePreview: PreviewComponent = ({ data }) => {
    const { icon, showAction, ...rest } = data as unknown as EmptyStateProps & { showAction?: boolean };

    return (
        <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: '100%' }}>
            <EmptyState
                {...removeEmptyProps(rest)}
                title={rest.title}
                icon={getIcon(icon as unknown as string, { fontSize: 'inherit' })}
                actions={
                    showAction ? (
                        <Button variant={'outlined'} color={'primary'} startIcon={<Add />}>
                            {'Add Device'}
                        </Button>
                    ) : undefined
                }
            />
        </Stack>
    );
};

const generateSnippet: CodeSnippetFunction = (data) =>
    `<EmptyState 
    ${getPropsToString(getPropsMapping(data, inputConfig), { join: '\n\t', skip: ['icon', 'showAction'] })}
    ${
        data.icon && data.icon !== 'undefined'
            ? `icon={${getIconSnippetWithProps(data.icon as string, { fontSize: 'inherit' })}}`
            : ''
    }
    ${
        data.showAction
            ? `actions={
        <Button variant={'outlined'} color={'primary'} startIcon={<AddIcon />}>
            {'Add Device'}
        </Button>
    }`
            : ''
    }
/>`
        .replace(/^\s*$(?:\r\n?|\n)/gm, '')
        .replace(/(?:^|)( {4}|\t)/gm, '    ');

export const EmptyStatePlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            height: { xs: 'calc(100vh - 105px)', sm: 'calc(100vh - 113px)' },
        }}
    >
        <Playground inputConfig={inputConfig} codeSnippet={generateSnippet} previewComponent={EmptyStatePreview} />
    </Box>
);
