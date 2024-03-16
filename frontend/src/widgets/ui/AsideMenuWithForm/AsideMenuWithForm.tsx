import {FC} from 'react';
import {AsideMenu} from '../../../entities';
import {FilterForm} from '../../../features';

type Props = {
    isOpen: boolean;
    callback: () => void;
};

export const AsideMenuWithForm: FC<Props> = ({isOpen, callback}) => {
    return (
        <AsideMenu isOpen={isOpen} callback={callback}>
            <FilterForm />
        </AsideMenu>
    );
};
