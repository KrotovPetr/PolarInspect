import {Card, Text} from '@gravity-ui/uikit';
import {FC, ReactNode} from 'react';
import classes from './GraphCard.module.css';

type Props = {
    name: string;
    children: ReactNode;
};
export const GraphCard: FC<Props> = ({name, children}) => {
    return (
        <Card type="action" className={classes.graphCard}>
            <Text color="secondary">{name}</Text>
            {children}
        </Card>
    );
};
