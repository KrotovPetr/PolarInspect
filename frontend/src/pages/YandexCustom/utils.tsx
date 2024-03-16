import {initialValue} from '../../features/getFilterForm/ui/utils';

export const getInitialValue = () => {
    const parsedValue = localStorage.getItem('filters');

    return parsedValue ? JSON.parse(parsedValue) : initialValue;
};
