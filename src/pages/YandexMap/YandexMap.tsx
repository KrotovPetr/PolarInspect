import {Map, ObjectManager, YMaps, GeoObject} from '@pbe/react-yandex-maps';
import {FC} from 'react';
import {collection, mapState} from './utils';

export const YandexMap: FC = () => {
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
