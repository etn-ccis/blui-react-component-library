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
import { ThreeLiner, ThreeLinerProps } from '@brightlayer-ui/react-components';
import { removeEmptyProps } from '../../../shared';

const inputConfig: InputConfig = [
    // Required Props
    // NONE

    // Optional Props
    {
        id: 'title',
        type: 'string',
        typeLabel: 'ReactNode',
        description: 'The first line of text',
        required: false,
        initialValue: 'title',
        category: 'Optional Props',
    },
    {
        id: 'subtitle',
        type: 'string',
        typeLabel: 'ReactNode',
        description: 'The first line of text',
        required: false,
        initialValue: 'subtitle',
        category: 'Optional Props',
    },
    {
        id: 'info',
        type: 'string',
        typeLabel: 'ReactNode',
        description: 'The first line of text',
        required: false,
        initialValue: 'info',
        category: 'Optional Props',
    },

    // Other Configuration
    // NONE
];

const ThreeLinerPreview: PreviewComponent = ({ data }) => {
    const { ...rest } = data as unknown as ThreeLinerProps;
    return (
        <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: '100%' }}>
            <ThreeLiner {...removeEmptyProps(rest)} />
        </Stack>
    );
};

const generateSnippet: CodeSnippetFunction = (data) =>
    `<ThreeLiner 
    ${getPropsToString(getPropsMapping(data, inputConfig), { join: '\n\t' })}
/>`
        .replace(/^\s*$(?:\r\n?|\n)/gm, '')
        .replace(/(?:^|)( {4}|\t)/gm, '    ');

export const ThreeLinerPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            height: { xs: 'calc(100vh - 105px)', sm: 'calc(100vh - 113px)' },
        }}
    >
        <Playground inputConfig={inputConfig} codeSnippet={generateSnippet} previewComponent={ThreeLinerPreview} />
    </Box>
);
