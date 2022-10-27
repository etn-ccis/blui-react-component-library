import React from 'react';
import { InfoListItem } from '@brightlayer-ui/react-components/core/InfoListItem';
import { Alarm } from '@mui/icons-material';
import { ExampleShowcase } from '../../../shared';

export const InfoListItemWithIconExample = (): JSX.Element => (
    <ExampleShowcase>
        <InfoListItem
            sx={{ maxWidth: 700, m: 'auto', backgroundColor: 'background.paper' }}
            title="Info List Item"
            subtitle="with an icon"
            icon={<Alarm />}
        />
    </ExampleShowcase>
);
