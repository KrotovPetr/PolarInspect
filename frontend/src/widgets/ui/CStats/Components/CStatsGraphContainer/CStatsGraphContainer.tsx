import {LineGraph, PieGraph} from '../../../../../shared/ui';
import {alerts, lineGraphData, lineGraphData2, pieGraphData} from './utils';
import {GraphCard} from '../../../../../shared/ui';
import classes from './CStatsGraphContainer.module.css';
import {Label} from '@gravity-ui/uikit';

export const CStatsGraphContainer = () => {
    return (
        <div className={classes.graphContainer}>
            <GraphCard name={'Статистика отклонений'}>
                <PieGraph data={pieGraphData} size="xl" />
            </GraphCard>
            <GraphCard name={'Количество инцидентов'}>
                <div className={classes.lineGraph}>
                    <LineGraph size="xl" data={lineGraphData} name="Alerts" />
                    <LineGraph size="xl" data={lineGraphData2} name="Warnings" />
                </div>
            </GraphCard>
            <GraphCard name={'Инцеденты'}>
                <div className={classes.alertMessages}>
                    {alerts.map((alert) => (
                        <Label theme={alert.theme as any} value={alert.value}>
                            {alert.key}
                        </Label>
                    ))}
                </div>
            </GraphCard>
            <GraphCard name={'Место под ваши идеи'}>
                <h1>Тут надо чем-то заполнить</h1>
            </GraphCard>
        </div>
    );
};
