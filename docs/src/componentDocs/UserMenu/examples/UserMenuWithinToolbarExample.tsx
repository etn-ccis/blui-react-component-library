import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { Spacer, UserMenu } from '@brightlayer-ui/react-components';
import { Email, ExitToApp, Settings } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const UserMenuWithinToolbarExample = (): JSX.Element => (
    <Box sx={{ width: 300 }}>
        <AppBar position={'relative'} color={'primary'}>
            <Toolbar sx={{ px: 2, minHeight: 'unset', height: '4rem' }}>
                <Typography variant={'h6'}>Toolbar Title</Typography>
                <Spacer flex={1} />
                <UserMenu
                    avatar={<Avatar />}
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
                                    divider: true,
                                },
                                {
                                    itemID: '4',
                                    title: 'v1.03.54',
                                    hidePadding: true,
                                    sx: {
                                        '& .BluiInfoListItem-root': {
                                            height: 40,
                                        },
                                        '& .BluiInfoListItem-title': {
                                            fontSize: 12,
                                        },
                                    },
                                },
                            ],
                        },
                    ]}
                    menuTitle={'Jane Doe'}
                    menuSubtitle={'Account Manager'}
                />
            </Toolbar>
        </AppBar>
        <Box
            sx={{
                height: 90,
                backgroundColor: 'background.paper',
                p: 2,
            }}
        >
            <Typography variant={'body1'}>Body Content Goes Here</Typography>
        </Box>
    </Box>
);
