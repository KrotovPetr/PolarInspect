import BadSupport from '../../../shared/images/support2.png';

export type TPoints = {
    id: number;
    coordinates: number[];
    title: string;
    theme: 'Warning' | 'Success' | 'Danger';
    image?: string;
};

export const points: TPoints[] = [
    {
        id: 1,
        coordinates: [70.346749, 68.429729],
        title: 'Железнодорожная станция',
        theme: 'Success',
        image: BadSupport,
    },
    {
        id: 2,
        coordinates: [70.34427, 68.431572],
        title: 'Пристань Метеоров',
        theme: 'Success',
        image: BadSupport,
    },
    {
        id: 3,
        coordinates: [70.342977, 68.424073],
        title: 'Парк Ваккасалми',
        theme: 'Success',
        image: BadSupport,
    },
    {
        id: 4,
        coordinates: [70.34605, 68.374286],
        title: 'Хеллоу',
        theme: 'Warning',
        image: BadSupport,
    },
    {
        id: 5,
        coordinates: [70.345671, 68.371207],
        title: 'Хеллоу',
        theme: 'Success',
        image: BadSupport,
    },
    {
        id: 6,
        coordinates: [70.346259, 68.367355],
        title: 'Хеллоу',
        theme: 'Success',
        image: BadSupport,
    },
    {
        id: 7,
        coordinates: [70.346859, 68.366411],
        title: 'Хеллоу',
        theme: 'Danger',
        image: BadSupport,
    },
    {
        id: 8,
        coordinates: [70.3505, 68.34188],
        title: 'Хеллоу',
        theme: 'Success',
        image: BadSupport,
    },
    {
        id: 9,
        coordinates: [70.356464, 68.332653],
        title: 'Хеллоу',
        theme: 'Success',
        image: BadSupport,
    },
];

export type TPipe = {id: string; children: Array<number>};
export const pipes: TPipe[] = [{id: 'Участок Северный', children: [1, 2, 3, 4, 5, 6, 7, 8, 9]}];

export const getCoordinates = (pointsIds: number[]) => {
    const pipePoints = pointsIds.map((pointId) => {
        return points[Number(pointId) - 1].coordinates;
    });

    return pipePoints;
};

export const mapState = {
    center: [70.358542, 68.337196],
    zoom: 14,
    behaviors: ['default', 'scrollZoom'],
    type: 'yandex#satellite',
};

export const getPlacemarkColor = (theme: 'Warning' | 'Danger' | 'Success') => {
    if (theme === 'Warning') return 'islands#yellowCircleDotIcon';
    if (theme === 'Danger') return 'islands#redCircleDotIcon';
    return 'islands#greenCircleDotIcon';
};
export const getPipeColor = (pointsIds: number[]) => {
    const pipePoints = pointsIds.map((pointId) => {
        return points[Number(pointId) - 1].theme;
    });

    let type = 0;

    pipePoints.forEach((pipePoint) => {
        if (pipePoint === 'Danger') {
            type = 2;
        }
        if (type < 2 && pipePoint === 'Warning') {
            type = 1;
        }
    });

    return type === 0
        ? {theme: 'success', color: '#20b024'}
        : type === 2
          ? {theme: 'danger', color: '#f0132d'}
          : {theme: 'warning', color: '#ecf013'};
};

export const getPointsFromPipes = (pipes: any) => {
    const pointsSet = new Set();
    pipes.forEach((pipe: any) => {
        pipe.children.forEach((child: any) => pointsSet.add(child - 1));
    });

    const solPoints = [];
    for (const value of pointsSet.values()) {
        solPoints.push(points[Number(value)]);
    }

    return solPoints;
};
