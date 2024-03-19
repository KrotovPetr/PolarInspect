import {GraphCard, LineGraph, PieGraph} from '../../../../../shared/ui';
import {
    lineGraphData,
    pieGraphData,
} from '../../../CStats/Components/CStatsGraphContainer/utils';
import classes from './Info.module.css';

export const Info = () => {
    return (
        <>
            <div className={classes.linegraph}>
                <GraphCard name={'Статистика полётов'}>
                    <PieGraph data={pieGraphData} size="xl" />
                </GraphCard>
            </div>
            <div className={classes.stats}>
                <GraphCard name={'Статистика сбора данных'}>
                    <h1>Что-нибудь придумать</h1>
                </GraphCard>
            </div>
            <div className={classes.upload}>
                <GraphCard name={'Выявления проблем'}>
                    <LineGraph data={lineGraphData} size="xl" />
                </GraphCard>
            </div>
        </>
    );
};
