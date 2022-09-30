import React from 'react';
import ReportIcon from '@mui/icons-material/Report';
import { EmptyState } from '@brightlayer-ui/react-components/core/EmptyState';

export const EmptyStateWithContentExample = (): JSX.Element => (
    <EmptyState
        icon={<ReportIcon fontSize={'inherit'} />}
        title={'Request Permission'}
        description={'You must contact your system admin to view this content.'}
    />
);
