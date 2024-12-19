import React, { useState } from 'react';
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
    DrawerNavGroup,
    DrawerRailItem,
    DrawerRailItemProps,
} from '@brightlayer-ui/react-components';
import Menu from '@mui/icons-material/Menu';
import { sharedPropsConfig } from '../../Drawer/playground/sharedPropsConfig';
import { getIconSnippetWithProps, getIcon, removeEmptyProps } from '../../../shared';
import LocationOn from '@mui/icons-material/LocationOn';
import Gavel from '@mui/icons-material/Gavel';

const inputConfig: InputConfig = [
    // Required Props
    {
        id: 'title',
        type: 'string',
        typeLabel: 'string',
        description: 'The label text',
        required: true,
        initialValue: 'Title',
        category: 'Required Props',
    },

    // Optional Props
    {
        id: 'disableRailTooltip',
        type: 'boolean',
        description: 'Sets whether to disable the tooltip on hover',
        required: false,
        initialValue: false,
        defaultValue: false,
        category: 'Optional Props',
    },
    {
        id: 'hidden',
        type: 'boolean',
        description: 'Whether to hide this rail item',
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
        description: `Status stripe color`,
        required: false,
        initialValue: '',
        category: 'Optional Props',
    },

    // Shared Props
    ...sharedPropsConfig.filter(
        (prop) =>
            ![
                'activeItemBackgroundShape',
                'chevron',
                'chevronColor',
                'collapseIcon',
                'expandIcon',
                'hidePadding',
                'disableActiveItemParentStyles',
                'nestedBackgroundColor',
                'nestedDivider',
            ].includes(prop.id)
    ),

    // Other Configuration
    {
        id: 'condensed',
        type: 'boolean',
        description: 'Show condensed rail items without text labels',
        required: false,
        initialValue: false,
        defaultValue: false,
        category: 'Drawer Props',
    },
];

const DrawerRailItemPreview: PreviewComponent = ({ data }) => {
    const { icon, condensed, ...rest } = data as unknown as Omit<DrawerRailItemProps, 'icon'> & { icon: string };
    const [activeItem, setActiveItem] = useState('Custom');

    return (
        <Stack alignItems={'center'} justifyContent={'center'} sx={{ height: '100%' }}>
            <Box>
                <Drawer open noLayout activeItem={activeItem} variant={'rail'} condensed={condensed}>
                    <DrawerHeader title="Header" icon={<Menu />} />
                    <DrawerBody sx={{ flex: '1 1 auto' }}>
                        <DrawerNavGroup>
                            <DrawerRailItem
                                itemID={'Custom'}
                                icon={getIcon(icon) as JSX.Element}
                                onClick={(): void => {
                                    setActiveItem('Custom');
                                }}
                                {...removeEmptyProps(rest)}
                                title={rest.title}
                            />
                            <DrawerRailItem
                                icon={<LocationOn />}
                                itemID={'Locations'}
                                title={'Locations'}
                                {...removeEmptyProps(rest)}
                                onClick={(): void => {
                                    setActiveItem('Locations');
                                }}
                            />
                            <DrawerRailItem
                                icon={<Gavel />}
                                itemID={'Legal'}
                                title={'Legal'}
                                {...removeEmptyProps(rest)}
                                onClick={(): void => {
                                    setActiveItem('Legal');
                                }}
                            />
                        </DrawerNavGroup>
                    </DrawerBody>
                </Drawer>
            </Box>
        </Stack>
    );
};

const generateSnippet: CodeSnippetFunction = (data) =>
    `<DrawerRailItem
    ${getPropsToString(getPropsMapping(data, inputConfig), { join: '\n\t', skip: ['icon', 'condensed'] })}
    ${data.icon !== 'undefined' ? `icon={${getIconSnippetWithProps(data.icon as string)}}` : ''}
/>`
        .replace(/^\s*$(?:\r\n?|\n)/gm, '')
        .replace(/(?:^|)( {4}|\t)/gm, '    ');

export const DrawerRailItemPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            height: { xs: 'calc(100vh - 105px)', sm: 'calc(100vh - 113px)' },
        }}
    >
        <Playground inputConfig={inputConfig} codeSnippet={generateSnippet} previewComponent={DrawerRailItemPreview} />
    </Box>
);
