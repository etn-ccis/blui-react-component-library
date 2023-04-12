import React, { useState, useRef } from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerNavGroup,
    DrawerNavItem,
    DrawerHeader,
    DrawerLayout,
} from '@brightlayer-ui/react-components';
import { Close } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Menu from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ExampleShowcase } from '../../../shared';
import { useTheme } from '@mui/material/styles';

export const TemporaryDrawerExample = (): JSX.Element => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);
    const theme = useTheme();

    return (
        <ExampleShowcase
            sx={{
                minHeight: 250,
                position: 'relative',
                overflow: 'hidden',
            }}
            ref={containerRef}
        >
            <DrawerLayout
                drawer={
                    <Drawer
                        open={open}
                        width={250}
                        variant="temporary"
                        onClick={(): void => setOpen(false)}
                        noLayout
                        disablePortal
                        disableScrollLock
                        disableAutoFocus
                        disableRestoreFocus
                        SlideProps={{
                            container: containerRef.current,
                        }}
                        BackdropProps={{
                            sx: { position: 'absolute' },
                        }}
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
                                <DrawerNavItem
                                    title="Dashboard"
                                    itemID="1"
                                    hidePadding
                                    onClick={(): void => setOpen(false)}
                                />
                                <DrawerNavItem
                                    title="Locations"
                                    itemID="2"
                                    hidePadding
                                    onClick={(): void => setOpen(false)}
                                />
                                <DrawerNavItem
                                    title="Legal"
                                    itemID="3"
                                    hidePadding
                                    onClick={(): void => setOpen(false)}
                                />
                            </DrawerNavGroup>
                        </DrawerBody>
                    </Drawer>
                }
                sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    '& .BluiDrawerLayout-drawer': {
                        position: 'absolute',
                        height: 250,
                        zIndex: open ? theme.zIndex.appBar - 1 : 'auto',
                        width: '100%',
                    },
                }}
            >
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
            </DrawerLayout>
        </ExampleShowcase>
    );
};
