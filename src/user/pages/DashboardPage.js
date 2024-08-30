import React from 'react';
import Dashboard from '../components/Dashboard';
import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const DashboardPage = () => (
    <Container>
        <Navbar />
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
            <Grid item xs={12} sm={3}>
                <Sidebar />
            </Grid>
            <Grid item xs={12} sm={9}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Card sx={{ backgroundColor: '#e3f2fd', borderRadius: '8px', padding: 2 }}>
                        <CardContent sx={{ textAlign: 'center' }}>
                            <Typography variant="h6" component="div">
                                Dashboard Overview
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Quick metrics overview
                            </Typography>
                        </CardContent>
                    </Card>
                    <Dashboard />
                </Box>
            </Grid>
        </Grid>
    </Container>
);

export default DashboardPage;
