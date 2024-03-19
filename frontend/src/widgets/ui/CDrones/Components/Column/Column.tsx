import {FC} from 'react';
import {ItemTypes, TDrone} from '../../utils';
import {DropTargetMonitor, useDrag, useDrop} from 'react-dnd';
import {Card, Text} from '@gravity-ui/uikit';
import classes from './Column.module.css';
import {DroneCard} from './DroneCard/DroneCard';

type Props = {
    dronesState: TDrone[];
    type: string;
    name: string;
    onCardMove: (draggedId: number, toColumn: string) => void;
};

export const Column: FC<Props> = (props) => {
    const {dronesState, type, name, onCardMove} = props;

    const [, drop] = useDrop(
        () => ({
            accept: [ItemTypes.ACCEPTED, ItemTypes.DENIED, ItemTypes.WAITED],
            drop: (item: any, monitor: DropTargetMonitor) => {
                const draggedId = item.id;
                const fromColumn = item.type;
                const toColumn = type; // Здесь используем type напрямую
                if (draggedId && fromColumn !== toColumn) {
                    onCardMove(draggedId, toColumn);
                }
            },
        }),
        [onCardMove, type],
    );

    return (
        <Card className={classes.dragNDropColumn} type="action" ref={drop}>
            <Text color="secondary">{name}</Text>
            <div className={classes.dragNDropColumnBody}>
                {dronesState.map((drone) => {
                    const [{isDragging}, drag] = useDrag(() => ({
                        type: type,
                        item: {type: type, id: drone.id},
                        collect: (monitor) => ({
                            isDragging: !!monitor.isDragging(),
                        }),
                    }));
                    return drone.status === type ? (
                        <DroneCard drone={drone} drag={drag} key={drone.name} />
                    ) : null;
                })}
            </div>
        </Card>
    );
};
