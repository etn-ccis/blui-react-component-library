import React from 'react';
import { Box, Toolbar, Typography } from '@mui/material';
import * as colors from '@brightlayer-ui/colors';
import { AppBar } from '@brightlayer-ui/react-components';
import { getBodyFiller } from '../../../shared';

export const SnapAppBarExample = (): JSX.Element => (
    <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4, overflow: 'hidden' }}>
        <Box sx={{ mb: 2, overflow: 'hidden', height: 400 }}>
            <AppBar
                variant="snap"
                scrollContainerId={'appbarBodyFiller1'}
                position={'sticky'}
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
    </Box>
);
