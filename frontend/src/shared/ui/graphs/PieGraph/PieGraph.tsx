import {Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData} from 'chart.js';
import {FC} from 'react';
import {Pie} from 'react-chartjs-2';
import classes from './PieGraph.module.css';
import {TSize} from '../../../types/sizes';

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
    data: ChartData<any>;
    size?: TSize;
};

export const PieGraph: FC<Props> = ({data, size = 'xl'}) => {
    return (
        <div className={classes[`pieBox${size.toUpperCase()}`]}>
            <Pie data={data} />
        </div>
    );
};
