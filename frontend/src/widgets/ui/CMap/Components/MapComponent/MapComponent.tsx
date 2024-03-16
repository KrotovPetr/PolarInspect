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
import {Modal} from '@gravity-ui/uikit';

export const MapComponent = ({pipes}: any) => {
    const [openModal, setOpenModal] = useState<any>(false);
    return (
        <>
            <YMaps>
                <Map width={'100%'} height={'720px'} state={mapState}>
                    {getPointsFromPipes(pipes).map((point: TPoints) => {
                        return (
                            <Placemark
                                defaultGeometry={point.coordinates}
                                onClick={() => {
                                    console.log(point.id);
                                    setOpenModal({isOpen: true, content: point});
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
            {/* <Modal open={openModal.isOpen} onClose={() => setOpenModal(false)}>
               <div className={classes.header}>

               </div>
            </Modal> */}
        </>
    );
};
