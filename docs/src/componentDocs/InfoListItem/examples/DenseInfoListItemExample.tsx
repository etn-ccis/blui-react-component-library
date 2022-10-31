import React from 'react';
import { InfoListItem } from '@brightlayer-ui/react-components/core/InfoListItem';
import { ExampleShowcase } from '../../../shared';

export const DenseInfoListItemExample = (): JSX.Element => (
    <ExampleShowcase>
        <InfoListItem
            sx={{ maxWidth: 700, m: 'auto', backgroundColor: 'background.paper' }}
            title="Dense Info List Item 1"
            dense
            divider="full"
        />
        <InfoListItem
            sx={{ maxWidth: 700, m: 'auto', backgroundColor: 'background.paper' }}
            title="Dense Info List Item 2"
            dense
            divider="full"
        />
        <InfoListItem
            sx={{ maxWidth: 700, m: 'auto', backgroundColor: 'background.paper' }}
            title="Dense Info List Item 3"
            dense
            divider="full"
        />
    </ExampleShowcase>
);
