import {Field, Form} from 'formik';
import classes from './UploadForm.module.css';
import {FC} from 'react';
import {GraphCard} from '../../../shared/ui';
import {Alert, Button, TextInput} from '@gravity-ui/uikit';
import {DatePicker} from '@gravity-ui/date-components';

export const UploadForm: FC = () => {
    return (
        <GraphCard name={'Выгрузка'}>
            <Form className={classes.form}>
                <Alert
                    theme="info"
                    title="Загрузите файлы"
                    message="Для выгрузки файлов необходимо заполнить все поля"
                    align="center"
                    className={classes.alert}
                />
                <div className={classes.fields}>
                    <Field name="query">
                        {({field}: any) => (
                            <div className={classes.inputGroup}>
                                <TextInput
                                    placeholder="Enter"
                                    label="Flight id"
                                    onChange={field.onChange}
                                    name={field.name}
                                    defaultValue={field.value}
                                    hasClear
                                />
                            </div>
                        )}
                    </Field>
                    <DatePicker size="m" hasClear label="Flight date" />
                    <Field name="query">
                        {({field}: any) => (
                            <div className={classes.inputGroup}>
                                <TextInput
                                    placeholder="Enter"
                                    label="Drone id"
                                    onChange={field.onChange}
                                    name={field.name}
                                    defaultValue={field.value}
                                    hasClear
                                />
                            </div>
                        )}
                    </Field>
                    <Field name="query">
                        {({field}: any) => (
                            <div className={classes.inputGroup}>
                                <TextInput
                                    placeholder="Enter url"
                                    label="URL"
                                    onChange={field.onChange}
                                    name={field.name}
                                    defaultValue={field.value}
                                    hasClear
                                />
                            </div>
                        )}
                    </Field>
                </div>
                <Button view="outlined-info" className={classes.button}>
                    Upload
                </Button>
            </Form>
        </GraphCard>
    );
};
