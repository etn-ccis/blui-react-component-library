import React from 'react';
import { EmptyState } from '@brightlayer-ui/react-components';
import { Box } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';

export const DummyComponent = (): JSX.Element => (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', p: '48px 40px' }}>
        <EmptyState icon={<ConstructionIcon fontSize={'inherit'} />} title={'Component playground is coming soon'} />
    </Box>
);