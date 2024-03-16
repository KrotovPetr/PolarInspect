import {Button, Select, Switch, TextInput} from '@gravity-ui/uikit';
import {Field, Form, Formik} from 'formik';
import {FC} from 'react';
import classes from './FilterFrom.module.css';
import {drones, initialValue, pipes, placemarks, regions, stat} from './utils';

export const FilterForm: FC = () => {
    return (
        <>
            <Formik
                initialValues={initialValue}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        console.log(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({isSubmitting}) => (
                    <Form className={classes.form}>
                        <div className={classes.fields}>
                            <Field name="query">
                                {({field}: any) => (
                                    <div className={classes.inputGroup}>
                                        <TextInput
                                            placeholder="Enter"
                                            label="Search"
                                            onChange={field.onChange}
                                            name={field.name}
                                        />
                                        <Button type="submit" disabled={isSubmitting}>
                                            Найти
                                        </Button>
                                    </div>
                                )}
                            </Field>
                            <Field name="region">
                                {({field}: any) => (
                                    <Select
                                        placeholder={'Select region'}
                                        filterable={true}
                                        className={classes.select}
                                        onUpdate={field.onChange}
                                        name={field.name}
                                    >
                                        {regions.map((region: string) => (
                                            <Select.Option key={region} value={region}>
                                                {region}
                                            </Select.Option>
                                        ))}
                                    </Select>
                                )}
                            </Field>
                            <Field name="pipe">
                                {({field}: any) => (
                                    <Select
                                        placeholder={'Select pipe'}
                                        filterable={true}
                                        className={classes.select}
                                        name={field.name}
                                    >
                                        {pipes.map((pipe: string) => (
                                            <Select.Option key={pipe} value={pipe}>
                                                {pipe}
                                            </Select.Option>
                                        ))}
                                    </Select>
                                )}
                            </Field>
                            <Field name="placemark">
                                {({field}: any) => (
                                    <Select
                                        placeholder={'Select placemark'}
                                        filterable={true}
                                        className={classes.select}
                                        name={field.name}
                                    >
                                        {placemarks.map((placemark: string) => (
                                            <Select.Option key={placemark} value={placemark}>
                                                {placemark}
                                            </Select.Option>
                                        ))}
                                    </Select>
                                )}
                            </Field>
                            <Field name="status">
                                {({field}: any) => (
                                    <Select
                                        placeholder={'Select status'}
                                        className={classes.select}
                                        name={field.name}
                                    >
                                        {stat.map((status: string) => (
                                            <Select.Option key={status} value={status}>
                                                {status}
                                            </Select.Option>
                                        ))}
                                    </Select>
                                )}
                            </Field>
                            <Switch>
                                <span>Show drones</span>
                            </Switch>
                            <Field name="drone">
                                {({field}: any) => (
                                    <Select
                                        placeholder={'Select drone'}
                                        filterable={true}
                                        className={classes.select}
                                        name={field.name}
                                        defaultValue={field.value}
                                        multiple={false}
                                        onUpdate={(newValue: string[]) => {
                                            return field.onUpdate({target: {value: newValue[0]}});
                                        }}
                                    >
                                        {drones.map((drone: string) => (
                                            <Select.Option key={drone} value={drone}>
                                                {drone}
                                            </Select.Option>
                                        ))}
                                    </Select>
                                )}
                            </Field>
                        </div>
                        <div className={classes.buttons}>
                            <Button view={'flat-info'}>Сбросить</Button>
                            <Button view={'outlined-info'} type="submit" disabled={isSubmitting}>
                                Фильтровать
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
};
