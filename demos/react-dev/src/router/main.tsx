import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { PAGES } from './routes';

export const MainRouter = (
    <>
        {PAGES.map((page) => {
            const RouteElement = page.component;
            return <Route key={`route_${page.route}`} path={`${page.route}`} element={<RouteElement />} />;
        })}
        <Route path={'*'} element={<Navigate to={'/'} />} />
    </>
);
