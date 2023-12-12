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
import { UserMenu, UserMenuProps } from '@brightlayer-ui/react-components';
import Avatar from '@mui/material/Avatar';
import trex from '../images/trex.png';
import Email from '@mui/icons-material/Email';
import ExitToApp from '@mui/icons-material/ExitToApp';
import Settings from '@mui/icons-material/Settings';

const inputConfig: InputConfig = [
    // Required Props
    // NONE

    // Optional Props
    {
        id: 'menuTitle',
        type: 'string',
        typeLabel: 'string',
        description: 'Title shown when menu is open',
        required: false,
        initialValue: 'Menu Title',
        category: 'Optional Props',
    },
    {
        id: 'menuSubtitle',
        type: 'string',
        typeLabel: 'string',
        description: 'Subtitle shown when menu is open',
        required: false,
        initialValue: 'Menu Subtitle',
        category: 'Optional Props',
    },
    {
        id: 'useBottomSheetAt',
        type: 'number',
        typeLabel: `number`,
        description:
            'Window pixel width at which the responsive bottom sheet menu is triggered (set to 0 to disable responsive behavior)',
        required: false,
        initialValue: 600,
        minValue: 0,
        maxValue: 1000,
        valueStep: 50,
        defaultValue: 600,
        category: 'Optional Props',
    },

    // Other Configuration
    {
        id: 'imageAvatar',
        label: 'Image Avatar',
        type: 'boolean',
        description: 'Use image avatar instead of text',
        required: false,
        initialValue: false,
        category: 'Other Configuration',
    },
];

const UserMenuPreview: PreviewComponent = ({ data }) => {
    const { imageAvatar, ...rest } = data as unknown as UserMenuProps & { imageAvatar: boolean };

    return (
        <Stack alignItems={'center'} justifyContent={'center'} sx={{ width: '100%', height: '100%' }}>
            <UserMenu
                {...rest}
                avatar={imageAvatar ? <Avatar src={trex} alt={'User Avatar'} /> : <Avatar>AB</Avatar>}
                menuGroups={[
                    {
                        items: [
                            {
                                title: 'Settings',
                                icon: <Settings />,
                                onClick: (): void => {},
                            },
                            {
                                title: 'Contact Us',
                                icon: <Email />,
                                onClick: (): void => {},
                            },
                            {
                                title: 'Log Out',
                                icon: <ExitToApp />,
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
    `<UserMenu 
    ${getPropsToString(getPropsMapping(data, inputConfig), { join: '\n\t', skip: ['imageAvatar'] })}
    avatar={${data.imageAvatar ? `<Avatar src={'../images/trex.png'} alt={'User Avatar'} />` : '<Avatar>AB</Avatar>'}}
    menuGroups={[
        {
            items: [
                {
                    title: "Settings",
                    icon: <Settings />,
                    onClick: (): void => { },
                },
                {
                    title: "Contact Us",
                    icon: <Email />,
                    onClick: (): void => { },
                },
                {
                    title: "Log Out",
                    icon: <ExitToApp />,
                    onClick: (): void => { },
                },
            ],
        },
    ]}
/>`.replace(/^\s*$(?:\r\n?|\n)/gm, '');

export const UserMenuPlaygroundComponent = (): JSX.Element => (
    <Box
        sx={{
            width: '100%',
            height: { xs: 'calc(100vh - 105px)', sm: 'calc(100vh - 113px)' },
        }}
    >
        <Playground inputConfig={inputConfig} codeSnippet={generateSnippet} previewComponent={UserMenuPreview} />
    </Box>
);
