import {Map, YMaps} from '@pbe/react-yandex-maps';
import {TPipe, TPoints, mapState} from '../../utils';
import {FC, useState} from 'react';
import {CustomModal} from '../../../../../shared/ui';
import {DroneInfo, PlacemarkInfo} from '../../../../../features';
import {DroneMap, StatsMap} from './Components';
import {DEFAULT_MODAL_STATE} from './utils';

type Props = {
    pipes?: TPipe[];
    points?: TPoints[];
    type: string;
};

export const MapComponent: FC<Props> = ({pipes = [], points = [], type}) => {
    const [openModal, setOpenModal] = useState<any>(DEFAULT_MODAL_STATE);
    const callback = (obj: any) => {
        setOpenModal(obj);
    };
    return (
        <>
            <YMaps query={{load: 'package.full'}}>
                <Map width={'100%'} height={'85vh'} state={mapState as ymaps.IMapState}>
                    {type === 'stats' ? (
                        <StatsMap pipes={pipes} callback={callback} />
                    ) : (
                        <DroneMap drones={points} callback={callback} />
                    )}
                </Map>
            </YMaps>
            <CustomModal
                name={`# 183-F`}
                open={openModal.isOpen}
                onClose={() => setOpenModal(DEFAULT_MODAL_STATE)}
            >
                {openModal.type === 'drone' ? (
                    <DroneInfo content={openModal.content} />
                ) : (
                    openModal.isOpen && <PlacemarkInfo content={openModal.content} />
                )}
            </CustomModal>
        </>
    );
};
