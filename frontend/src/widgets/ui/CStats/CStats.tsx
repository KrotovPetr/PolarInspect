import {FC} from 'react';
import classes from './CStats.module.css';
import {pipes} from '../CMap/utils';
import {MapComponent} from '../CMap/Components';

export const CStats: FC = () => {
    return (
        <div className={classes.stats}>
            {/* <CStatsGraphContainer /> */}
            <MapComponent pipes={pipes} points={[]} type={'stats'} />
        </div>
    );
};
