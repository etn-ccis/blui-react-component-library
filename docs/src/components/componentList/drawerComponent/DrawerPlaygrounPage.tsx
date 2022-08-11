import React from 'react';
import { Box } from '@mui/material';
import TemporaryDrawer from '../../playground/temporaryDrawer';
import { DrawerComponentPlayground } from '.';

const playGroundStyles = {
    width: '75%',
    height: `calc(100vh - 112px)`,
    display: `flex`,
    p: 0,
    overflow: `auto`,
    position: `relative`,
    alignItems: `center`,
    flexDirection: `column`,
    justifyContent: `center`,
};

export const DrawerPlaygroundComponent = (): JSX.Element => {
    return (
        <Box sx={playGroundStyles}>
            <Box>
                <DrawerComponentPlayground />
            </Box>
            <Box>
                <TemporaryDrawer />
            </Box>
        </Box>
    );
};