export type TDrone = {
    id: number;
    name: string;
    status: string;
    battery: number;
    href: string;
    coordinates: Array<number>;
};

export const drones: TDrone[] = [
    {
        id: 1,
        name: 'Drone 1',
        status: 'waited',
        battery: 60,
        href: 'https://www.youtube.com/watch?v=p5Fftcg56EU',
        coordinates: [61.702943, 30.691633],
    },
    {
        id: 2,
        name: 'Drone 2',
        status: 'accepted',
        battery: 83,
        href: 'https://www.youtube.com/watch?v=p5Fftcg56EU',
        coordinates: [61.702943, 30.691633],
    },
    {
        id: 3,
        name: 'Drone 3',
        status: 'waited',
        battery: 100,
        href: 'https://www.youtube.com/watch?v=k2q6y_e1kyY',
        coordinates: [61.699046, 30.69357],
    },
    {
        id: 4,
        name: 'Drone 4',
        status: 'accepted',
        battery: 43,
        href: 'https://www.youtube.com/watch?v=k2q6y_e1kyY',
        coordinates: [61.699046, 30.69357],
    },
    {
        id: 5,
        name: 'Drone 5',
        status: 'denied',
        battery: 2,
        href: 'https://www.youtube.com/watch?v=eNqLtY0bkmk',
        coordinates: [61.704223, 30.709222],
    },
    {
        id: 6,
        name: 'Drone 6',
        status: 'waited',
        battery: 76,
        href: 'https://www.youtube.com/watch?v=eNqLtY0bkmk',
        coordinates: [61.704223, 30.709222],
    },
    {
        id: 7,
        name: 'Drone 7',
        status: 'waited',
        battery: 95,
        href: 'https://www.youtube.com/watch?v=pB0lxdsGkBs',
        coordinates: [61.71024, 30.703145],
    },
    {
        id: 8,
        name: 'Drone 8',
        status: 'waited',
        battery: 27,
        href: 'https://www.youtube.com/watch?v=pB0lxdsGkBs',
        coordinates: [61.71024, 30.703145],
    },
    {
        id: 9,
        name: 'Drone 9',
        status: 'waited',
        battery: 40,
        href: 'https://www.youtube.com/watch?v=_QHdnnaUh38',
        coordinates: [61.703691, 30.692875],
    },
    {
        id: 10,
        name: 'Drone 10',
        status: 'waited',
        battery: 81,
        href: 'https://www.youtube.com/watch?v=_QHdnnaUh38',
        coordinates: [61.703691, 30.692875],
    },
];

export const ItemTypes = {
    WAITED: 'waited',
    ACCEPTED: 'accepted',
    DENIED: 'denied',
};

export type TRoute = {
    status: string;
    id: number;
    coordinates: number[][];
    droneId: number;
};

export const routes = [
    {id: 1, status: 'pending', coordinates: [], droneId: 1},
    {id: 2, status: 'aborted', coordinates: [], droneId: 2},
    {id: 3, status: 'created', coordinates: [], droneId: 3},
    {id: 4, status: 'done', coordinates: [], droneId: 4},
    {id: 5, status: 'pending', coordinates: [], droneId: 5},
    {id: 6, status: 'pending', coordinates: [], droneId: 6},
    {id: 7, status: 'done', coordinates: [], droneId: 7},
    {id: 8, status: 'done', coordinates: [], droneId: 8},
    {id: 9, status: 'created', coordinates: [], droneId: 9},
    {id: 10, status: 'pending', coordinates: [], droneId: 10},
];
