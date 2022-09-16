import React from 'react';
import { ListItemTag } from '@brightlayer-ui/react-components/core/ListItemTag';
import { InfoListItem } from '@brightlayer-ui/react-components/core/InfoListItem';
import Box from '@mui/material/Box';
import BatteryChargingFull from '@mui/icons-material/BatteryChargingFull';
import * as Colors from '@brightlayer-ui/colors';

export const ComplexListItemTagExample = (): JSX.Element => (
    <InfoListItem
        icon={<BatteryChargingFull />}
        title={'Info List Item'}
        subtitle={'with a ListItemTag component to the right'}
        backgroundColor={'white'}
        rightComponent={
            <Box sx={{ display: 'flex' }}>
                <ListItemTag
                    label={'Build Passing'}
                    backgroundColor={Colors.green[300]}
                    fontColor={Colors.black[900]}
                    sx={{
                        mr: 2,
                        ml: 0,
                    }}
                />
                <ListItemTag label={'5 Bugs'} backgroundColor={Colors.red[300]} fontColor={Colors.black[900]} />
            </Box>
        }
    />
);
