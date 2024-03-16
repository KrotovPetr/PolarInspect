export const buildOptions = (name: string) => {
    return {
        responsive: true,
        interaction: {
            mode: 'index' as const,
            intersect: false,
        },
        stacked: false,
        plugins: {
            title: {
                display: true,
                text: name,
            },
            legend: {
                display: false,
            },
        },
        legend: {
            display: false,
        },
        scales: {
            y: {
                type: 'linear' as const,
                display: true,
                position: 'left' as const,
            },
        },
    };
};
