import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline, Box, Toolbar } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Settings from './components/Settings';
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Profile';
import Landlord from './pages/Landlord'; // Import the new Landlord page

const drawerWidth = 240;

const AdminApp = () => {
    const [open, setOpen] = useState(true);

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Navbar />
            <Sidebar open={open} setOpen={setOpen} />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    marginLeft: { sm: open ? `${drawerWidth}px` : '60px' }, // Adjust margin based on sidebar state
                    transition: 'margin 0.3s', // Smooth transition
                }}
            >
                <Toolbar />
                <Routes>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="landlord" element={<Landlord />} /> {/* Add new route */}
                    <Route path="settings" element={<Settings />} />
                </Routes>
            </Box>
        </Box>
    );
};

export default AdminApp;
