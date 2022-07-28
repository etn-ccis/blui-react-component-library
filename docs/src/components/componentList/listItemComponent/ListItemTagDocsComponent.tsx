import React from 'react';
import { Box } from '@mui/material';
import ListItemDoc from '../../../markdown/ListItemDoc.mdx';

export const ListItemTagDocsComponent = (): JSX.Element => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Box sx={{ p: 2 }}>
                <ListItemDoc />
            </Box>
        </div>
    );
};
