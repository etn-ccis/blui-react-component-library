import React from 'react';
import Box from '@mui/material/Box';
import { InfoListItem } from '@brightlayer-ui/react-components';
import * as colors from '@brightlayer-ui/colors';

export const BasicInfoListItemExample = (): JSX.Element => (
    <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
        <InfoListItem sx={{ maxWidth: 700, m: 'auto', backgroundColor: 'background.paper' }} title="Info List Item" />
    </Box>
);
