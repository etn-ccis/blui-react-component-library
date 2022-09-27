import React from 'react';
import { InfoListItem } from '@brightlayer-ui/react-components/core/InfoListItem';
import Box from '@mui/material/Box';
import * as colors from '@brightlayer-ui/colors';
import { BatteryChargingFull } from '@mui/icons-material';
import { ChannelValue } from '@brightlayer-ui/react-components';

export const InfoListItemWithRightComponentExample = (): JSX.Element => (
    <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
        <InfoListItem
            sx={{ maxWidth: 700, m: 'auto', backgroundColor: 'background.paper' }}
            title="Info List Item"
            subtitle="with a ChannelValue component to the right"
            icon={<BatteryChargingFull sx={{ color: colors.blue[500] }} />}
            rightComponent={<ChannelValue value={'15'} units={'A'} />}
        />
    </Box>
);
