import React, { useState, useRef } from 'react';
import { Drawer, DrawerBody, DrawerNavGroup, DrawerNavItem, DrawerHeader } from '@brightlayer-ui/react-components';
import { Close } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Menu from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import { IconButton, Toolbar, Typography } from '@mui/material';
import * as colors from '@brightlayer-ui/colors';

export const TemporaryDrawerExample = (): JSX.Element => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);

    return (
        <Box
            sx={{
                m: '16px 0',
                backgroundColor: colors.white[600],
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
                PaperProps={{ elevation: 2 }}
                sx={{
                    position: 'absolute',
                    minWidth: '100%',
                    '& .MuiPaper-root': { background: 'transparent' },
                    '& .BluiDrawer-content': { backgroundColor: 'background.paper' },
                }}
            >
                <DrawerHeader
                    title="Title"
                    icon={<Close />}
                    onClick={(): void => setOpen(false)}
                    sx={{ cursor: 'pointer' }}
                />
                <DrawerBody>
                    <DrawerNavGroup>
                        <DrawerNavItem title="Dashboard" itemID="1" hidePadding />
                        <DrawerNavItem title="Locations" itemID="2" hidePadding />
                        <DrawerNavItem title="Legal" itemID="3" hidePadding />
                    </DrawerNavGroup>
                </DrawerBody>
            </Drawer>
            <Box sx={{ backgroundColor: 'background.paper', height: 250 }}>
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
        </Box>
    );
};
