import React from 'react';
import NotListedLocation from '@mui/icons-material/NotListedLocation';
import { EmptyState } from '@brightlayer-ui/react-components/core/EmptyState';

export const BasicEmptyStateExample = (): JSX.Element => (
    <EmptyState icon={<NotListedLocation fontSize={'inherit'} />} title={'Location Unknown'} />
);
