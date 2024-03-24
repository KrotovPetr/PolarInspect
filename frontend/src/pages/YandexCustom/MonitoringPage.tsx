import {Button, Icon, RadioButton} from '@gravity-ui/uikit';
import classes from './MonitoringPage.module.css';
import {useLocation, useNavigate} from 'react-router-dom';
import {MonitoringIndexPage} from './MonitoringIndexPage/MonitoringIndexPage';
import {useState} from 'react';
import {Bars} from '@gravity-ui/icons';
import {AsideMenuWithForm} from '../../widgets/ui/AsideMenuWithForm';
import {Formik} from 'formik';
import {Labels} from './Labels';
import {getInitialValue} from './utils';

export const MonitoringPage = () => {
    const {pathname} = useLocation();
    const navigate = useNavigate();

    const buildRoute = (pathname: string) => {
        return pathname.split('/')[1];
    };

    const getDefaultValue = (pathname: string) => {
        return pathname.split('/')[2];
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((o) => !o);
    };

    return (
        <>
            <Formik
                initialValues={getInitialValue()}
                onSubmit={(values: any) => {
                    localStorage.setItem('filters', JSON.stringify(values));
                    toggleMenu();
                }}
            >
                {() => (
                    <>
                        <div
                            className={classes.customHeader}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                e.stopPropagation();
                                const route = buildRoute(pathname);
                                navigate('/' + route + '/' + e.target.value);
                            }}
                        >
                            <Button className={classes.toggleBtn} onClick={toggleMenu}>
                                <Icon data={Bars} size={18} />
                            </Button>
                            <Labels />
                            <RadioButton defaultValue={getDefaultValue(pathname)}>
                                <RadioButton.Option value="map">Карта</RadioButton.Option>
                                <RadioButton.Option value="stats">Статистика</RadioButton.Option>
                                <RadioButton.Option value="drones">Дроны</RadioButton.Option>
                            </RadioButton>
                        </div>
                        <div className={classes.bodyContainer}>
                            <AsideMenuWithForm isOpen={isOpen} callback={() => setIsOpen(false)} />
                            <MonitoringIndexPage />
                        </div>
                    </>
                )}
            </Formik>
        </>
    );
};
