import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DrawerLayout } from '@pxblue/react-components';
import { NavigationDrawer } from './NavigationDrawer';
import { App } from '../App';
import { SharedAppBar } from '../components/SharedAppBar';
import { useLocation } from 'react-router-dom';
import { RTLProvider } from '../pages/RTLProvider';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export const MainRouter = () => {
    const [open, setOpen] = useState(true);
    return (
        <Router>
            <ScrollToTop />
            <RTLProvider rtl={true}>
                <DrawerLayout drawer={<NavigationDrawer open={open} setOpen={setOpen} />}>
                    <SharedAppBar
                        onClick={() => {
                            setOpen(!open);
                        }}
                    />
                    <Switch>
                        <Route path="*">
                            <App />
                        </Route>
                    </Switch>
                </DrawerLayout>
            </RTLProvider>
        </Router>
    );
};
