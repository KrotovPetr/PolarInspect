export const DEFAULT_ROUTES = [
    {id: 'upload', title: 'Выгрузка'},
    {id: 'monitoring', title: 'Мониторинг'},
];

export const getActiveTab = (pathname: string) => {
    const route = pathname.split('/')[1];
    return route;
};
