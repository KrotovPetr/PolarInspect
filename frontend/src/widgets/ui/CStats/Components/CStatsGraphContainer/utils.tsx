import {CircleExclamationFill, TriangleExclamationFill} from '@gravity-ui/icons';

export const pieGraphData = {
    redraw: true,
    labels: ['Danger', 'Warning', 'Ok'],
    datasets: [
        {
            label: 'Zones',
            data: [1, 1, 4],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const lineGraphData = {
    labels,
    datasets: [
        {
            label: 'Alerts',
            data: [0, 2, 0, 0, 1, 3, 0],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            yAxisID: 'y',
        },
    ],
};

export const lineGraphData2 = {
    labels,
    datasets: [
        {
            label: 'Warnings',
            data: [3, 1, 2, 0, 1, 0, 1],
            borderColor: 'rgba(255, 206, 86, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.5)',
            yAxisID: 'y',
        },
    ],
};

export const alerts = [
    {key: 'WAR4381', theme: 'warning', icon: TriangleExclamationFill, value: 'Подтопление'},
    {
        key: 'ERR75',
        theme: 'danger',
        icon: CircleExclamationFill,
        value: 'Отклонение положения от нормы',
    },
    {key: 'Unknown', theme: 'danger', icon: CircleExclamationFill, value: 'Опора спилена'},
    {key: 'ERR76', theme: 'warning', icon: TriangleExclamationFill, value: 'Карстовый провал'},
];
