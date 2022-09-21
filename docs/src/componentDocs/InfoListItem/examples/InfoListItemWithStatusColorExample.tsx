import React from 'react';
import { InfoListItem } from '@brightlayer-ui/react-components/core/InfoListItem';
import Box from '@mui/material/Box';
import * as colors from '@brightlayer-ui/colors';
import { OfflineBolt } from '@mui/icons-material';

export const InfoListItemWithStatusColorExample = (): JSX.Element => (
    <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
        <InfoListItem
            sx={{ maxWidth: 700, m: 'auto', backgroundColor: 'background.paper' }}
            title="Info List Item"
            subtitle="with a status indicator"
            icon={<OfflineBolt sx={{ color: 'white', backgroundColor: colors.green[700] }} />}
            avatar={true}
            statusColor={colors.green[700]}
        />
    </Box>
);
