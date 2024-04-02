import {FC} from 'react';
import classes from './CStats.module.css';
import {MapComponent} from '../CMap/Components';
import {pipes} from '../CMap/utils';

export const CStats: FC = () => {
    return (
        <div className={classes.stats}>
            {/* <CStatsGraphContainer /> */}
            <MapComponent pipes={pipes} points={[]} type={'stats'} />
        </div>
    );
};
