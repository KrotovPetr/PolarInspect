const labels = ['Январь', 'Февраль', 'Март', 'Апрель', 'Maй', 'Июнь', 'Июль'];
export const lineData1 = {
    labels,
    datasets: [
        {
            label: 'Warnings',
            data: [3, 1, 2, 0, 1, 0, 1],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            yAxisID: 'y',
        },
    ],
};

export const lineData2 = {
    labels,
    datasets: [
        {
            label: 'Warnings',
            data: [0, 0, 1, 0, 1, 0, 0],
            borderColor: 'rgba(255, 206, 86, 1)',
            backgroundColor: 'rgba(255, 206, 86, 0.5)',
            yAxisID: 'y',
        },
    ],
};

export const convertToCSV = (dataArray: any) => {
    const csvRows: string[] = [];
    dataArray.forEach((row: any) => {
        const rowValues = Object.values(row).join(','); // Получаем значения каждого свойства объекта и объединяем их через запятую
        csvRows.push(rowValues);
    });
    return csvRows.join('\n'); // Объединяем строки CSV через новую строку
};

const dataArray = [
    {
        id: 1,
        deviationX: 0.5,
        deviationY: -0.2,
        deviationZ: 0.1,
    },
    {
        id: 2,
        deviationX: -0.1,
        deviationY: 0.3,
        deviationZ: -0.05,
    },
    {
        id: 3,
        deviationX: 0.3,
        deviationY: -0.4,
        deviationZ: 0.2,
    },
];

export const handleExport = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const csvData = convertToCSV([dataArray]);

    const blob = new Blob([csvData], {type: 'text/csv'});

    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
};
