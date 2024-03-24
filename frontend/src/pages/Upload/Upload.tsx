import {Formik} from 'formik';
import {getInitialValue} from './utils';
import classes from './Upload.module.css';
import {FC} from 'react';
import {CVProcesses, UploadForm} from '../../widgets';
import {CVStats} from '../../widgets/ui/CVStats/CVStats';

export const Upload: FC = () => {
    return (
        <>
            <Formik initialValues={getInitialValue()} onSubmit={() => {}}>
                {() => {
                    return (
                        <div className={classes.uploadsBody}>
                            <UploadForm />
                            <CVStats />
                            <CVProcesses />
                        </div>
                    );
                }}
            </Formik>
        </>
    );
};
