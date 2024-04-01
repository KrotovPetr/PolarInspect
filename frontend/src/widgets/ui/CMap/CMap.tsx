import classes from './CMap.module.css';
import {MapComponent} from './Components';
import {pipes} from './utils';

export const CMap = () => {
    return (
        <div className={classes.mapContainer}>
            <MapComponent pipes={pipes} />
            {/* <iframe
                src="https://mygeomap.ru/?ysclid=ltye100xr6154826021"
                width="100%"
                height="900px"
            /> */}
        </div>
    );
};
