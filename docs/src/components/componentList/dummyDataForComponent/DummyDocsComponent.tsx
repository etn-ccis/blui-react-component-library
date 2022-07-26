import React from 'react';
import { Box } from '@mui/material';
import DummyDoc from '../../../markdown/DummyDoc.mdx';

export const DummyDocsComponent = (): JSX.Element => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: '48px 40px' }}>
            <Box sx={{ p: 2 }}>
                <DummyDoc />
            </Box>
        </Box>
    );
};
