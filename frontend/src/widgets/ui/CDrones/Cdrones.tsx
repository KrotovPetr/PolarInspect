import classes from './CDrones.module.css';
import {ItemTypes, TDrone, drones, routes} from './utils';
import {useState} from 'react';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import {Column, Info, Routes} from './Components';
import {Card} from '@gravity-ui/uikit';

export const CDrones = () => {
    const [dronesState, setDrones] = useState<TDrone[]>(drones);

    const callback = (draggedId: number, toColumn: string) => {
        const movedCard = dronesState.map((elem) => {
            if (elem.id === draggedId) {
                elem.status = toColumn;
            }
            return elem;
        });

        setDrones(movedCard);
    };

    return (
        <div className={classes.drones}>
            <DndProvider backend={HTML5Backend}>
                <div className={classes.dragNDropContainer}>
                    <Column
                        dronesState={dronesState}
                        type={ItemTypes.ACCEPTED}
                        name={'Свободны'}
                        onCardMove={callback}
                    />
                    <Column
                        dronesState={dronesState}
                        type={ItemTypes.WAITED}
                        name={'В работе'}
                        onCardMove={callback}
                    />
                    <Column
                        dronesState={dronesState}
                        type={ItemTypes.DENIED}
                        name={'Недоступны'}
                        onCardMove={callback}
                    />
                </div>
            </DndProvider>
            <Card className={classes.routes} type="action">
                <Routes routes={routes} />
            </Card>
            <div className={classes.info}>
                <Info />
            </div>
        </div>
    );
};
