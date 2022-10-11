import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { UserMenu } from '@brightlayer-ui/react-components';
import { Email, ExitToApp, Settings } from '@mui/icons-material';

export const ResponsiveUserMenuExample = (): JSX.Element => (
    <Box>
        <UserMenu
            avatar={<Avatar>BS</Avatar>}
            menuGroups={[
                {
                    items: [
                        {
                            title: 'Settings',
                            icon: <Settings />,
                        },

                        {
                            title: 'Contact Us',
                            icon: <Email />,
                        },
                        {
                            title: 'Log Out',
                            icon: <ExitToApp />,
                        },
                    ],
                },
            ]}
            useBottomSheetAt={100000}
        />
    </Box>
);
