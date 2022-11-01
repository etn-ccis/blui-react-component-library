import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { pageDefinitions, RouteConfig } from '../__configuration__/navigationMenu/navigation';

const buildRoutes = (routes: RouteConfig[]): JSX.Element[] =>
    routes.map((route) => {
        const subPages = [...(route.pages || []), ...(route.children || [])];
        return (
            <Route key={route.path} path={route.path} element={route.element}>
                {buildRoutes(subPages)}
                {subPages.length > 0 && (
                    <>
                        <Route path={''} element={<Navigate replace to={subPages[0].path || ''} />} />
                        <Route path={'*'} element={<Navigate replace to={subPages[0].path || ''} />} />
                    </>
                )}
            </Route>
        );
    });

export const MainRouter = (
    <>
        <Route path={'/'} element={<Navigate to={'/components/app-bar'} />} />
        {buildRoutes(pageDefinitions)}
        <Route path={'*'} element={<Navigate to={'/components/app-bar'} />} />
    </>
);
