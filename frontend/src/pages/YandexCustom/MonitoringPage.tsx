import {Button, Icon, Label, RadioButton} from '@gravity-ui/uikit';
import classes from './MonitoringPage.module.css';
import {useLocation, useNavigate} from 'react-router-dom';
import {MonitoringIndexPage} from './MonitoringIndexPage/MonitoringIndexPage';
import {useState} from 'react';
import {pipes} from '../../widgets/ui/CMap/utils';
import {Bars} from '@gravity-ui/icons';
import {AsideMenuWithForm} from '../../widgets/ui/AsideMenuWithForm';

export const MonitoringPage = () => {
    const {pathname} = useLocation();
    const navigate = useNavigate();

    const buildRoute = (pathname: string) => {
        return pathname.split('/')[1];
    };

    const getDefaultValue = (pathname: string) => {
        return pathname.split('/')[2];
    };

    const [currentPipe, setPipe] = useState(pipes);

    const callback = (value: any) => {
        setPipe(value);
    };
    const [isOpen, setIsOpen] = useState(false); // Состояние для открытия/закрытия меню

    const toggleMenu = () => {
        console.log(isOpen);
        setIsOpen(!isOpen); // Изменяем состояние при клике на кнопку
    };

    return (
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
                <div className={classes.filters}>
                    <Label theme="normal" value={'Бованенково'}>
                        Район
                    </Label>
                    <Label theme="normal" value={'А-137'}>
                        Участок
                    </Label>
                    <Label theme="normal" value={'17-В'}>
                        Опора
                    </Label>
                </div>
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
    );
};
