import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { DrawerLayout } from '@pxblue/react-components';
import { NavigationDrawer } from './navigationDrawer';
import { App } from '../App';

export const MainRouter = () => {
    return (
        <Router>
            <DrawerLayout drawer={<NavigationDrawer />}>
                <Switch>
                    <Route path="*">
                        <Switch>
                            <Route path="/">
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
