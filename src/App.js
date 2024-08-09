import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminApp from './admin/AdminApp';
import HomePage from './home/Homepage';
// import TenantApp from './tenant/App';
// import LandlordApp from './landlord/App';
// import MaintenanceStaffApp from './maintenanceStaff/App';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/admin/*" element={<AdminApp />} />
                {/* <Route path="/tenant/*" element={<TenantApp />} />
                <Route path="/landlord/*" element={<LandlordApp />} />
                <Route path="/maintenance-staff/*" element={<MaintenanceStaffApp />} /> */}
            </Routes>
        </Router>
    );
};

export default App;
