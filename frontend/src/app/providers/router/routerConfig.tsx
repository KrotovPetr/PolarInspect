import {RouteProps} from 'react-router-dom';
import {YandexMap} from '../../../pages/YandexMap/YandexMap';
import {Home} from '../../../pages/Home/Home';
import {MyGeoMap} from '../../../pages/MyGeoMap/MyGeoMap';
import {YandexCustom} from '../../../pages/YandexCustom';

export const routerConfig: Array<RouteProps> = [
    {
        path: '/',
        element: <Home />,
        caseSensitive: false,
    },
    {
        path: '/yandex',
        element: <YandexMap />,
        caseSensitive: false,
    },
    {
        path: '/yandex-custom',
        element: <YandexCustom />,
        caseSensitive: false,
    },
    {
        path: '/google',
        element: <h1>Google</h1>,
        caseSensitive: false,
    },
    {
        path: '/my-geo-map',
        element: <MyGeoMap />,
        caseSensitive: false,
    },
    {
        path: '*',
        element: <h1>Not found</h1>,
    },
];
