import ReactDOMServer from 'react-dom/server';
import {CustomHint} from './components/CustomHint/CustomHint';
import BadSupport from '../../shared/images/support2.png';

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
        theme: 'Warning',
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
        theme: 'Danger',
        image: BadSupport,
    },
];

export const mapState = {
    center: [61.700265, 30.689362],
    zoom: 15.4,
    behaviors: ['default', 'scrollZoom'],
};

export const collection = {
    type: 'FeatureCollection',
    features: points.map((point, id) => {
        return {
            id: id,
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: point.coordinates,
            },
            properties: {
                balloonContent: ReactDOMServer.renderToString(<CustomHint data={point} />),
                clusterCaption: `Метка №${id + 1}`,
            },
        };
    }),
};
