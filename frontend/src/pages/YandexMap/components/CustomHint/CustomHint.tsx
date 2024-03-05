import {Icon, Label, RadioButton, RadioButtonOption, Text} from '@gravity-ui/uikit';
import {FC, useState} from 'react';
import {TPoints} from '../../utils';
import {CircleCheckFill, CircleExclamationFill, TriangleExclamation} from '@gravity-ui/icons';
import classes from './CustomHint.module.css';

type Props = {
    data: TPoints;
};

export const CustomHint: FC<Props> = ({data}) => {
    const [type, setType] = useState<string>('Image');
    const getIcon = (theme: 'Warning' | 'Danger' | 'Success') => {
        if (theme === 'Warning') {
            return TriangleExclamation;
        } else if (theme === 'Danger') {
            return CircleExclamationFill;
        }

        return CircleCheckFill;
    };

    const options: RadioButtonOption[] = [
        {value: 'Image', content: 'Image'},
        {value: 'Metric', content: 'Metric'},
    ];

    return (
        <>
            <div className={classes.hintHeader}>
                <Label
                    theme={data.theme.toLowerCase() as 'warning' | 'danger' | 'success'}
                    size={'m'}
                    icon={<Icon size={16} data={getIcon(data.theme)} />}
                >
                    <Text>{data.theme}</Text>
                </Label>
            </div>

            <div className={classes.descriptionContainer}>
                <div className={classes.description}>
                    <Text>
                        <Text style={{fontWeight: 'bold'}}>Coordinates:</Text> {data.coordinates[0]}{' '}
                        {data.coordinates[1]}
                    </Text>
                    <Text>
                        <Text style={{fontWeight: 'bold'}}>Title:</Text> {data.title}
                    </Text>
                    <Text>
                        <Text style={{fontWeight: 'bold'}}>Id:</Text> {data.id}
                    </Text>
                </div>
                <img src={data.image} className={classes.hintImage} />
            </div>

            <div className={classes.metric}></div>
        </>
    );
};
