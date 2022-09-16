import React, { useState } from 'react';
import {
    DrawerLayout,
    Drawer,
    DrawerBody,
    DrawerNavGroup,
    DrawerNavItem,
    DrawerHeader,
} from '@brightlayer-ui/react-components';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Dashboard from '@mui/icons-material/Dashboard';
import Notifications from '@mui/icons-material/Notifications';
import Gavel from '@mui/icons-material/Gavel';
import Menu from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import { IconButton, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';

export const TemporaryDrawerExample = (): JSX.Element => {
    const [open, setOpen] = useState(false);
    return (
        <DrawerLayout
            drawer={
                <Drawer open={open} width={332} variant={'temporary'}>
                    <DrawerHeader
                        title="Title"
                        icon={<Close />}
                        onClick={(): void => setOpen(false)}
                        sx={{ cursor: 'pointer' }}
                    />
                    <DrawerBody>
                        <DrawerNavGroup>
                            <DrawerNavItem title="Dashboard" icon={<Dashboard />} itemID="1" />
                            <DrawerNavItem title="Locations" icon={<Notifications />} itemID="2" />
                            <DrawerNavItem title="Legal" icon={<Gavel />} itemID="3" />
                        </DrawerNavGroup>
                    </DrawerBody>
                </Drawer>
            }
            sx={{
                '& .BluiDrawerLayout-drawer': { position: 'absolute', height: 250, zIndex: 'auto' },
                '& .BluiDrawerLayout-content': { zIndex: 'auto' },
            }}
        >
            <Box sx={{ backgroundColor: (theme) => theme.palette.background.paper, height: 250 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={(): void => setOpen(true)}
                        >
                            <Menu />
                        </IconButton>
                        <Typography variant="h6">Toolbar</Typography>
                    </Toolbar>
                </AppBar>
                <Box sx={{ p: 2 }}>App Content Here. </Box>
            </Box>
        </DrawerLayout>
    );
};
