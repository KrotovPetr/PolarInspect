import {RouteProps} from 'react-router-dom';
import {MonitoringPage, Home} from '../../../pages';
import {MonitoringIndexPage} from '../../../pages/YandexCustom/MonitoringIndexPage/MonitoringIndexPage';
import {Upload} from '../../../pages/Upload/Upload';

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
    {path: 'upload/*', element: <Upload />, caseSensitive: false},
    {
        path: '*',
        element: <h1>Not found</h1>,
    },
];
