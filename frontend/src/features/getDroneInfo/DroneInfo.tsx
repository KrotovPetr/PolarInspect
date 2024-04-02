import ReactPlayer from 'react-player';
import classes from './DroneInfo.module.css';
import {FC} from 'react';
import {Button, Label, Progress, Text} from '@gravity-ui/uikit';
import {Map, Placemark, YMaps} from '@pbe/react-yandex-maps';
import {mapState} from '../../widgets/ui/CMap/utils';
import {lineData2} from '../getPlacemarkSupportInfo/utils';
import {LineGraph, PieGraph} from '../../shared/ui';
import {pieGraphData} from '../../widgets/ui/CStats/Components/CStatsGraphContainer/utils';
import {dangerLabels, warningsLabels} from './utils';
import {drones} from '../getFilterForm/ui/utils';

type Props = {
    content: any;
};
export const DroneInfo: FC<Props> = ({content}) => {
    return (
        <div className={classes.droneInfo}>
            <div className={classes.body}>
                <div className={classes.metrics}>
                    <div className={classes.charact}>
                        <Text color="secondary" className={classes.key}>
                            Warning:{' '}
                        </Text>
                        <div className={classes.labels}>
                            {warningsLabels.map((warning) => (
                                <Label theme={'warning'}>{warning}</Label>
                            ))}
                        </div>
                    </div>
                    <div className={classes.charact}>
                        <Text color="secondary" className={classes.key}>
                            Danger:{' '}
                        </Text>
                        <div className={classes.labels}>
                            {dangerLabels.map((warning) => (
                                <Label theme={'danger'}>{warning}</Label>
                            ))}
                        </div>
                    </div>
                    <div className={classes.charact}>
                        <Text color="secondary" className={classes.key}>
                            Coordinates:{' '}
                        </Text>
                        <Text className={classes.labels}>
                            {content.coordinates[0]} {content.coordinates[1]}
                        </Text>
                    </div>
                    <div className={classes.charact}>
                        <Text color="secondary" className={classes.key}>
                            Id:{' '}
                        </Text>
                        <Text className={classes.labels}>{content.id}</Text>
                    </div>
                    <div className={classes.charact}>
                        <Text color="secondary" className={classes.key}>
                            Title:{' '}
                        </Text>
                        <Text className={classes.labels}>{content.title}</Text>
                    </div>
                </div>
                <div className={classes.lineGraph}>
                    <PieGraph data={pieGraphData} />
                </div>
            </div>

            <div className={classes.iframe}>
                <img src={content.image} className={classes.img} />
            </div>
        </div>
    );
};
