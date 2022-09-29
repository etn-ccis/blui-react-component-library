import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { UserMenu } from '@brightlayer-ui/react-components';
import { Settings } from '@mui/icons-material';

export const BasicUserMenuExample = (): JSX.Element => (
    <Box>
        <UserMenu
            avatar={<Avatar>AV</Avatar>}
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
        />
    </Box>
);
