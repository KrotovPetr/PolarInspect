import {FC} from 'react';
import classes from './CVStats.module.css';
import {GraphCard, LineGraph} from '../../../shared/ui';
import {lineGraphData} from '../CStats/Components/CStatsGraphContainer/utils';

export const CVStats: FC = () => {
    return (
        <div className={classes.cvstats}>
            <GraphCard name={'Загрузка CV модели'}>
                <LineGraph data={lineGraphData} />
            </GraphCard>
        </div>
    );
};
