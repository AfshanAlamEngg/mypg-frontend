import React, { useState } from 'react';
import { Box, TextField, Button, Typography, IconButton } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';

const InvestmentForm = () => {
    const [targetAge, setTargetAge] = useState('');
    const [targetAsset, setTargetAsset] = useState('');
    const [targetValue, setTargetValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add submission logic
    };

    return (
        <Box sx={{ width: '50%' }}>
            <Typography variant='h6' gutterBottom>Investment Form</Typography>
            <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
                sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            >
                <TextField
                    label="Target Age"
                    value={targetAge}
                    onChange={(e) => setTargetAge(e.target.value)}
                    fullWidth
                />
                <TextField
                    label="Target Asset"
                    value={targetAsset}
                    onChange={(e) => setTargetAsset(e.target.value)}
                    fullWidth
                />
                <TextField
                    label="Target Value"
                    value={targetValue}
                    onChange={(e) => setTargetValue(e.target.value)}
                    fullWidth
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
                <IconButton color="secondary">
                    <HistoryIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default InvestmentForm;
