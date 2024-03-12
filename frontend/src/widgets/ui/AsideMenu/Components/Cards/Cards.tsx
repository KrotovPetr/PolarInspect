import {CardComponent} from '../Card/CardComponent';
import classes from './Cards.module.css';

export const Cards = ({currentPipes, callback}: any) => {
    return (
        <div className={classes.cards}>
            {currentPipes.map((card: any, index: number) => {
                return (
                    <div
                        onClick={(e: any) => {
                            e.stopPropagation();
                            callback([card]);
                        }}
                        key={card.name + index}
                    >
                        <CardComponent card={card} key={card.name} />
                    </div>
                );
            })}
        </div>
    );
};
