import {FC} from 'react';
import classes from './CStats.module.css';
import {CStatsGraphContainer} from './Components';

export const CStats: FC = () => {
    return (
        <div className={classes.stats}>
            <CStatsGraphContainer />
        </div>
    );
};
