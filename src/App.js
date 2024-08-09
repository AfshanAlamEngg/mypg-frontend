import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminApp from './admin/AdminApp';
import HomeApp from './home/HomeApp';
import NotFoundPage from './home/pages/NonFound';
// import TenantApp from './tenant/App';
// import LandlordApp from './landlord/App';
// import MaintenanceStaffApp from './maintenanceStaff/App';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomeApp />} />
                <Route path="/admin/*" element={<AdminApp />} />
                <Route path="*" element={<NotFoundPage/>} />
                {/* <Route path="/tenant/*" element={<TenantApp />} />
                <Route path="/landlord/*" element={<LandlordApp />} />
                <Route path="/maintenance-staff/*" element={<MaintenanceStaffApp />} /> */}
            </Routes>
        </Router>
    );
};

export default App;
