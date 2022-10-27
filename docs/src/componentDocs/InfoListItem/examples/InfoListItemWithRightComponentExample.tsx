import React from 'react';
import { InfoListItem } from '@brightlayer-ui/react-components/core/InfoListItem';
import * as colors from '@brightlayer-ui/colors';
import { BatteryChargingFull } from '@mui/icons-material';
import { ChannelValue } from '@brightlayer-ui/react-components';
import { ExampleShowcase } from '../../../shared';

export const InfoListItemWithRightComponentExample = (): JSX.Element => (
    <ExampleShowcase>
        <InfoListItem
            sx={{ maxWidth: 700, m: 'auto', backgroundColor: 'background.paper' }}
            title="Info List Item"
            subtitle="with a ChannelValue component to the right"
            icon={<BatteryChargingFull sx={{ color: colors.blue[500] }} />}
            rightComponent={<ChannelValue value="15" units="A" />}
        />
    </ExampleShowcase>
);
