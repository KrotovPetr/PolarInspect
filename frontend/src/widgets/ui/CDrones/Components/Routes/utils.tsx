import {TRoute} from '../../utils';

export const getLabelTheme = (route: TRoute) => {
    return route.status === 'pending'
        ? 'warning'
        : route.status === 'aborted'
          ? 'danger'
          : route.status === 'created'
            ? 'info'
            : 'success';
};

export const getLabelContent = (route: TRoute) => {
    return route.status === 'pending'
        ? 'Ожидает'
        : route.status === 'aborted'
          ? 'Отменён'
          : route.status === 'created'
            ? 'Создан'
            : 'Выполнен';
};
