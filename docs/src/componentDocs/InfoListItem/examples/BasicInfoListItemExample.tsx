import React from 'react';
import { InfoListItem } from '@brightlayer-ui/react-components';
import { ExampleShowcase } from '../../../shared';

export const BasicInfoListItemExample = (): JSX.Element => (
    <ExampleShowcase>
        <InfoListItem sx={{ maxWidth: 700, m: 'auto', backgroundColor: 'background.paper' }} title="Info List Item" />
    </ExampleShowcase>
);
