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
                        disableTypography
                        primary={<Typography variant="h6">Alarms</Typography>}
                        secondary={
                            <ToolbarMenu
                                sx={{ color: colors.white[50], mt: -1 }}
                                label="Location"
                                menuGroups={[
                                    {
                                        items: [
                                            { title: 'Location 1' },
                                            { title: 'Location 2' },
                                            { title: 'Location 3' },
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
