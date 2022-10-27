import React from 'react';
import { InfoListItem } from '@brightlayer-ui/react-components/core/InfoListItem';
import { ExampleShowcase } from '../../../shared';

export const InfoListItemWithSubtitleExample = (): JSX.Element => (
    <ExampleShowcase>
        <InfoListItem
            sx={{ maxWidth: 700, m: 'auto', backgroundColor: 'background.paper' }}
            title="Info List Item"
            subtitle="this is a subtitle within an InfoListItem"
        />
    </ExampleShowcase>
);
