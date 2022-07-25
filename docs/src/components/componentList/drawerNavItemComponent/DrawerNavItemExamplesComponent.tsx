import React from 'react';
import { EmptyState } from '@brightlayer-ui/react-components';
import { Box } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
export const DrawerNavItemExamplesComponent = (): JSX.Element => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <EmptyState icon={<ConstructionIcon fontSize={'inherit'} />} title={'Examples for drawer nav item coming soon'} />
        </Box>
    );
};
