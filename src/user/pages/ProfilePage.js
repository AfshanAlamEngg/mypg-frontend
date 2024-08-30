import React from 'react';
import Profile from '../components/Profile';
import { Container } from '@mui/material';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const ProfilePage = () => (
    <Box sx={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <Box sx={{ flexGrow: 1, marginLeft: '240px' }}> {/* Adjust marginLeft based on Sidebar width */}
            <Navbar />
            <Container sx={{ marginTop: '64px', padding: '24px' }}> {/* Adjust marginTop based on Navbar height */}
                <Profile />
            </Container>
        </Box>
    </Box>
);

export default ProfilePage;

