import {Card, Icon, Label, Link, Text} from '@gravity-ui/uikit';
import classes from './CardComponent.module.css';
import {CircleCheckFill, CircleExclamationFill, TriangleExclamation} from '@gravity-ui/icons';
import {FC} from 'react';
import {getPipeColor} from '../../../../utils';

type Props = {
    card: any;
};

export const CardComponent: FC<Props> = ({card}) => {
    const mockedMessage =
        'Надпойменная терраса контрастна. Базальтовый слой, либо из самой плиты, либо из астеносферы.';
    const getIcon = (theme: 'warning' | 'danger' | 'success') => {
        if (theme === 'warning') {
            return TriangleExclamation;
        } else if (theme === 'danger') {
            return CircleExclamationFill;
        }

        return CircleCheckFill;
    };

    return (
        <Card type={'action'} key={card} className={classes.card}>
            <div className={classes.cardHeader}>
                <Text>
                    <span className={classes.key}>{card.id}</span>
                </Text>
                <Label
                    theme={getPipeColor(card.children).theme as 'warning' | 'danger' | 'success'}
                    size={'s'}
                    icon={<Icon size={16} data={getIcon(card.type)} />}
                >
                    <Text>{getPipeColor(card.children).theme}</Text>
                </Label>
            </div>

            <Text>
                <span className={classes.key}>Message:</span> {mockedMessage}
            </Text>
        </Card>
    );
};
