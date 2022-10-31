import React from 'react';
import { InfoListItem } from '@brightlayer-ui/react-components/core/InfoListItem';
import * as colors from '@brightlayer-ui/colors';
import { BatteryChargingFull } from '@mui/icons-material';
import { ChannelValue } from '@brightlayer-ui/react-components';
import { ExampleShowcase } from '../../../shared';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const InfoListItemWithRightComponentExample = (): JSX.Element => (
    <ExampleShowcase>
        <InfoListItem
            sx={{ maxWidth: 700, m: 'auto', backgroundColor: 'background.paper' }}
            title="Battery Fully Charged"
            subtitle="Your device is ready to use"
            icon={<BatteryChargingFull sx={{ color: colors.blue[500] }} />}
            leftComponent={
                <Box sx={{ display: 'flex', flexDirection: 'column', mr: 4 }}>
                    <Typography variant="caption">
                        <strong>8:32 </strong>AM
                    </Typography>
                    <Typography variant="caption">11/21/21</Typography>
                </Box>
            }
            rightComponent={<ChannelValue value="15" units="A" />}
        />
    </ExampleShowcase>
);
