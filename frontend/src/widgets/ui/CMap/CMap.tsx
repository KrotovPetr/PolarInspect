import classes from './CMap.module.css';
import {MapComponent} from './Components';
import {drones} from './utils';

export const CMap = () => {
    return (
        <div className={classes.mapContainer}>
            <MapComponent pipes={[]} points={drones} type={'CV'} />
        </div>
    );
};
