import React from 'react';
import { InfoListItem } from '@brightlayer-ui/react-components/core/InfoListItem';
import Stack from '@mui/material/Stack';
import * as colors from '@brightlayer-ui/colors';
import { DeviceActivating } from '@brightlayer-ui/icons-mui';
import { BatteryChargingFull, CheckCircle } from '@mui/icons-material';
import { ExampleShowcase } from '../../../shared';

export const InfoListItemInListExample = (): JSX.Element => (
    <ExampleShowcase>
        <Stack
            sx={{
                '& .BluiInfoListItem-root': {
                    maxWidth: 700,
                    m: 'auto',
                    backgroundColor: 'background.paper',
                    cursor: 'pointer',
                    '&:hover': {
                        backgroundColor: 'action.hover',
                    },
                },
            }}
        >
            <InfoListItem
                dense
                title="Status"
                divider="partial"
                statusColor={colors.green[500]}
                subtitleSeparator="/"
                icon={<DeviceActivating color="inherit" />}
                iconAlign="center"
                chevron
            />
            <InfoListItem
                title="Output Voltage"
                divider="partial"
                avatar
                statusColor={colors.red[500]}
                subtitle={['Phase A', 'Phase B', 'Phase C']}
                icon={<CheckCircle color="inherit" />}
                chevron
            />
            <InfoListItem
                dense
                title="Output Current"
                icon={<BatteryChargingFull color="inherit" />}
                iconAlign="center"
                chevron
            />
        </Stack>
    </ExampleShowcase>
);
