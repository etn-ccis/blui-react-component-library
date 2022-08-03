import React from 'react';
import Box from '@mui/material/Box';
import DrawerMarkdown from '../../../markdown/DrawerMarkdown.mdx';

export const DrawerDocsComponent = (): JSX.Element => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', maxWidth: '980px', m: '0px auto' }}>
            <Box sx={{ p: '48px 40px', m: '0px auto', backgroundColor: '#F8F8F8' }}>
                <DrawerMarkdown />
            </Box>
        </Box>
    );
};