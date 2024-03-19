import {Card, Modal, Progress, Text} from '@gravity-ui/uikit';
import {TDrone} from '../../../utils';
import {FC, useState} from 'react';
import {ConnectDragSource} from 'react-dnd';
import classes from './DroneCard.module.css';
import {getBatteryTheme} from './utils';
import {DroneInfo} from '../../../../../../features';

type Props = {
    drone: TDrone;
    drag: ConnectDragSource;
};
export const DroneCard: FC<Props> = ({drone, drag}) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            <Card
                theme="normal"
                type="selection"
                className={classes.droneCard}
                key={drone.id}
                view={'filled'}
                ref={drag}
                onClick={() => {
                    setOpen(true);
                }}
            >
                <div className={classes.droneCardHeader}>
                    <Text className={classes.name}>{drone.name}</Text>
                    <Progress
                        theme={getBatteryTheme(drone.battery)}
                        value={drone.battery}
                        className={classes.progress}
                        size={'s'}
                    />
                </div>
            </Card>
            <Modal open={open} onClose={() => setOpen(false)}>
                <DroneInfo content={drone} />
            </Modal>
        </>
    );
};
