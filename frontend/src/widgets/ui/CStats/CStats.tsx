import {PieGraph} from '../../../shared/ui';
import {data} from './utils';
import classes from './CStats.module.css';

export const CStats = () => {
    return (
        <div className={classes.statsContainer}>
            <h1>Stats</h1>
            <PieGraph data={data} size="xl" />
        </div>
    );
};
