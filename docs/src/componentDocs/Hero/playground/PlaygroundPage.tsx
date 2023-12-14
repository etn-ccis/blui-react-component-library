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
import { ChannelValueProps, Hero, HeroProps } from '@brightlayer-ui/react-components';
import { getIcon, getIconSnippetWithProps } from '../../../shared';

const inputConfig: InputConfig = [
    // Required Props
    {
        id: 'icon',
        type: 'select',
        typeLabel: 'ReactNode',
        description: 'The primary icon',
        initialValue: '<Fan />',
        options: ['<Fan />', '<FanCircled />'],
        required: true,
        category: 'Required Props',
    },
    {
        id: 'label',
        type: 'string',
        typeLabel: 'string',
        description: 'The text shown below the Channel Value',
        required: true,
        initialValue: 'Velocity',
        category: 'Required Props',
    },

    // Optional Props
    {
        id: 'iconBackgroundColor',
        type: 'color',
        typeLabel: 'string',
        description: 'The color used behind the primary icon',
        required: false,
        initialValue: '',
        defaultValue: 'transparent',
        category: 'Optional Props',
    },
    {
        id: 'iconSize',
        type: 'number',
        typeLabel: `number | string`,
        description: 'The size of the primary icon (min 10px)',
        required: false,
        initialValue: 36,
        minValue: 10,
        maxValue: 100,
        valueStep: 1,
        defaultValue: 36,
        category: 'Optional Props',
    },

    // ChannelValueProps
    {
        id: 'value',
        type: 'string',
        typeLabel: `number | string`,
        description: 'The value (bold text) to display',
        required: true,
        initialValue: '123',
        category: 'ChannelValue Props',
    },
    {
        id: 'units',
        type: 'string',
        typeLabel: 'string',
        description: 'The text to display for the units (light text)',
        required: false,
        initialValue: 'hz',
        category: 'ChannelValue Props',
    },
    {
        id: 'valueIcon',
        label: 'icon',
        type: 'select',
        typeLabel: 'JSX.Element',
        description: 'The inline icon to display',
        required: false,
        initialValue: '<TrendingUp />',
        options: ['undefined', '<TrendingUp />', '<TrendingDown />'],
        category: 'ChannelValue Props',
    },

    // Other Configuration
    {
        id: 'htmlColor',
        label: 'Icon Color',
        type: 'color',
        description: 'The color applied to the primary icon',
        required: false,
        initialValue: '',
        category: 'Other Configuration',
    },
];

const HeroPreview: PreviewComponent = ({ data }) => {
    const {
        icon,
        htmlColor,
        value: channelValue,
        units,
        valueIcon,
        ...rest
    } = data as unknown as HeroProps & { htmlColor: string; valueIcon: string } & Pick<
            ChannelValueProps,
            'value' | 'units'
        >;

    return (
        <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: '100%' }}>
            <Box>
                <Hero
                    {...rest}
                    icon={getIcon(icon as unknown as string, {
                        fontSize: 'inherit',
                        htmlColor: htmlColor || 'inherit',
                    })}
                    ChannelValueProps={{
                        value: channelValue,
                        units,
                        icon: getIcon(valueIcon, { fontSize: 'inherit' }),
                    }}
                />
            </Box>
        </Stack>
    );
};

const generateSnippet: CodeSnippetFunction = (data) =>
    `<Hero 
    ${getPropsToString(getPropsMapping(data, inputConfig), {
        join: '\n\t',
        skip: ['icon', 'htmlColor', 'value', 'units', 'valueIcon'],
    })}
    ${
        data.icon && data.icon !== 'undefined'
            ? `icon={${getIconSnippetWithProps(data.icon as string, {
                  fontSize: 'inherit',
                  htmlColor: data.htmlColor as string,
              })}`
            : ''
    }
    ChannelValueProps={{
        ${getPropsToString(getPropsMapping(data, inputConfig), {
            join: '\n\t\t',
            format: 'object',
            skip: ['icon', 'label', 'iconBackgroundColor', 'iconSize', 'htmlColor', 'valueIcon'],
        })}
        ${
            data.valueIcon && data.valueIcon !== 'undefined'
                ? `icon: ${getIconSnippetWithProps(data.valueIcon as string, { fontSize: 'inherit' })},`
                : ''
        }
    }}
/>`.replace(/^\s*$(?:\r\n?|\n)/gm, '');

export const HeroPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            height: { xs: 'calc(100vh - 105px)', sm: 'calc(100vh - 113px)' },
        }}
    >
        <Playground inputConfig={inputConfig} codeSnippet={generateSnippet} previewComponent={HeroPreview} />
    </Box>
);
