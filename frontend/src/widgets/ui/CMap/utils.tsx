import BadSupport from '../../../shared/images/support2.png';

export type TPoints = {
    id: string;
    coordinates: number[];
    title: string;
    theme: 'Warning' | 'Success' | 'Danger';
    image?: string;
};
export const points: TPoints[] = [
    {
        id: '1',
        coordinates: [61.703602, 30.680139],
        title: 'Железнодорожная станция',
        theme: 'Success',
        image: BadSupport,
    },
    {
        id: '2',
        coordinates: [61.699623, 30.690952],
        title: 'Пристань Метеоров',
        theme: 'Success',
        image: BadSupport,
    },
    {
        id: '3',
        coordinates: [61.705707, 30.672616],
        title: 'Парк Ваккасалми',
        theme: 'Success',
        image: BadSupport,
    },
    {
        id: '4',
        coordinates: [61.715707, 30.686616],
        title: 'Хеллоу',
        theme: 'Danger',
        image: BadSupport,
    },
    {
        id: '5',
        coordinates: [61.701028, 30.693277],
        title: 'Хеллоу',
        theme: 'Danger',
        image: BadSupport,
    },
    {
        id: '6',
        coordinates: [61.701506, 30.69255],
        title: 'Хеллоу',
        theme: 'Success',
        image: BadSupport,
    },
    {
        id: '7',
        coordinates: [61.702278, 30.694517],
        title: 'Хеллоу',
        theme: 'Success',
        image: BadSupport,
    },
    {
        id: '8',
        coordinates: [61.700986, 30.699826],
        title: 'Хеллоу',
        theme: 'Success',
        image: BadSupport,
    },
    {
        id: '9',
        coordinates: [61.715707, 30.686616],
        title: 'Хеллоу',
        theme: 'Success',
        image: BadSupport,
    },
    {
        id: '10',
        coordinates: [61.703353, 30.707435],
        title: 'Хеллоу',
        theme: 'Success',
        image: BadSupport,
    },
    {
        id: '11',
        coordinates: [61.70383, 30.706096],
        title: 'Хеллоу',
        theme: 'Warning',
        image: BadSupport,
    },
    {
        id: '12',
        coordinates: [61.704206, 30.692918],
        title: 'Хеллоу',
        theme: 'Danger',
        image: BadSupport,
    },
    {
        id: '13',
        coordinates: [61.702956, 30.68928],
        title: 'Хеллоу',
        theme: 'Danger',
        image: BadSupport,
    },
    {
        id: '14',
        coordinates: [61.715707, 30.686616],
        title: 'Хеллоу',
        theme: 'Success',
        image: BadSupport,
    },
    {
        id: '15',
        coordinates: [61.703937, 30.687519],
        title: 'Хеллоу',
        theme: 'Success',
        image: BadSupport,
    },
    {
        id: '16',
        coordinates: [61.705212, 30.68486],
        title: 'Хеллоу',
        theme: 'Warning',
        image: BadSupport,
    },
    {
        id: '17',
        coordinates: [61.70235, 30.691283],
        title: 'Хеллоу',
        theme: 'Danger',
        image: BadSupport,
    },
    {
        id: '18',
        coordinates: [61.702756, 30.684779],
        title: 'Something about somebody',
        theme: 'Success',
        image: BadSupport,
    },
];

export const pipes = [
    {id: 'Участок Северный', children: [2, 1, 3]},
    {id: 'Участок Южный', children: [2, 18, 16, 14]},
    {id: 'Участок Западный', children: [2, 15, 14]},
    {id: 'Участок Восточный', children: [2, 8, 11, 10]},
    {id: 'Участок Юго-западный', children: [1, 7, 8]},
    {id: 'Участок Юго-восточный', children: [2, 6, 9]},
    {id: 'Участок Северо-западный', children: [2, 5, 12]},
    {id: 'Участок Северо-восточный', children: [2, 7, 11]},
];

export const getCoordinates = (pointsIds: string[]) => {
    const pipePoints = pointsIds.map((pointId) => {
        return points[Number(pointId) - 1].coordinates;
    });

    return pipePoints;
};

export const mapState = {
    center: [61.700265, 30.689362],
    zoom: 15.4,
    behaviors: ['default', 'scrollZoom'],
};

export const getPlacemarkColor = (theme: 'Warning' | 'Danger' | 'Success') => {
    if (theme === 'Warning') return 'islands#yellowDotIcon';
    if (theme === 'Danger') return 'islands#redDotIcon';
    return 'islands#greenDotIcon';
};

export const getPipeColor = (pointsIds: string[]) => {
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
