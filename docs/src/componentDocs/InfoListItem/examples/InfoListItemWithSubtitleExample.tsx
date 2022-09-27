import React from 'react';
import { InfoListItem } from '@brightlayer-ui/react-components/core/InfoListItem';
import Box from '@mui/material/Box';
import * as colors from '@brightlayer-ui/colors';

export const InfoListItemWithSubtitleExample = (): JSX.Element => (
    <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
        <InfoListItem
            sx={{ maxWidth: 700, m: 'auto', backgroundColor: 'background.paper' }}
            title="Info List Item"
            subtitle="this is a subtitle within an InfoListItem"
        />
    </Box>
);
