import ReactPlayer from 'react-player';
import classes from './DroneInfo.module.css';
import {FC} from 'react';
import {Button, Label, Progress, Text} from '@gravity-ui/uikit';
import {Map, Placemark, YMaps} from '@pbe/react-yandex-maps';
import {mapState} from '../../widgets/ui/CMap/utils';

type Props = {
    content: any;
};
export const DroneInfo: FC<Props> = ({content}) => {
    return (
        <div className={classes.droneInfo}>
            <div className={classes.body}>
                <div className={classes.metrics}>
                    <Text className={classes.text}>
                        <span>Модель:</span> <Text>Mavic Air 3</Text>
                    </Text>
                    <Text className={classes.text}>
                        <span>Уровень заряда:</span> <Text>{content.battery}%</Text>
                    </Text>
                    <Text className={classes.text}>
                        <span>Координаты:</span>{' '}
                        <Text>
                            {content.coordinates[0]} {content.coordinates[1]}
                        </Text>
                    </Text>
                    <Text className={classes.text}>
                        <span>Уникальный номер:</span> <Text>{content.id}</Text>
                    </Text>
                    <Text className={classes.text}>
                        <span>Текущий маршрут:</span> <Text>1</Text>
                    </Text>
                    <Text className={classes.text}>
                        <span>Ссылка:</span> <Text ellipsis={true}>{content.href}</Text>
                    </Text>
                </div>
                <YMaps>
                    <Map
                        width={'100%'}
                        height={'150px'}
                        state={{
                            center: content.coordinates,
                            zoom: 15.4,
                            behaviors: ['default', 'scrollZoom'],
                        }}
                    >
                        <Placemark
                            defaultGeometry={content.coordinates}
                            options={{
                                iconImageSize: [10, 10],
                                preset: 'islands#blueDotIcon',
                            }}
                        />
                    </Map>
                </YMaps>
            </div>

            <div className={classes.iframe}>
                <ReactPlayer
                    url={content.href}
                    loop={true}
                    stopOnUnmount={true}
                    playing={true}
                    width={'100%'}
                    muted={true}
                />
            </div>

            <div className={classes.buttons}>
                <Button view={'outlined-danger'}>Отозвать</Button>
            </div>
        </div>
    );
};
