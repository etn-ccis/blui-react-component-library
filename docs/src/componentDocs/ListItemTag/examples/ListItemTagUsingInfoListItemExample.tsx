import React from 'react';
import { ListItemTag } from '@brightlayer-ui/react-components/core/ListItemTag';
import { InfoListItem } from '@brightlayer-ui/react-components/core/InfoListItem';
import Stack from '@mui/material/Stack';
import BatteryChargingFull from '@mui/icons-material/BatteryChargingFull';
import * as Colors from '@brightlayer-ui/colors';
import { ExampleShowcase } from '../../../shared';
export const ListItemTagUsingInfoListItemExample = (): JSX.Element => (
    <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center' }}>
        <InfoListItem
            sx={{ width: 'auto', backgroundColor: 'background.paper' }}
            icon={<BatteryChargingFull />}
            title="Info List Item"
            subtitle="with a ListItemTag component to the right"
            iconColor="text.primary"
            rightComponent={
                <Stack spacing={2} direction={'row'}>
                    <ListItemTag
                        label="Build Passing"
                        backgroundColor={Colors.green[300]}
                        fontColor={Colors.black[900]}
                    />
                    <ListItemTag label="5 Bugs" backgroundColor={Colors.red[300]} fontColor={Colors.black[900]} />
                </Stack>
            }
        />
    </ExampleShowcase>
);
