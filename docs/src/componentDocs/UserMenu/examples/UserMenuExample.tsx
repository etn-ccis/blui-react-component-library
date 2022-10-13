import React from 'react';
import Avatar from '@mui/material/Avatar';
import { Spacer, UserMenu } from '@brightlayer-ui/react-components';
import { ExitToApp } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const UserMenuExample = (): JSX.Element => (
    <AppBar position="relative" color="primary" sx={{ width: 300 }}>
        <Toolbar sx={{ px: 2, minHeight: 'unset', height: '4rem' }}>
            <Typography variant="h6">Toolbar Title</Typography>
            <Spacer />
            <UserMenu
                avatar={<Avatar>AV</Avatar>}
                menuGroups={[
                    {
                        items: [
                            {
                                title: 'Log Out',
                                icon: <ExitToApp />,
                            },
                        ],
                    },
                ]}
            />
        </Toolbar>
    </AppBar>
);
