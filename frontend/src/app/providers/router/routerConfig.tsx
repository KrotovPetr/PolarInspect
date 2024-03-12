import {RouteObject, RouteProps} from 'react-router-dom';
import {YandexMap} from '../../../pages/YandexMap/YandexMap';
import {Home} from '../../../pages/Home/Home';
import {MyGeoMap} from '../../../pages/MyGeoMap/MyGeoMap';
import {MonitoringPage} from '../../../pages/YandexCustom';
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
        path: 'yandex',
        element: <YandexMap />,
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
        path: 'my-geo-map',
        element: <MyGeoMap />,
        caseSensitive: false,
    },
    {
        path: '*',
        element: <h1>Not found</h1>,
    },
];
