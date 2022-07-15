import React from 'react';
import { Box } from '@mui/material';
import Drawer from '../docs/markdown/Drawer.mdx';

export const ListItemTagComponentDoc = (): JSX.Element => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Box sx={{ p: 2 }}>
                <Drawer />
            </Box>
        </div>
    );
};
