import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { UserMenu } from '@brightlayer-ui/react-components';
import { Email, ExitToApp, Settings } from '@mui/icons-material';
import { ExampleShowcase } from '../../../shared';

export const UserMenuWithBottomSheetExample = (): JSX.Element => (
    <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center' }}>
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
    </ExampleShowcase>
);
