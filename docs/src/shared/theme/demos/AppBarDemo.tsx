import React from 'react';
import { AppBar, Avatar, Tabs, Tab, IconButton, Badge, ListItemText, Toolbar, Stack } from '@mui/material';
import { Spacer } from '@brightlayer-ui/react-components';
import { Menu, Notifications, Search } from '@mui/icons-material';

/*
 * cannot iterate through variations due to the way MUI implemented text fields
 */

export const AppBarDemo: JSX.Element = (
    <Stack
        justifyContent={'center'}
        sx={{
            p: 2,
            width: '100%',
            minHeight: 400,
        }}
    >
        <AppBar position={'static'} key={'primary'} color={'primary'} sx={{ zIndex: 0 }}>
            <Toolbar sx={{ px: { xs: 2, sm: 2 } }}>
                <IconButton size={'large'} edge={'start'} color={'inherit'} sx={{ mr: 2 }}>
                    <Menu />
                </IconButton>
                <ListItemText
                    primary={'Primary'}
                    secondary={'This is the App Bar pinned to the top'}
                    secondaryTypographyProps={{ sx: { color: 'inherit' } }}
                />
                <Spacer />
                <IconButton color={'inherit'}>
                    <Search />
                </IconButton>
                <IconButton color={'inherit'} sx={{ mr: 1.5 }}>
                    <Badge badgeContent={3} color={'error'}>
                        <Notifications />
                    </Badge>
                </IconButton>
                <Avatar />
            </Toolbar>
        </AppBar>

        <AppBar position={'static'} key={'secondary'} color={'secondary'} sx={{ zIndex: 0 }}>
            <Tabs value={0}>
                <Tab value={0} label={'Secondary'} />
                <Tab value={1} label={'App Bar'} />
                <Tab value={2} label={'with Tabs'} />
            </Tabs>
        </AppBar>
    </Stack>
);
