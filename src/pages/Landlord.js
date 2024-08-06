import React, { useState, useEffect } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import axios from 'axios';

const Landlord = () => {
    const [landlords, setLandlords] = useState([]);

    useEffect(() => {
        // Fetch landlord data from dummy API or real backend
        axios.get('https://api.example.com/landlords') // Replace with your API endpoint
            .then(response => setLandlords(response.data))
            .catch(error => console.error('Error fetching landlord data:', error));
    }, []);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Landlord Data
            </Typography>
            <Button
                variant="contained"
                color="success"
                onClick={() => console.log('Add Landlord')}
                sx={{ marginBottom: 2 }}
            >
                Add Landlord
            </Button>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Address</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {landlords.map((landlord) => (
                            <TableRow key={landlord.id}>
                                <TableCell>{landlord.name}</TableCell>
                                <TableCell>{landlord.email}</TableCell>
                                <TableCell>{landlord.phone}</TableCell>
                                <TableCell>{landlord.address}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default Landlord;
