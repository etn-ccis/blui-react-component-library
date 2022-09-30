import React from 'react';
import LocationOff from '@mui/icons-material/LocationOff';
import { EmptyState } from '@brightlayer-ui/react-components/core/EmptyState';

export const EmptyStateWithDescriptionExample = (): JSX.Element => (
    <EmptyState
        icon={<LocationOff fontSize={'inherit'} />}
        title={'Location Services Disabled'}
        description={'Enable Location Services via Settings to receive GPS information'}
    />
);
