import ReactPlayer from 'react-player';
import classes from './DroneInfo.module.css';
import {FC} from 'react';
import {Button, Label, Progress} from '@gravity-ui/uikit';

type Props = {
    content: any;
};
export const DroneInfo: FC<Props> = ({content}) => {
    return (
        <div className={classes.droneInfo}>
            <div className={classes.iframe}>
                <ReactPlayer
                    url={content.href}
                    loop={true}
                    stopOnUnmount={true}
                    playing={true}
                    width={'100%'}
                    muted={true}
                />
            </div>
            <div className={classes.description}>
                <Progress text="60%" theme="success" value={60} className={classes.battery} />

                <Label theme="danger">Облёт</Label>
            </div>
            <div className={classes.buttons}>
                <Button view={'outlined-danger'}>Отозвать</Button>
            </div>
        </div>
    );
};
