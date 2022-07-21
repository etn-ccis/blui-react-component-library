import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '../markdown/Drawer.mdx';

export const ListItemTagComponentDoc = (): JSX.Element => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Box sx={{ p: '3rem 40px', m: '0px auto', maxWidth: '980px', backgroundColor: '#ffffff' }}>
                <Drawer />
            </Box>
        </Box>
    );
};
