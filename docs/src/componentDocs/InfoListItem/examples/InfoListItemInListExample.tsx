import React from 'react';
import { InfoListItem } from '@brightlayer-ui/react-components/core/InfoListItem';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import * as colors from '@brightlayer-ui/colors';
import { ChannelValue } from '@brightlayer-ui/react-components';
import { DeviceActivating } from '@brightlayer-ui/icons-mui';
import { BatteryChargingFull, CheckCircle } from '@mui/icons-material';

export const InfoListItemInListExample = (): JSX.Element => (
    <Box sx={{ m: '16px 0', backgroundColor: colors.white[600], p: 4 }}>
        <Stack sx={{ '& .BluiInfoListItem-root': { maxWidth: 700, m: 'auto', backgroundColor: 'background.paper' } }}>
            <InfoListItem
                dense
                title={'Status'}
                divider="partial"
                statusColor={colors.green[500]}
                subtitleSeparator={'/'}
                icon={<DeviceActivating color={'inherit'} />}
                iconAlign={'center'}
                rightComponent={<ChannelValue fontSize={'1rem'} value={'Online, ESS+'} />}
            />
            <InfoListItem
                title={'Output Voltage'}
                divider={'partial'}
                avatar
                statusColor={colors.red[500]}
                subtitle={['Phase A', 'Phase B', 'Phase C']}
                icon={<CheckCircle color={'inherit'} />}
                rightComponent={
                    <span>
                        <ChannelValue fontSize={'1rem'} value={478} units={'V'} />,{' '}
                        <ChannelValue fontSize={'1rem'} value={479} units={'V'} />,{' '}
                        <ChannelValue fontSize={'1rem'} value={473} units={'V'} />
                    </span>
                }
            />
            <InfoListItem
                dense
                title={'Output Current'}
                icon={<BatteryChargingFull color={'inherit'} />}
                iconAlign={'center'}
                rightComponent={
                    <span>
                        <ChannelValue fontSize={'1rem'} value={15} units={'A'} />,{' '}
                        <ChannelValue fontSize={'1rem'} value={14.9} units={'A'} />,{' '}
                        <ChannelValue fontSize={'1rem'} value={15} units={'A'} />
                    </span>
                }
            />
        </Stack>
    </Box>
);
