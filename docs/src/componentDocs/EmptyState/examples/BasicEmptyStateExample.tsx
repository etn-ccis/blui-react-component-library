import React from 'react';
import NotListedLocation from '@mui/icons-material/NotListedLocation';
import { EmptyState } from '@brightlayer-ui/react-components/core/EmptyState';
import { ExampleShowcase } from '../../../shared';

export const BasicEmptyStateExample = (): JSX.Element => (
    <ExampleShowcase>
        <EmptyState icon={<NotListedLocation fontSize="inherit" />} title="Location Unknown" />
    </ExampleShowcase>
);
