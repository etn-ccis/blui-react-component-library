import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { UserMenu } from '@brightlayer-ui/react-components';
import { Settings } from '@mui/icons-material';

export const UserMenuWithMenuHeaderExample = (): JSX.Element => (
    <Box>
        <UserMenu
            avatar={<Avatar>MH</Avatar>}
            menuGroups={[
                {
                    items: [
                        {
                            title: 'Settings',
                            icon: <Settings />,
                        },
                    ],
                },
            ]}
            menuTitle="Sample Title"
            menuSubtitle="Sample Subtitle"
        />
    </Box>
);
