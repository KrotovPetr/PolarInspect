import {Button, Label} from '@gravity-ui/uikit';
import {FC} from 'react';
import BadSupport from '../../shared/images/support2.png';
import classes from './PlacemarkInfo.module.css';
import {LineGraph} from '../../shared/ui';
import {
    lineGraphData,
    lineGraphData2,
} from '../../widgets/ui/CStats/Components/CStatsGraphContainer/utils';

type Props = {
    content: any;
};
export const PlacemarkInfo: FC<Props> = ({content}) => {
    return (
        <>
            {/* <Label value={'Возможное подтопление опоры'} theme={'danger'}>
                Danger
            </Label> */}
            {/* <img src={BadSupport} className={classes.image} /> */}
            <div className={classes.lineGraph}>
                <LineGraph size="m" data={lineGraphData} name="Alerts" />
                <LineGraph size="m" data={lineGraphData2} name="Warnings" />
            </div>
            <div className={classes.buttons}>
                <Button view="outlined-info">Отчёт</Button>
            </div>
        </>
    );
};
