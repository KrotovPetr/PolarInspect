import {FC} from 'react';
import classes from './Header.module.css';
import {Moon, Sun} from '@gravity-ui/icons';
import {Link} from 'react-router-dom';

type Props = {
    click: () => void;
    theme: 'dark' | 'light';
};

export const Header: FC<Props> = ({click, theme}) => {
    return (
        <div className={classes.header}>
            <div
                className={classes.links}
                onClick={(e) => {
                    e.preventDefault();
                }}
            >
                <Link to="/">Home</Link>
                <Link to="/yandex">Yandex</Link>
                <Link to="/my-geo-map">MyGeoMap</Link>
                <Link to="/google">Google</Link>
            </div>
            <div onClick={click} className={classes.theme}>
                {theme === 'dark' ? <Moon /> : <Sun />}
            </div>
        </div>
    );
};
