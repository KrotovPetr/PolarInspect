import {Card, Text} from '@gravity-ui/uikit';
import {FC} from 'react';
import classes from './ProcessCard.module.css';

type Props = {
    data: {
        id: number;
        loading: number;
        status: string;
    };
};
export const ProcessCard: FC<Props> = ({data}) => {
    return <Card className={classes.card}>
        <Text>{data.id}</Text>
    </Card>;
};
