import {Button, Select, Switch, TextInput} from '@gravity-ui/uikit';
import {Field, Form} from 'formik';
import {FC} from 'react';
import classes from './FilterFrom.module.css';
import {drones, pipes, placemarks, regions, stat} from './utils';

export const FilterForm: FC = () => {
    return (
        <>
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
                                    defaultValue={field.value}
                                />
                                <Button type="submit">Найти</Button>
                            </div>
                        )}
                    </Field>
                    <Field name="region">
                        {({field, form}: any) => {
                            console.log(field);
                            return (
                                <Select
                                    placeholder={'Select region'}
                                    filterable={true}
                                    className={classes.select}
                                    name={field.name}
                                    onUpdate={(newValue: string[]) => {
                                        form.setFieldValue('region', newValue[0]);
                                    }}
                                    defaultValue={[field.value]}
                                >
                                    {regions.map((region: string) => (
                                        <Select.Option key={region} value={region}>
                                            {region}
                                        </Select.Option>
                                    ))}
                                </Select>
                            );
                        }}
                    </Field>
                    <Field name="pipe">
                        {({field, form}: any) => (
                            <Select
                                placeholder={'Select pipe'}
                                filterable={true}
                                className={classes.select}
                                name={field.name}
                                onUpdate={(newValue: string[]) => {
                                    form.setFieldValue('pipe', newValue[0]);
                                }}
                                defaultValue={[field.value]}
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
                        {({field, form}: any) => (
                            <Select
                                placeholder={'Select placemark'}
                                filterable={true}
                                className={classes.select}
                                name={field.name}
                                onUpdate={(newValue: string[]) => {
                                    form.setFieldValue('placemark', newValue[0]);
                                }}
                                defaultValue={[field.value]}
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
                        {({field, form}: any) => (
                            <Select
                                placeholder={'Select status'}
                                className={classes.select}
                                name={field.name}
                                onUpdate={(newValue: string[]) => {
                                    form.setFieldValue('drone', newValue[0]);
                                }}
                                defaultValue={[field.value]}
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
                        {({field, form}: any) => (
                            <Select
                                placeholder={'Select drone'}
                                filterable={true}
                                className={classes.select}
                                name={field.name}
                                defaultValue={[field.value]}
                                multiple={false}
                                onUpdate={(newValue: string[]) => {
                                    form.setFieldValue('drone', newValue[0]);
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
                    <Button view={'outlined-info'} type="submit">
                        Фильтровать
                    </Button>
                </div>
            </Form>
        </>
    );
};
