import React from 'react';
import { AppBar } from '@brightlayer-ui/react-components';
import { getBodyFiller, ExampleShowcase } from '../../../shared';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const AppBarExample = (): JSX.Element => (
    <ExampleShowcase sx={{ overflow: 'hidden' }}>
        <Box sx={{ mb: 2, overflow: 'hidden', height: 400 }}>
            <AppBar
                variant="snap"
                scrollContainerId={'appbarBodyFiller1'}
                position="sticky"
                sx={{ width: 450, mx: 'auto', zIndex: 'auto' }}
            >
                <Toolbar>
                    <Typography variant="h6" sx={{ top: 0, position: 'relative' }}>
                        Content
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                id="appbarBodyFiller1"
                sx={{
                    height: 400,
                    overflow: 'scroll',
                    backgroundColor: 'background.paper',
                    width: 450,
                    mx: 'auto',
                }}
            >
                {getBodyFiller()}
            </Box>
        </Box>
    </ExampleShowcase>
);
