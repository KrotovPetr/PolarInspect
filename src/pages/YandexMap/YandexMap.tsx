import {Map, ObjectManager, YMaps, GeoObject} from '@pbe/react-yandex-maps';
import {FC} from 'react';
import {collection, mapState} from './utils';
import {
    Area,
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    AreaChart,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

export const YandexMap: FC = () => {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <>
            <YMaps>
                <Map width="80vw" height="70vh" state={mapState}>
                    <ObjectManager
                        objects={{
                            openBalloonOnClick: true,
                        }}
                        options={{
                            clusterize: true,
                            gridSize: 32,
                        }}
                        defaultFeatures={collection}
                        modules={[
                            'objectManager.addon.objectsBalloon',
                            'objectManager.addon.clustersBalloon',
                        ]}
                    />
                    <GeoObject
                        geometry={{
                            type: 'LineString',
                            coordinates: [
                                [61.699623, 30.690952],
                                [61.703602, 30.680139],
                                [61.705707, 30.672616],
                            ],
                        }}
                        options={{
                            geodesic: true,
                            strokeWidth: 5,
                            strokeColor: '#F008',
                        }}
                    />
                </Map>
            </YMaps>
        </>
    );
};
