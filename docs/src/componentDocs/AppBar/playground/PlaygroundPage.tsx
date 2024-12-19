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
import { AppBar, AppBarProps } from '@brightlayer-ui/react-components';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { getBodyFiller, getImage, removeEmptyProps } from '../../../shared';

const inputConfig: InputConfig = [
    // Required Props
    // NONE

    // Optional Props
    {
        id: 'animationDuration',
        type: 'number',
        initialValue: 300,
        defaultValue: 300,
        maxValue: 1000,
        minValue: 100,
        valueStep: 100,
        typeLabel: 'number',
        description: 'Length of the collapse / expand animation (ms)',
        required: false,
        category: 'Optional Props',
    },
    {
        id: 'backgroundImage',
        type: 'select',
        typeLabel: 'string',
        description: 'Image to use as the app bar background',
        initialValue: 'undefined',
        options: [
            { label: 'undefined', value: 'undefined' },
            { label: 'Farm', value: 'Farm' },
        ],
        required: false,
        category: 'Optional Props',
    },
    {
        id: 'collapsedHeight',
        type: 'number',
        typeLabel: `number | string`,
        description: 'Height of the AppBar when collapsed',
        required: false,
        initialValue: 64,
        minValue: 50,
        maxValue: 100,
        valueStep: 10,
        defaultValue: 64,
        category: 'Optional Props',
    },
    {
        id: 'expandedHeight',
        type: 'number',
        typeLabel: `number | string`,
        description: 'Height of the AppBar when expanded',
        required: false,
        initialValue: 200,
        minValue: 100,
        maxValue: 240,
        valueStep: 10,
        defaultValue: 200,
        category: 'Optional Props',
    },
    {
        id: 'scrollThreshold',
        type: 'number',
        typeLabel: `number`,
        description: 'Distance to scroll before collapsing the app bar',
        required: false,
        initialValue: 136,
        minValue: 50,
        maxValue: 400,
        valueStep: 10,
        defaultValue: 136,
        category: 'Optional Props',
    },
    {
        id: 'variant',
        type: 'select',
        typeLabel: `'collapsed' | 'expanded' | 'snap'`,
        description: 'Behavior of the App Bar',
        required: false,
        initialValue: 'snap',
        defaultValue: 'snap',
        options: ['collapsed', 'expanded', 'snap'],
        category: 'Optional Props',
    },

    // Other Configuration
    // NONE
];

const AppBarPreview: PreviewComponent = ({ data }) => {
    const { backgroundImage, ...rest } = data as unknown as AppBarProps;
    const SCROLL_CONTAINER_ID = 'BLUIAppBar-playground-scroll-container-1';
    return (
        <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: '100%' }}>
            <Box
                sx={{
                    overflow: 'hidden',
                    m: '16px 0',
                    width: '100%',
                    maxWidth: 450,
                    maxHeight: 400,
                    position: 'relative',
                }}
            >
                <AppBar
                    {...removeEmptyProps(rest)}
                    backgroundImage={getImage(backgroundImage as string)}
                    scrollContainerId={SCROLL_CONTAINER_ID}
                >
                    <Toolbar>
                        <Typography variant="h6">Title</Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    id={SCROLL_CONTAINER_ID}
                    sx={{ height: 400, overflow: 'scroll', backgroundColor: 'background.paper' }}
                >
                    {getBodyFiller()}
                </Box>
            </Box>
        </Stack>
    );
};

const generateSnippet: CodeSnippetFunction = (data) =>
    `<AppBar 
    ${getPropsToString(getPropsMapping(data, inputConfig), { join: '\n\t', skip: ['backgroundImage'] })}
    ${
        data.backgroundImage && data.backgroundImage !== 'undefined'
            ? `backgroundImage={'${getImage(data.backgroundImage as string) || ''}'}`
            : ''
    }
>
    <Toolbar>
        <Typography variant={'h6'}>Title</Typography>
    </Toolbar>
</AppBar>`
        .replace(/^\s*$(?:\r\n?|\n)/gm, '')
        .replace(/(?:^|)( {4}|\t)/gm, '    ')
        .replace(/^<AppBar(\s)+\n>/, '<AppBar>');

export const AppBarPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            height: { xs: 'calc(100vh - 105px)', sm: 'calc(100vh - 113px)' },
        }}
    >
        <Playground inputConfig={inputConfig} codeSnippet={generateSnippet} previewComponent={AppBarPreview} />
    </Box>
);
