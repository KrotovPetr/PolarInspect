import {Button, Label, Text} from '@gravity-ui/uikit';
import {FC} from 'react';
import classes from './PlacemarkInfo.module.css';
import {LineGraph} from '../../shared/ui';
import {handleExport, lineData1, lineData2} from './utils';

type Props = {
    content: any;
};
export const PlacemarkInfo: FC<Props> = ({content}) => {
    return (
        <>
            <div className={classes.description}>
                <div className={classes.charact}>
                    <Text className={classes.key}>Статус: </Text>
                    <Label theme={content ? content.theme.toLowerCase() : 'danger'}>
                        {content.title || ''}
                    </Label>
                </div>
                <div className={classes.charact}>
                    <Text className={classes.key}>Координаты: </Text>
                    <Text>
                        {content.coordinates[0]} {content.coordinates[1]}
                    </Text>
                </div>
            </div>

            <div className={classes.lineGraph}>
                <LineGraph data={lineData1} name="График подвижки опоры" />
            </div>
            <div className={classes.buttons}>
                <Button
                    view="outlined-info"
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        handleExport(e);
                    }}
                >
                    Export CSV
                </Button>
            </div>
        </>
    );
};
