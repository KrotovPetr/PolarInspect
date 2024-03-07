import {Button} from '@gravity-ui/uikit';
import classes from './AsideMenu.module.css';
import {CardComponent} from './Components/Card/CardComponent';
import {pipes} from '../../utils';

export const AsideMenu = ({currentPipes, callback}: any) => {
    return (
        <div className={classes.asideMenu}>
            <Button
                onClick={(e: any) => {
                    e.stopPropagation();
                    callback(pipes);
                }}
            >
                Сбросить
            </Button>
            <div className={classes.cards}>
                {currentPipes.map((card: any) => {
                    return (
                        <div
                            onClick={(e: any) => {
                                e.stopPropagation();
                                callback([card]);
                            }}
                        >
                            <CardComponent card={card} key={card.name} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
