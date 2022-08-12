import React from 'react';
import { Box } from '@mui/material';
import DrawerPlayground from './DrawerPlayground';
import { DrawerComponentPreview } from './DrawerComponentPreview';

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
                <DrawerComponentPreview />
            </Box>
            <Box>
                <DrawerPlayground />
            </Box>
        </Box>
    );
};
