import {FC} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {Tabs} from '@gravity-ui/uikit';
import {DEFAULT_ROUTES, getActiveTab} from './utils';

export const LinksContainer: FC = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();

    return (
        <Tabs
            activeTab={getActiveTab(pathname)}
            items={DEFAULT_ROUTES}
            onSelectTab={(value: string) => {
                navigate('/' + value + (value === 'monitoring' ? '/map' : ''));
            }}
        />
    );
};
