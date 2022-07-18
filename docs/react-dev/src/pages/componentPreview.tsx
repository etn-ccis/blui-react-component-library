import React from 'react';
import { AppBar, IconButton, Toolbar, Typography, useTheme, useMediaQuery, Box } from '@mui/material';
import Menu from '@mui/icons-material/Menu';
import { useDrawer } from '../contexts/drawerContextProvider';
import TabPanel from './tabPanel';

export const ComponentPreview = (): JSX.Element => {
    const theme = useTheme();
    // const classes = useStyles(theme);
    const { setDrawerOpen } = useDrawer();
    const md = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <AppBar position={'sticky'}>
                <Toolbar sx={{pl: 2, pr: 2}}>
                    {md ? null : (
                        <IconButton
                            color={'inherit'}
                            onClick={(): void => {
                                setDrawerOpen(true);
                            }}
                            edge={'start'}
                            style={{ marginRight: theme.spacing(3) }}
                            size="large"
                        >
                            <Menu />
                        </IconButton>
                    )}
                    <Typography variant={'h6'} color={'inherit'}>
                        Component Preview
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box>
                <TabPanel />
            </Box>
        </div>
    );
};
