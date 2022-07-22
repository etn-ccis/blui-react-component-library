import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { HomePage } from '../pages';
import { pageDefinitions, SimpleNavItem } from '../__configuration__/navigationMenu/navigation';

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
                                    key={`url_${childPath.url}`}
                                    path={`${childPath.url}`}
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
                        (
                            ret = ret.concat(
                            <Route
                                path={`${routes[i].items[j].url}${innerPath.url || ''}`}
                                key={`${routes[i].items[j].url}/${innerPath.url || ''}`}
                                element={innerPath.component}
                            >
                                {innerPath.children &&
                                    innerPath.children?.map((childPath: SimpleNavItem) => (
                                        <Route
                                            key={`url_${childPath.url}`}
                                            path={`${childPath.url}`}
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
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/components/app-bar'} element={<Navigate replace to="/components/app-bar/examples" />} />
        <Route path={'/components/drawer'} element={<Navigate to="/components/drawer/examples" />} />
        <Route
            path={'/components/drawer/drawer-nav-item'}
            element={<Navigate to="/components/drawer/drawer-nav-item/examples" />}
        />
        <Route
            path={'/components/drawer/drawer-nav-group'}
            element={<Navigate to="/components/drawer/drawer-nav-group/examples" />}
        />
        {buildRoutes(pageDefinitions)}
        <Route path={'*'} element={<Navigate to={'/'} />} />
    </>
);
