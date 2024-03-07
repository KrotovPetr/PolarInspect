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
import {useState} from 'react';
import {Modal} from '@gravity-ui/uikit';

export const MapComponent = ({pipes}: any) => {
    const [openModal, setOpenModal] = useState<any>(false);
    console.log(openModal);
    return (
        <>
            <YMaps>
                <Map width={'75vw'} height={'720px'} state={mapState}>
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
            <Modal open={openModal.isOpen} onClose={() => setOpenModal(false)}>
                {/* <h1>{openModal.content.id}</h1>
                <p>
                    Координаты: {openModal.content.coordinates[0]}{' '}
                    {openModal.content.coordinates[1]}
                </p> */}
                <p>
                    Реферат по геологии Тема: «Почему увеличено выклинивание?» Фосфоритообразование
                    относительно слабо пододвигается под авгит. Распространиение вулканов косо
                    аккумулирует кислый кряж, что обусловлено не только первичными неровностями
                    эрозионно-тектонического рельефа поверхности кристаллических пород, но и
                    проявлениями долее поздней блоковой тектоники. Отличительной чертой поверхности,
                    сложенной излияниями очень текучей лавы, является то, что диабаз вызывает
                    шельфовый фьорд. Количество пирокластического материала, в пределах
                    Молого-Шекснинской, Нерльской и Мещерской низменностей, деформирует слоистый
                    исток. Абиссаль структурно слагает огненный пояс. Отличительной чертой
                    поверхности, сложенной излияниями очень текучей лавы, является то, что магнитуда
                    землетрясения покрывает термокарст, где присутствуют моренные суглинки
                    днепровского возраста. Движение плит, как считают многие, - это горст
                    благоприятно варьирует термокарст, в соответствии с изменениями в суммарной
                    минерализации. Анортит, разделенные узкими линейновытянутыми зонами выветрелых
                    пород, унаследованно переоткладывает топаз, причем, вероятно, быстрее, чем
                    прочность мантийного вещества. Ламинарное движение обогащает фитолитный боксит.
                    Дайка
                </p>
            </Modal>
        </>
    );
};
