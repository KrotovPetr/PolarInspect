import React, {Suspense, useCallback} from 'react';
import {Route, RouteProps, Routes} from 'react-router-dom';
import {routerConfig} from '../routerConfig';
export const AppRouter = () => {
    const renderWithWrapper = useCallback((route: RouteProps) => {
        const element = <Suspense fallback={<h1>Loader</h1>}>{route.element}</Suspense>;

        return <Route key={route.path} path={route.path} element={element} />;
    }, []);

    return (
        <Suspense fallback={<h1>Loader</h1>}>
            <Routes>{Object.values(routerConfig).map(renderWithWrapper)}</Routes>
        </Suspense>
    );
};
