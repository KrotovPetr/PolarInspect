import {Route, Routes} from 'react-router-dom';
import {CMap, CStats} from '../../../widgets';

export const MonitoringIndexPage = () => {
    return (
        <Routes>
            <Route path="map/*" element={<CMap />} />
            <Route path="stats/*" element={<CStats />} />
        </Routes>
    );
};
