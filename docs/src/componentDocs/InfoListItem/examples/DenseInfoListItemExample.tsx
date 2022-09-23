import React from 'react';
import { InfoListItem } from '@brightlayer-ui/react-components/core/InfoListItem';
import Box from '@mui/material/Box';
import * as colors from '@brightlayer-ui/colors';

export const DenseInfoListItemExample = (): JSX.Element => (
    <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
        <InfoListItem
            sx={{ maxWidth: 700, m: 'auto', backgroundColor: 'background.paper' }}
            title="Dense Info List Item"
            dense
        />
    </Box>
);
