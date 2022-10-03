import React, { useState, useRef } from 'react';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem, DrawerHeader } from '@brightlayer-ui/react-components';
import Dashboard from '@mui/icons-material/Dashboard';
import Notifications from '@mui/icons-material/Notifications';
import Gavel from '@mui/icons-material/Gavel';
import { Close } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Menu from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import { IconButton, Toolbar } from '@mui/material';
import * as colors from '@brightlayer-ui/colors';

export const TemporaryDrawerExample = (): JSX.Element => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);

    return (
        <Box
            sx={{
                m: '16px 0',
                backgroundColor: colors.white[600],
                p: 4,
                minHeight: 250,
                position: 'relative',
                overflow: 'hidden',
            }}
            ref={containerRef}
        >
            <Drawer
                open={open}
                width={250}
                variant="temporary"
                noLayout
                disablePortal
                SlideProps={{
                    container: containerRef.current,
                }}
                BackdropProps={{
                    sx: { position: 'absolute' },
                }}
                sx={{ position: 'absolute', minWidth: '100%' }}
            >
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
            <AppBar position="static" sx={{ width: 75, mx: 'auto' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={(): void => setOpen(true)}
                    >
                        <Menu />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
