import {FC} from 'react';
import {TPoints} from '../../../../utils';
import {Placemark} from '@pbe/react-yandex-maps';
import {v4 as uuidv4} from 'uuid';

type Props = {
    drones: TPoints[];
    callback: (arg1: any) => void;
};
export const DroneMap: FC<Props> = ({drones, callback}) => {
    return (
        <>
            {drones.map((drone: TPoints) => {
                return (
                    <>
                        <Placemark
                            defaultGeometry={drone.coordinates}
                            onClick={() => {
                                console.log(drone.id);
                                callback({isOpen: true, content: drone, type: 'drone'});
                            }}
                            options={{
                                iconImageSize: [10, 10],
                                preset: 'islands#blueCircleDotIcon',
                            }}
                            key={uuidv4()}
                        />
                    </>
                );
            })}
        </>
    );
};
