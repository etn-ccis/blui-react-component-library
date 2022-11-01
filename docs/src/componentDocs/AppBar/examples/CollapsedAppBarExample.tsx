import React from 'react';
import { Box, Toolbar, Typography } from '@mui/material';
import { AppBar } from '@brightlayer-ui/react-components';
import { getBodyFiller, ExampleShowcase } from '../../../shared';

export const CollapsedAppBarExample = (): JSX.Element => (
    <ExampleShowcase>
        <AppBar collapsedHeight={64} variant="collapsed" sx={{ width: 450, mx: 'auto', zIndex: 'auto' }}>
            <Toolbar>
                <Typography variant="h6">Content</Typography>
            </Toolbar>
        </AppBar>
        <Box
            sx={{
                height: 140,
                overflow: 'scroll',
                backgroundColor: 'background.paper',
                width: 450,
                mx: 'auto',
            }}
        >
            {getBodyFiller()}
        </Box>
    </ExampleShowcase>
);
