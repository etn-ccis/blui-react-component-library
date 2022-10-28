import React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Menu } from '@mui/icons-material';
import { AppBar, ToolbarMenu } from '@brightlayer-ui/react-components';
import ListItemText from '@mui/material/ListItemText';
import * as colors from '@brightlayer-ui/colors';
import { Typography } from '@mui/material';
import { ExampleShowcase } from '../../../shared';

export const ToolbarMenuWithinToolbarExample = (): JSX.Element => (
    <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box>
            <AppBar
                variant="collapsed"
                sx={{
                    width: 300,
                    zIndex: 'auto',
                }}
            >
                <Toolbar>
                    <IconButton sx={{ mr: 3 }} color="inherit" edge="start">
                        <Menu />
                    </IconButton>
                    <ListItemText
                        primary={<Typography variant="h6">Title</Typography>}
                        secondary={
                            <ToolbarMenu
                                sx={{ color: colors.white[50], mt: -1 }}
                                label="Subtitle"
                                menuGroups={[
                                    {
                                        items: [
                                            { title: 'Menu Item 1' },
                                            { title: 'Menu Item 2' },
                                            { title: 'Menu Item 3' },
                                        ],
                                    },
                                ]}
                            />
                        }
                    />
                </Toolbar>
            </AppBar>
        </Box>
    </ExampleShowcase>
);
