import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { UserMenu } from '@brightlayer-ui/react-components';
import { Settings } from '@mui/icons-material';

export const UserMenuWithPlacementOptionsExample = (): JSX.Element => (
    <Box>
        <UserMenu
            avatar={<Avatar>PO</Avatar>}
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
            MenuProps={{
                anchorOrigin: { horizontal: 'left', vertical: 'bottom' },
                transformOrigin: { horizontal: 'left', vertical: 'top' },
            }}
        />
    </Box>
);
