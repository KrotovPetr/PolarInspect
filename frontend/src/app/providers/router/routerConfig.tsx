import {RouteProps} from 'react-router-dom';
import {MonitoringPage, Home} from '../../../pages';
import {MonitoringIndexPage} from '../../../pages/YandexCustom/MonitoringIndexPage/MonitoringIndexPage';

type CustomRouteProps = {
    indexPage?: JSX.Element;
};

export type RouteCustomProps = RouteProps & CustomRouteProps;

export const routerConfig: Array<RouteCustomProps> = [
    {
        path: '/',
        element: <Home />,
        caseSensitive: false,
    },
    {
        path: 'monitoring/*',
        element: <MonitoringPage />,
        caseSensitive: false,
        indexPage: <MonitoringIndexPage />,
    },
    {path: 'upload', element: <h1>Will be soon!</h1>, caseSensitive: false},
    {
        path: '*',
        element: <h1>Not found</h1>,
    },
];
