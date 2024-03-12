import {useState} from 'react';
import classes from './CMap.module.css';
import {MapComponent} from './Components';
import {pipes} from './utils';

export const CMap = () => {
    const [currentPipe, setPipe] = useState(pipes);

;
    return (
        <>
            <div className={classes.mapContainer}>
                <MapComponent pipes={currentPipe} />
            </div>
        </>
    );
};
