import React, {FC} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {TSize} from '../../../types/sizes';
import classes from './LineGraph.module.css';
import {buildOptions} from './utils';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type Props = {
    data: ChartData<any>;
    size?: TSize;
    name?: string;
};

export const LineGraph: FC<Props> = ({size = 'dynamic', data, name = ''}) => {
    return (
        <div className={classes[`lineBox${size.toUpperCase()}`]}>
            <Line options={buildOptions(name)} data={data} />
        </div>
    );
};
