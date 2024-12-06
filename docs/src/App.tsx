import React, { useEffect, useState } from 'react';
import { DrawerContext } from './contexts/drawerContextProvider';
import { NavigationDrawer } from './router/drawer';
import { MainRouter } from './router/main';
import { DrawerLayout } from '@brightlayer-ui/react-components';
import { Routes } from 'react-router-dom';
import { useColorScheme } from '@mui/material';

export const App = (): JSX.Element => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const { setMode } = useColorScheme();

    useEffect(() => {
        setMode('light');
    }, []);

    return (
        <DrawerContext.Provider
            value={{
                drawerOpen,
                setDrawerOpen,
            }}
        >
            <DrawerLayout drawer={<NavigationDrawer />} style={{ height: '100%' }}>
                <Routes>{MainRouter}</Routes>
            </DrawerLayout>
        </DrawerContext.Provider>
    );
};
