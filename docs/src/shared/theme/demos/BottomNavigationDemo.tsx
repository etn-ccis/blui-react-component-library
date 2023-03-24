import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Dashboard } from '@mui/icons-material';
import { Device, MapMarkerThree } from '@brightlayer-ui/icons-mui';

export const BottomNavigationDemo: JSX.Element = (
    <BottomNavigation value={0} showLabels sx={{ maxWidth: 400, width: '100%', m: 2 }}>
        <BottomNavigationAction label={'Overview'} icon={<Dashboard />} />
        <BottomNavigationAction label={'Assets'} icon={<Device />} />
        <BottomNavigationAction label={'Locations'} icon={<MapMarkerThree />} />
    </BottomNavigation>
);
