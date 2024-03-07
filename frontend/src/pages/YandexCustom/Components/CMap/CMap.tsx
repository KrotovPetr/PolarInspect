import {useState} from 'react';
import classes from './CMap.module.css';
import {AsideMenu, MapComponent} from './Components';
import {pipes} from './utils';

export const CMap = () => {
    const [currentPipe, setPipe] = useState(pipes);

    const callback = (value: any) => {
        setPipe(value);
    };
    return (
        <>
            <div className={classes.mapContainer}>
                <AsideMenu currentPipes={currentPipe} callback={callback} />
                <MapComponent pipes={currentPipe} />
            </div>
        </>
    );
};
