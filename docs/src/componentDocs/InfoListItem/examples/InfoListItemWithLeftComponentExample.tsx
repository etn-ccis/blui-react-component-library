import React from 'react';
import { InfoListItem } from '@brightlayer-ui/react-components/core/InfoListItem';
import Box from '@mui/material/Box';
import * as colors from '@brightlayer-ui/colors';
import { BatteryChargingFull } from '@mui/icons-material';
import { Typography } from '@mui/material';

export const InfoListItemWithLeftComponentExample = (): JSX.Element => (
    <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
        <InfoListItem
            sx={{ maxWidth: 700, m: 'auto', backgroundColor: 'background.paper' }}
            title="Info List Item"
            subtitle="with a timestamp as a left component"
            icon={<BatteryChargingFull sx={{ color: colors.blue[500] }} />}
            leftComponent={
                <Box sx={{ display: 'flex', flexDirection: 'column', mr: 4 }}>
                    <Typography variant="caption">
                        <strong>8:32 </strong>AM
                    </Typography>
                    <Typography variant="caption">11/21/21</Typography>
                </Box>
            }
        />
    </Box>
);
