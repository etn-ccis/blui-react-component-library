import React from 'react';
import Box from '@mui/material/Box';
import { Spacer } from '@brightlayer-ui/react-components';
import * as colors from '@brightlayer-ui/colors';
import { ExampleShowcase } from '../../../shared';

export const SpacerWithPixelExample = (): JSX.Element => (
    <ExampleShowcase sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box>
            <Box sx={{ height: 56, display: 'flex' }}>
                <Spacer width={25} flex={0} sx={{ backgroundColor: colors.blue[300] }}>
                    25
                </Spacer>
                <Spacer width={75} flex={0} sx={{ backgroundColor: colors.yellow[300] }}>
                    75
                </Spacer>
                <Spacer width={200} flex={0} sx={{ backgroundColor: colors.red[300] }}>
                    200
                </Spacer>
            </Box>

            <Box sx={{ mt: 4, width: 300, display: 'flex', flexDirection: 'column' }}>
                <Spacer height={25} flex={0} sx={{ backgroundColor: colors.blue[300] }}>
                    25
                </Spacer>
                <Spacer height={50} flex={0} sx={{ backgroundColor: colors.yellow[300] }}>
                    50
                </Spacer>
                <Spacer height={75} flex={0} sx={{ backgroundColor: colors.red[300] }}>
                    75
                </Spacer>
            </Box>
        </Box>
    </ExampleShowcase>
);
