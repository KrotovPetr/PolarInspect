import {Placemark} from '@pbe/react-yandex-maps';
import {TPipe, TPoints, getPlacemarkColor, getPointsFromPipes} from '../../../../utils';
import {buildGeoObjectPipe} from '../../utils';
import {FC} from 'react';

type Props = {
    pipes: TPipe[];
    callback: (arg1: any) => void;
};
export const StatsMap: FC<Props> = ({pipes, callback}) => {
    return (
        <>
            {getPointsFromPipes(pipes).map((point: TPoints) => {
                return (
                    <Placemark
                        defaultGeometry={point.coordinates}
                        onClick={() => {
                            console.log(point.id);
                            callback({isOpen: true, content: point, type: 'placemark'});
                        }}
                        options={{
                            iconImageSize: [10, 10],
                            preset: getPlacemarkColor(point.theme ?? 'Danger'),
                        }}
                        key={point.id}
                    />
                );
            })}

            {pipes.map((pipe: TPipe) => {
                return buildGeoObjectPipe(pipe);
            })}
        </>
    );
};
