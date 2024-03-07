import {GeoObject, Map, Placemark, YMaps} from '@pbe/react-yandex-maps';
import {
    TPoints,
    getCoordinates,
    getPipeColor,
    getPlacemarkColor,
    getPointsFromPipes,
    mapState,
    points,
} from '../../utils';

export const MapComponent = ({pipes}: any) => {
    return (
        <YMaps>
            <Map width={'75vw'} height={'720px'} state={mapState}>
                {getPointsFromPipes(pipes).map((point: TPoints) => {
                    return (
                        <Placemark
                            defaultGeometry={point.coordinates}
                            onClick={() => {
                                console.log(point.id);
                            }}
                            options={{
                                iconImageSize: [10, 10],
                                preset: getPlacemarkColor(point.theme),
                            }}
                            key={point.id}
                        />
                    );
                })}

                {pipes.map((pipe: any) => {
                    return (
                        <GeoObject
                            geometry={{
                                type: 'LineString',
                                coordinates: getCoordinates(pipe.children),
                            }}
                            options={{
                                geodesic: true,
                                strokeWidth: 5,
                                strokeColor: getPipeColor(pipe.children).color,
                            }}
                            key={pipe.name}
                        />
                    );
                })}
            </Map>
        </YMaps>
    );
};
