import {FC, ReactNode} from 'react';
import styles from './AsideMenu.module.css'; // Импорт файлов стилей CSS Modules
import {Icon} from '@gravity-ui/uikit';
import {Xmark} from '@gravity-ui/icons';

type Props = {
    isOpen: boolean;
    callback: () => void;
    children: ReactNode;
};
export const AsideMenu: FC<Props> = ({isOpen, callback, children}) => {
    return (
        <div className={styles.container}>
            <div
                className={styles[`overlay${isOpen ? 'Open' : 'Closed'}`]}
                onClick={() => callback()}
            ></div>
            <div className={styles[`sidebar${isOpen ? 'Open' : 'Closed'}`]}>
                <div className={styles.header}>
                    <h2>Фильтры</h2>
                    <div onClick={() => callback()} className={styles.xMark}>
                        <Icon data={Xmark} size={19} />
                    </div>
                </div>
                <div className={styles.body}>{children}</div>
            </div>
        </div>
    );
};
