import {PieGraph} from '../../../shared/ui';
import {data} from './utils';

export const CStats = () => {
    return (
        <>
            <PieGraph data={data} size="xl" />
        </>
    );
};
