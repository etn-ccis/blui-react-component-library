import React from 'react';
import { InfoListItem } from '@brightlayer-ui/react-components/core/InfoListItem';
import * as colors from '@brightlayer-ui/colors';
import { OfflineBolt } from '@mui/icons-material';
import { ExampleShowcase } from '../../../shared';

export const InfoListItemWithStatusColorExample = (): JSX.Element => (
    <ExampleShowcase>
        <InfoListItem
            sx={{ maxWidth: 700, m: 'auto', backgroundColor: 'background.paper' }}
            title="Info List Item"
            subtitle="with a status indicator"
            icon={<OfflineBolt sx={{ color: 'white', backgroundColor: colors.green[700] }} />}
            avatar
            statusColor={colors.green[700]}
        />
    </ExampleShowcase>
);
