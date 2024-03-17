import {Icon, Modal} from '@gravity-ui/uikit';
import {FC, ReactNode} from 'react';
import classes from './CustomModal.module.css';
import {Xmark} from '@gravity-ui/icons';

type Props = {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
    name?: string;
};

export const CustomModal: FC<Props> = ({name = '', open, onClose, children}) => {
    return (
        <Modal open={open} onClose={onClose}>
            <div className={classes.modal}>
                <div className={classes.modalHeader}>
                    <h3 className={classes.name}>{name}</h3>
                    <div className={classes.xmark} onClick={() => onClose()}>
                        <Icon data={Xmark} size={18} />
                    </div>
                </div>
                <div className={classes.modalBody}>{children}</div>
            </div>
        </Modal>
    );
};
