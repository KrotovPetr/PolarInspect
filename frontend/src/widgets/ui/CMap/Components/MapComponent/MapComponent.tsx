import {GeoObject, Map, Placemark, YMaps} from '@pbe/react-yandex-maps';
import {
    TPoints,
    getCoordinates,
    getPipeColor,
    getPlacemarkColor,
    getPointsFromPipes,
    mapState,
} from '../../utils';
import {useState} from 'react';
import {CustomModal} from '../../../../../shared/ui';
import {DroneInfo, PlacemarkInfo} from '../../../../../features';
import {drones} from './utils';

export const MapComponent = ({pipes}: any) => {
    const [openModal, setOpenModal] = useState<any>(false);
    return (
        <>
            <YMaps query={{load: 'package.full'}}>
                <Map width={'100%'} height={'85vh'} state={mapState}>
                    {getPointsFromPipes(pipes).map((point: TPoints) => {
                        return (
                            <Placemark
                                defaultGeometry={point.coordinates}
                                onClick={() => {
                                    console.log(point.id);
                                    setOpenModal({isOpen: true, content: point, type: 'placemark'});
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
                    {drones.map((drone: any) => {
                        return (
                            <Placemark
                                defaultGeometry={drone.coordinates}
                                onClick={() => {
                                    console.log(drone.id);
                                    setOpenModal({isOpen: true, content: drone, type: 'drone'});
                                }}
                                options={{
                                    iconImageSize: [10, 10],
                                    preset: 'islands#blueDotIcon',
                                }}
                                key={drone.name}
                            />
                        );
                    })}
                </Map>
            </YMaps>
            <CustomModal name={'№4632'} open={openModal.isOpen} onClose={() => setOpenModal(false)}>
                {openModal.type === 'drone' ? (
                    <DroneInfo content={openModal.content}/>
                ) : (
                    <PlacemarkInfo content={openModal.content} />
                )}
            </CustomModal>
        </>
    );
};
