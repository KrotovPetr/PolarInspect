import {FC} from 'react';
import classes from './Labels.module.css';
import {Label} from '@gravity-ui/uikit';
import {useFormikContext} from 'formik';

export const Labels: FC = () => {
    const {values} = useFormikContext();

    const getLabelsFromForm = (values: any) => {
        const resArr = [];
        for (const [key, value] of Object.entries(values)) {
            if (value) {
                resArr.push({key, value});
            }
        }

        return resArr;
    };

    return (
        <div className={classes.labels}>
            {getLabelsFromForm(values).map(({value, key}) => (
                <Label theme="normal" value={value as any} key={key}>
                    {key}
                </Label>
            ))}
        </div>
    );
};
