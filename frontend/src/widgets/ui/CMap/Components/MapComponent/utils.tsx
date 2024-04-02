import {GeoObject} from '@pbe/react-yandex-maps';
import {TPipe, getCoordinates, getPipeColor} from '../../utils';
import {v4 as uuidv4} from 'uuid';

type TDrone = {
    id: string;
    coordinates: number[];
    title: string;
    href?: string;
};

export const drones: TDrone[] = [
    {
        id: '1',
        coordinates: [61.702943, 30.691633],
        title: 'Мавик 1',
        href: 'https://www.youtube.com/watch?v=p5Fftcg56EU',
    },
    {
        id: '2',
        coordinates: [61.699046, 30.69357],
        title: 'Мавик 2',
        href: 'https://www.youtube.com/watch?v=k2q6y_e1kyY',
    },
    {
        id: '3',
        coordinates: [61.704223, 30.709222],
        title: 'Мавик 3',
        href: 'https://www.youtube.com/watch?v=eNqLtY0bkmk',
    },
    {
        id: '4',
        coordinates: [61.71024, 30.703145],
        title: 'Мавик 4',
        href: 'https://www.youtube.com/watch?v=pB0lxdsGkBs',
    },
    {
        id: '5',
        coordinates: [61.703691, 30.692875],
        title: 'Мавик 5',
        href: 'https://www.youtube.com/watch?v=_QHdnnaUh38',
    },
];

export const buildGeoObjectPipe = (pipe: TPipe) => {
    const pipes = [];
    for (let i = 1; i < pipe.children.length; i++) {
        pipes.push(
            <GeoObject
                geometry={{
                    type: 'LineString',
                    coordinates: getCoordinates([pipe.children[i - 1], pipe.children[i]]),
                }}
                options={{
                    geodesic: true,
                    strokeWidth: 5,
                    strokeColor: getPipeColor([pipe.children[i - 1], pipe.children[i]]).color,
                }}
                key={uuidv4()}
            />,
        );
    }

    return pipes;
};
