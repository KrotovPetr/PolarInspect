import {NavigateFunction} from 'react-router-dom';

export const buildBreadcrumbsItems = (
    pathname: string,
    navigate: NavigateFunction,
): {text: string; action: () => void}[] => {
    const [page, type, pipe, point] = pathname.split('/').filter((elem) => elem !== '');

    const defaultBreadcumbs = [
        {
            text: 'Мониторинг',
            action: () => {},
        },
        {
            text: type === 'map' ? 'Карта' : 'Статистика',
            action: () => {
                navigate('/monitoring/' + type);
            },
        },
    ];

    if (pipe !== undefined) {
        defaultBreadcumbs.push({
            text: pipe,
            action: () => {
                navigate('/' + page + '/' + type + '/' + pipe);
            },
        });
    }

    if (pipe !== undefined) {
        defaultBreadcumbs.push({
            text: point,
            action: () => {
                navigate('/' + page + '/' + type + '/' + pipe + '/' + point);
            },
        });
    }

    return defaultBreadcumbs;
};
