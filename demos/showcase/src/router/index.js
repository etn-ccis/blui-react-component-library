import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { DrawerLayout } from '@pxblue/react-components';
import { NavigationDrawer } from './NavigationDrawer';
import { App } from '../App';
import { SharedAppBar } from '../components/SharedAppBar';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export const MainRouter = () => {
    const [open, setOpen] = useState(true);
    return (
        <Router>
            <ScrollToTop/>
            <DrawerLayout drawer={<NavigationDrawer open={open} setOpen={setOpen} />}>
                <Switch>
                    <Route path="*">
                        <Switch>
                            <Route path="/">
                                <SharedAppBar
                                    onClick={() => {
                                        setOpen(!open);
                                    }}
                                />
                                <App />
                            </Route>
                            <Route path="*">
                                <Redirect to={'/'} />
                            </Route>
                        </Switch>
                    </Route>
                </Switch>
            </DrawerLayout>
        </Router>
    );
};
