import {FC} from 'react';
import classes from './CVProcesses.module.css';
import {GraphCard} from '../../../shared/ui';
import {cvprocesses} from './utils';
import {ProcessCard} from './Components/ProcessCard';

export const CVProcesses: FC = () => {
    return (
        <div className={classes.processes}>
            <div className={classes.pending}>
                <GraphCard name="В очереди">
                    <div className={classes.cardsContainer}>
                        {cvprocesses.map((cvprocess) => (
                            <ProcessCard key={cvprocess.id} data={cvprocess} />
                        ))}
                    </div>
                </GraphCard>
            </div>
            <div className={classes.success}>
                <GraphCard name="Выполнено">Тут будут карточки</GraphCard>
            </div>
            <div className={classes.failed}>
                <GraphCard name="Ошибка">Тут тоже будут карточки</GraphCard>
            </div>
            <div className={classes.inWork}>
                <GraphCard name="Обрабатывается">НеожиданноЮ но тут тоже будут карточки</GraphCard>
            </div>
        </div>
    );
};
