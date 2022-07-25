import React from 'react';
import { Box } from '@mui/material';
import DummyDoc from '../../../markdown/DummyDoc.mdx';

export const DummyDocsComponent = (): JSX.Element => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Box sx={{ p: 2 }}>
                <DummyDoc />
            </Box>
        </div>
    );
};
