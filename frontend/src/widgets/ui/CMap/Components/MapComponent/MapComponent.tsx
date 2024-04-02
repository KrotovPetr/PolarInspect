import {Map, Placemark, YMaps} from '@pbe/react-yandex-maps';
import {TPipe, TPoints, getPlacemarkColor, getPointsFromPipes, mapState} from '../../utils';
import {useState} from 'react';
import {CustomModal} from '../../../../../shared/ui';
import {DroneInfo, PlacemarkInfo} from '../../../../../features';
import {buildGeoObjectPipe, drones} from './utils';

export const MapComponent = ({pipes}: any) => {
    const [openModal, setOpenModal] = useState<any>(false);
    console.log(openModal);
    return (
        <>
            <YMaps query={{load: 'package.full'}}>
                <Map width={'100%'} height={'85vh'} state={mapState as ymaps.IMapState}>
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

                    {pipes.map((pipe: TPipe) => {
                        return buildGeoObjectPipe(pipe);
                    })}
                    {/* {drones.map((drone: any) => {
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
                    })} */}
                </Map>
            </YMaps>
            {openModal.content && (
                <CustomModal
                    name={`# 183-F`}
                    open={openModal.isOpen}
                    onClose={() => setOpenModal(false)}
                >
                    {openModal.type === 'drone' ? (
                        <DroneInfo content={openModal.content} />
                    ) : (
                        <PlacemarkInfo
                            content={openModal.content}
                            onClose={() => setOpenModal(false)}
                        />
                    )}
                </CustomModal>
            )}
        </>
    );
};
