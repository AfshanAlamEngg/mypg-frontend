import React from 'react';
import ManageAssets from '../components/Option01/ManageAssets';
import { Container, Box } from '@mui/material';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Option01Page = () => (
    <Box sx={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <Box sx={{ flexGrow: 1, marginLeft: '240px' }}> {/* Adjust marginLeft based on Sidebar width */}
            <Navbar />
            <Container sx={{ marginTop: '64px', padding: '24px' }}> {/* Adjust marginTop based on Navbar height */}
                <ManageAssets />
            </Container>
        </Box>
    </Box>
);

export default Option01Page;

