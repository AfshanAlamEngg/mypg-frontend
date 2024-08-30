import React from 'react';
import JoinGroup from '../components/Option03/JoinGroup';
import { Container, Box } from '@mui/material';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Option03Page = () => (
    <Box sx={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <Box sx={{ flexGrow: 1, marginLeft: '240px' }}> {/* Adjust marginLeft based on Sidebar width */}
            <Navbar />
            <Container sx={{ marginTop: '64px', padding: '24px' }}> {/* Adjust marginTop based on Navbar height */}
                <JoinGroup />
            </Container>
        </Box>
    </Box>
);

export default Option03Page;

