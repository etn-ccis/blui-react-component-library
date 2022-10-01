import React from 'react';
import { InfoListItem } from '@brightlayer-ui/react-components/core/InfoListItem';
import Box from '@mui/material/Box';
import * as colors from '@brightlayer-ui/colors';
import { Alarm } from '@mui/icons-material';

export const InfoListItemWithIconExample = (): JSX.Element => (
    <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
        <InfoListItem
            sx={{ maxWidth: 700, m: 'auto', backgroundColor: 'background.paper' }}
            title="Info List Item"
            subtitle="with an icon"
            icon={<Alarm />}
        />
    </Box>
);
