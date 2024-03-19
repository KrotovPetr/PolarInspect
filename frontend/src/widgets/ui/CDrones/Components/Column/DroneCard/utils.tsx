export const getBatteryTheme = (percent: number) => {
    return percent > 70 ? 'success' : percent < 30 ? 'danger' : 'warning';
};
