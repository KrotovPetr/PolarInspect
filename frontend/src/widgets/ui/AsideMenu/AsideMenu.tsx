import {Button, TextInput} from '@gravity-ui/uikit';
import classes from './AsideMenu.module.css';
import {pipes} from './utils';
import {Cards} from './Components';

export const AsideMenu = ({currentPipes, callback}: any) => {
    return (
        <div className={classes.asideMenu}>
            <div className={classes.asideHeader}>
                <TextInput />
                <Button
                    onClick={(e: any) => {
                        e.stopPropagation();
                        callback(pipes);
                    }}
                >
                    Сбросить
                </Button>
            </div>
            <Cards currentPipes={currentPipes} callback={callback} />
        </div>
    );
};
