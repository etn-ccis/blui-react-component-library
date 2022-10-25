import React, { useState } from 'react';
import { DrawerContext } from './contexts/drawerContextProvider';
import { NavigationDrawer } from './router/drawer';
import { MainRouter } from './router/main';
import { DrawerLayout } from '@brightlayer-ui/react-components';
import { Routes } from 'react-router-dom';
import ReactGA from 'react-ga';

const trackers = [
    {
        trackingId: 'UA-139646200-4',
        gaOptions: { name: 'DEV_GA' },
    },
    {
        trackingId: 'UA-139646200-3',
        gaOptions: { name: 'MASTER_GA' },
    },
];

ReactGA.initialize(trackers);
ReactGA.pageview(window.location.pathname + window.location.search);

export const App = (): JSX.Element => {
    const [drawerOpen, setDrawerOpen] = useState(false);

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
