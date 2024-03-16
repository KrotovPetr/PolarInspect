import {FC} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {Tabs} from '@gravity-ui/uikit';

export const LinksContainer: FC = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();

    const getActiveTab = (pathname: string) => {
        const route = pathname.split('/')[1];
        return route;
    };

    return (
        <Tabs
            activeTab={getActiveTab(pathname)}
            items={[
                {id: 'upload', title: 'Выгрузка'},
                {id: 'monitoring', title: 'Мониторинг'},
            ]}
            onSelectTab={(value: string) => {
                console.log();
                if (value === 'monitoring') {
                    navigate('/' + value + (value === 'monitoring' ? '/map' : ''));
                } else {
                    navigate('/' + value);
                }
            }}
        />
    );
};
