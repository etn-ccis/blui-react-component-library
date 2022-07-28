import React from 'react';
import { Box } from '@mui/material';

import DrawerNavItemDocs from '../../../markdown/examples/DrawerNavItemDocs.mdx';

export const DrawerNavItemExamples = (): JSX.Element => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <DrawerNavItemDocs />
        </Box>
    );
};
