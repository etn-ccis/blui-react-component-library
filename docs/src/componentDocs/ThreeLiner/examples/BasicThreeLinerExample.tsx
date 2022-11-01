import React from 'react';
import Box from '@mui/material/Box';
import { ThreeLiner } from '@brightlayer-ui/react-components';
import { ExampleShowcase } from '../../../shared';

export const BasicThreeLinerExample = (): JSX.Element => (
    <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box>
            <ThreeLiner title="title" subtitle="subtitle" info="info" />
        </Box>
    </ExampleShowcase>
);
