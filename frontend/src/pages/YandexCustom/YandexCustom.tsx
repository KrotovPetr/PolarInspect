import {RadioButton} from '@gravity-ui/uikit';
import classes from './YandexCustom.module.css';
import {useState} from 'react';
import {CMap, CStats} from './Components';

export const YandexCustom = () => {
    const [isMap, setOption] = useState<'map' | 'stats'>('map');
    return (
        <>
            <div
                className={classes.customHeader}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    e.stopPropagation();
                    setOption((e.target.value as 'map' | 'stats') ?? 'map');
                }}
            >
                <RadioButton>
                    <RadioButton.Option value="map">Карта</RadioButton.Option>
                    <RadioButton.Option value="stats">Статистика</RadioButton.Option>
                </RadioButton>
            </div>
            {isMap === 'map' ? <CMap /> : <CStats />}
        </>
    );
};
