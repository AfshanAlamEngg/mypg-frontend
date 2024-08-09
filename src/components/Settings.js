// src/components/Settings.js
import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const Settings = () => {
    const handleSave = () => {
        // Handle save settings logic here
        console.log('Settings saved');
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Settings
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    maxWidth: 600,
                    margin: '0 auto'
                }}
            >
                <TextField
                    label="Username"
                    variant="outlined"
                />
                <TextField
                    label="Email"
                    variant="outlined"
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                />
                <TextField
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSave}
                >
                    Save Changes
                </Button>
            </Box>
        </Container>
    );
};

export default Settings;
