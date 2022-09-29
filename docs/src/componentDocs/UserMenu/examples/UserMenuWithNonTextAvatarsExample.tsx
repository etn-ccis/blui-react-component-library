import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { UserMenu } from '@brightlayer-ui/react-components';
import { Pets, Settings } from '@mui/icons-material';
const tRex = require('../images/trex.png');

export const UserMenuWithNonTextAvatarsExample = (): JSX.Element => (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: 150 }}>
        <UserMenu
            avatar={<Avatar src={tRex} alt={'User Avatar'} />}
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
        <UserMenu
            avatar={
                <Avatar>
                    <Pets />
                </Avatar>
            }
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
