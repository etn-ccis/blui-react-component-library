import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { HomePage } from '../pages';
import { pageDefinitions, SimpleNavItem } from '../__configuration__/navigationMenu/navigation';

const buildRedirectURL = (routes: any[]): JSX.Element[] => {
    let ret: any[] = [];
    for (let i = 0; i < routes.length; i++) {
        for (let j = 0; j < routes[i].items.length; j++) {
            if (routes[i].items[j].children) {
                ret.push(
                    <Route
                        path={`${routes[i].items[j].url || ''}`}
                        key={`${routes[i].items[j].url || ''}`}
                        element={<Navigate replace to={`${routes[i].items[j].url || ''}/examples`} />}
                    />
                );
            }
            if (routes[i].items[j].pages) {
                routes[i].items[j].pages?.map(
                    // eslint-disable-next-line
                    (innerPath: SimpleNavItem) =>
                        (ret = ret.concat(
                            <Route
                                path={`${routes[i].items[j].url}${innerPath.url || ''}`}
                                key={`${routes[i].items[j].url}/${innerPath.url || ''}`}
                                element={
                                    <Navigate replace to={`${routes[i].items[j].url}${innerPath.url || ''}/examples`} />
                                }
                            ></Route>
                        ))
                );
            }
        }
    }
    return ret;
};

const buildRoutes = (routes: any[]): JSX.Element[] => {
    let ret: any[] = [];
    for (let i = 0; i < routes.length; i++) {
        for (let j = 0; j < routes[i].items.length; j++) {
            if (routes[i].items[j].component) {
                ret.push(
                    <Route
                        path={`${routes[i].items[j].url || ''}`}
                        key={`${routes[i].items[j].url || ''}`}
                        element={routes[i].items[j].component}
                    >
                        {routes[i].items[j].children &&
                            routes[i].items[j].children?.map((childPath: SimpleNavItem) => (
                                <Route
                                    key={`url_${childPath.url || ''}`}
                                    path={`${childPath.url || ''}`}
                                    element={childPath.component}
                                />
                            ))}
                    </Route>
                );
            }
            if (routes[i].items[j].pages) {
                ret = ret.concat(buildRoutes(routes[i].items[j]));

                routes[i].items[j].pages?.map(
                    // eslint-disable-next-line
                    (innerPath: SimpleNavItem) =>
                        (ret = ret.concat(
                            <Route
                                path={`${routes[i].items[j].url}${innerPath.url || ''}`}
                                key={`${routes[i].items[j].url}/${innerPath.url || ''}`}
                                element={innerPath.component}
                            >
                                {innerPath.children &&
                                    innerPath.children?.map((childPath: SimpleNavItem) => (
                                        <Route
                                            key={`url_${childPath.url || ''}`}
                                            path={`${childPath.url || ''}`}
                                            element={childPath.component}
                                        />
                                    ))}
                            </Route>
                        ))
                );
            }
        }
    }
    return ret;
};

export const MainRouter = (
    <>
        <Route path={'/react-dev'} element={<HomePage />} />
        {buildRedirectURL(pageDefinitions)}
        {buildRoutes(pageDefinitions)}
        <Route path={'*'} element={<Navigate to={'/react-dev'} />} />
    </>
);
