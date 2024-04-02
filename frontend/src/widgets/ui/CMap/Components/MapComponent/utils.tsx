import {GeoObject, Placemark} from '@pbe/react-yandex-maps';
import {
    TPipe,
    TPoints,
    getCoordinates,
    getPipeColor,
    getPlacemarkColor,
    getPointsFromPipes,
} from '../../utils';
import {v4 as uuidv4} from 'uuid';

type TDrone = {
    id: string;
    coordinates: number[];
    title: string;
    href?: string;
};

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

export const buildPlaceMarkMap = (pipes: TPipe[], setOpenModal: (arg1: any) => void) => {
    getPointsFromPipes(pipes).map((point: TPoints) => {
        return (
            <Placemark
                defaultGeometry={point.coordinates}
                onClick={() => {
                    console.log(point.id);
                    setOpenModal({isOpen: true, content: point, type: 'placemark'});
                }}
                options={{
                    iconImageSize: [10, 10],
                    preset: getPlacemarkColor(point.theme ?? 'Danger'),
                }}
                key={point.id}
            />
        );
    });
};

export const DEFAULT_MODAL_STATE = {
    isOpen: false,
    content: {},
    type: 'placemark',
};
