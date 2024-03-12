import {
    Breadcrumbs,
    FirstDisplayedItemsCount,
    LastDisplayedItemsCount,
    RadioButton,
} from '@gravity-ui/uikit';
import classes from './MonitoringPage.module.css';
import {useLocation, useNavigate} from 'react-router-dom';
import {buildBreadcrumbsItems} from './utils';
import {MonitoringIndexPage} from './MonitoringIndexPage/MonitoringIndexPage';
import {AsideMenu} from '../../widgets';
import {useState} from 'react';
import {pipes} from '../../widgets/ui/CMap/utils';

export const MonitoringPage = () => {
    const {pathname} = useLocation();
    const navigate = useNavigate();

    const buildRoute = (pathname: string) => {
        return pathname.split('/')[1];
    };

    const [currentPipe, setPipe] = useState(pipes);

    const callback = (value: any) => {
        setPipe(value);
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
                <Breadcrumbs
                    items={buildBreadcrumbsItems(pathname, navigate)}
                    renderItemDivider={() => '>'}
                    firstDisplayedItemsCount={FirstDisplayedItemsCount.One}
                    lastDisplayedItemsCount={LastDisplayedItemsCount.One}
                />
                <RadioButton>
                    <RadioButton.Option value="map">Карта</RadioButton.Option>
                    <RadioButton.Option value="stats">Статистика</RadioButton.Option>
                </RadioButton>
            </div>
            <div className={classes.bodyContainer}>
                <AsideMenu currentPipes={currentPipe} callback={callback} />
                <MonitoringIndexPage />
            </div>
        </>
    );
};
