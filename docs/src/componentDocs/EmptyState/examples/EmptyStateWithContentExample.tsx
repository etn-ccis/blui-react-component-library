import React from 'react';
import ReportIcon from '@mui/icons-material/Report';
import { EmptyState } from '@brightlayer-ui/react-components/core/EmptyState';
import { ExampleShowcase } from '../../../shared';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export const EmptyStateWithContentExample = (): JSX.Element => (
    <ExampleShowcase>
        <EmptyState
            icon={<ReportIcon fontSize="inherit" />}
            // @ts-ignore
            title={
                <Typography color={'primary'} variant={'h6'}>
                    Request Permission
                </Typography>
            }
            description={
                <Typography variant={'body2'}>
                    You must <Link>contact your system admin</Link> to view this content.
                </Typography>
            }
        />
    </ExampleShowcase>
);
