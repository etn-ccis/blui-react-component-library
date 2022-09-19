import React from 'react';
import { Box, Toolbar, Typography } from '@mui/material';
import * as colors from '@brightlayer-ui/colors';
import { AppBar } from '@brightlayer-ui/react-components';
import { getBodyFiller } from '../../../shared';

export const SnapAppBarExample = (): JSX.Element => (
    <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
        <AppBar
            variant={'snap'}
            expandedHeight={200}
            collapsedHeight={64}
            scrollThreshold={100}
            scrollContainerId="appBarSnapContainer"
            animationDuration={300}
            sx={{ width: 450, mx: 'auto', zIndex: 'auto' }}
        >
            <Toolbar>
                <Typography variant="h6">Content</Typography>
            </Toolbar>
        </AppBar>
        <Box
            id="appBarSnapContainer"
            sx={{
                height: 140,
                overflow: 'scroll',
                backgroundColor: (theme) => theme.palette.background.paper,
                width: 450,
                mx: 'auto',
            }}
        >
            {getBodyFiller()}
        </Box>
    </Box>
);
