import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Box, Toolbar } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

const drawerWidth = 240;

const App = () => {
    const [open, setOpen] = useState(true);

    return (
        <Router>
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
                        transition: 'margin 0.3s' // Smooth transition
                    }}
                >
                    <Toolbar />
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </Box>
            </Box>
        </Router>
    );
};

export default App;
