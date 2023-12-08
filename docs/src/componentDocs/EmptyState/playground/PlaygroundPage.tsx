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
import { Add, Devices, Router, SensorsOff } from '@mui/icons-material';
import Button from '@mui/material/Button';

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

    const getIcon = (value: string): JSX.Element | undefined => {
        switch (value) {
            case '<SensorsOff />':
                return <SensorsOff fontSize={'inherit'} />;
            case '<Router />':
                return <Router fontSize={'inherit'} />;
            case '<Devices>':
            default:
                return <Devices fontSize={'inherit'} />;
        }
    };
    return (
        <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: '100%' }}>
            <EmptyState
                {...rest}
                icon={getIcon(icon as unknown as string)}
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
            ? `icon={${(data.icon as string).replace('/>', '')}fontSize={'inherit'} />}`
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
/>`.replace(/^\s*$(?:\r\n?|\n)/gm, '');

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
