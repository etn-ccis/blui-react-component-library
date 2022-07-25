import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '../markdown/DrawerMarkdown.mdx';

const DrawerDocs = (): JSX.Element => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Box sx={{ p: '48px 40px', m: '0px auto', backgroundColor: '#ffffff' }}>
                <Drawer />
            </Box>
        </Box>
    );
};

export default DrawerDocs;
