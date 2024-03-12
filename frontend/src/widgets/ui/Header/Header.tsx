import {FC} from 'react';
import classes from './Header.module.css';
import {Moon, Sun} from '@gravity-ui/icons';
import {LinksContainer} from '../../../entities';

type Props = {
    click: () => void;
    theme: 'dark' | 'light';
};

export const Header: FC<Props> = ({click, theme}) => {
    return (
        <div className={classes.header}>
            <div className={classes.logo}>Logo</div>
            <LinksContainer />
            <div onClick={click} className={classes.theme}>
                {theme === 'dark' ? <Moon /> : <Sun />}
            </div>
        </div>
    );
};
