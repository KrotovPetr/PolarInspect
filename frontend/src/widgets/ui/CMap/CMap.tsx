import classes from './CMap.module.css';
import {MapComponent} from './Components';
import {pipes} from './utils';

export const CMap = () => {
    return (
        <div className={classes.mapContainer}>
            <MapComponent pipes={pipes} />
        </div>
    );
};
