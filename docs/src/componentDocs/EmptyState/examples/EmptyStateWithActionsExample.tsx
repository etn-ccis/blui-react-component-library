import React from 'react';
import Button from '@mui/material/Button';
import Add from '@mui/icons-material/Add';
import Devices from '@mui/icons-material/Devices';
import { EmptyState } from '@brightlayer-ui/react-components/core/EmptyState';

export const EmptyStateWithActionsExample = (): JSX.Element => (
    <EmptyState
        icon={<Devices fontSize={'inherit'} />}
        title={'No Devices'}
        description={'Check your network connection or add a new device'}
        actions={
            <Button variant={'outlined'} color={'primary'} startIcon={<Add />}>
                Add Device
            </Button>
        }
    />
);
