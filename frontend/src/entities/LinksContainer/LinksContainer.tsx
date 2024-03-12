import {FC} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import classes from './LinksContainer.module.css';
import {Tabs} from '@gravity-ui/uikit';

export const LinksContainer: FC = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();

    const getActiveTab = (pathname: string) => {
        const route = pathname.split('/')[1];
        return route === 'upload' ? 'upload' : 'monitoring';
    };

    return (
        <Tabs
            activeTab={getActiveTab(pathname)}
            items={[
                {id: 'upload', title: 'Выгрузка'},
                {id: 'monitoring', title: 'Мониторинг'},
            ]}
            onSelectTab={(value: string) => {
                navigate('/' + value + (value === 'monitoring' ? '/map' : ''));
            }}
        />
    );
};
