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
import { ToolbarMenu, ToolbarMenuProps } from '@brightlayer-ui/react-components';
import Home from '@mui/icons-material/Home';
import Place from '@mui/icons-material/Place';

const inputConfig: InputConfig = [
    // Required Props
    {
        id: 'label',
        type: 'string',
        typeLabel: 'ReactNode',
        description: 'Custom content for label text / icon + label',
        required: true,
        initialValue: 'Subtitle',
        category: 'Required Props',
    },

    // Optional Props
    {
        id: 'icon',
        type: 'select',
        typeLabel: 'JSX.Element',
        description: 'A component to render for the icon',
        initialValue: 'undefined',
        options: ['undefined', '<Home />', '<Place />'],
        required: false,
        category: 'Optional Props',
    },

    // Other Configuration
    // NONE
];

const ToolbarMenuPreview: PreviewComponent = ({ data }) => {
    const { icon, ...rest } = data as unknown as ToolbarMenuProps;

    const getIcon = (value: string): JSX.Element | undefined => {
        switch (value) {
            case '<Home />':
                return <Home />;
            case '<Place />':
                return <Place />;
            case 'undefined':
            default:
                return undefined;
        }
    };
    return (
        <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: '100%' }}>
            <ToolbarMenu
                {...rest}
                icon={getIcon(icon as unknown as string)}
                menuGroups={[
                    {
                        items: [
                            {
                                title: 'Menu Item 1',
                                onClick: (): void => {},
                            },
                            {
                                title: 'Menu Item 2',
                                onClick: (): void => {},
                            },
                            {
                                title: 'Menu Item 3',
                                onClick: (): void => {},
                            },
                        ],
                    },
                ]}
            />
        </Stack>
    );
};

const generateSnippet: CodeSnippetFunction = (data) =>
    `<ToolbarMenu 
    ${getPropsToString(getPropsMapping(data, inputConfig), { join: '\n\t', skip: ['icon'] })}
    ${data.icon && data.icon !== 'undefined' ? `icon={${data.icon as string}}` : ''}
    menuGroups={[{
        items: [
            {
                title: 'Menu Item 1',
                onClick: (): void => { },
            },
            {
                title: 'Menu Item 2',
                onClick: (): void => { },
            },
            {
                title: 'Menu Item 3',
                onClick: (): void => { },
            },
        ],
    }]}
/>`.replace(/^\s*$(?:\r\n?|\n)/gm, '');

export const ToolbarMenuPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            height: { xs: 'calc(100vh - 105px)', sm: 'calc(100vh - 113px)' },
        }}
    >
        <Playground inputConfig={inputConfig} codeSnippet={generateSnippet} previewComponent={ToolbarMenuPreview} />
    </Box>
);
