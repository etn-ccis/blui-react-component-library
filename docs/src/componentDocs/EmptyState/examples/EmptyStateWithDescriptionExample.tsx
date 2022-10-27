import React from 'react';
import LocationOff from '@mui/icons-material/LocationOff';
import { EmptyState } from '@brightlayer-ui/react-components/core/EmptyState';
import { ExampleShowcase } from '../../../shared';

export const EmptyStateWithDescriptionExample = (): JSX.Element => (
    <ExampleShowcase>
        <EmptyState
            icon={<LocationOff fontSize="inherit" />}
            title="Location Services Disabled"
            description="Enable Location Services via Settings to receive GPS information"
        />
    </ExampleShowcase>
);
