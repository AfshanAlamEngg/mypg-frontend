import React from 'react';
import { Box, Typography } from '@mui/material';
import OptionCard from './OptionCard';
import { useNavigate } from 'react-router-dom';

const WelcomeScreen = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>Welcome to the Application</Typography>
            <Typography variant="h6" paragraph>Choose an option to proceed:</Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
                <OptionCard title='Manage Assets' onClick={() => navigate('/welcome/manage-assets')} />
                <OptionCard title='Invest in Assets' onClick={() => navigate('/welcome/invest-in-assets')} />
                <OptionCard title='Join a Group' onClick={() => navigate('/welcome/join-group')} />
            </Box>
        </Box>
    );
};

export default WelcomeScreen;

