import {Card, Label, Progress, Text} from '@gravity-ui/uikit';
import classes from './Routes.module.css';
import {TRoute} from '../../utils';
import {FC} from 'react';
import {getLabelContent, getLabelTheme} from './utils';

type Props = {
    routes: TRoute[];
};

export const Routes: FC<Props> = ({routes}) => {
    return (
        <>
            <Text color={'secondary'}>Маршруты</Text>
            <div className={classes.body}>
                {routes.map((route) => (
                    <Card
                        theme="normal"
                        type="selection"
                        className={classes.routeCard}
                        key={route.id}
                        view={'filled'}
                    >
                        <div className={classes.header}>
                            <Text>Маршрут #{route.id}</Text>
                            <Label theme={getLabelTheme(route)}>{getLabelContent(route)}</Label>
                        </div>
                    </Card>
                ))}
            </div>
        </>
    );
};
