import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Avatar, Box, Grid, Paper } from '@mui/material';

const Profile = () => {
    const [profileData, setProfileData] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        address: '123 Main St, Anytown, USA'
    });

    const [tempProfileData, setTempProfileData] = useState({ ...profileData });
    const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTempProfileData({
            ...tempProfileData,
            [name]: value
        });
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
        try {
            // Add logic to save the updated profile data to your backend
            // Example using fetch:
            const response = await fetch('/api/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(tempProfileData),
            });

            if (response.ok) {
                setProfileData(tempProfileData);
                setIsEditing(false);
            } else {
                console.error('Failed to save profile data');
            }
        } catch (error) {
            console.error('Error saving profile data:', error);
        }
    };

    const handleCancel = () => {
        setTempProfileData({ ...profileData });
        setIsEditing(false);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Profile Page
            </Typography>
            <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        <Avatar sx={{ width: 56, height: 56 }}>JD</Avatar>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="h6">{profileData.name}</Typography>
                        <Typography variant="body1">{profileData.email}</Typography>
                        <Typography variant="body1">{profileData.phone}</Typography>
                        <Typography variant="body1">{profileData.address}</Typography>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" onClick={handleEdit}>
                            Edit
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
            {isEditing && (
                <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
                    <Typography variant="h6" gutterBottom>
                        Edit Profile
                    </Typography>
                    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <TextField
                            label="Name"
                            name="name"
                            value={tempProfileData.name}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Email"
                            name="email"
                            value={tempProfileData.email}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Phone"
                            name="phone"
                            value={tempProfileData.phone}
                            onChange={handleChange}
                        />
                        <TextField
                            label="Address"
                            name="address"
                            value={tempProfileData.address}
                            onChange={handleChange}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                            <Button variant="contained" color="secondary" onClick={handleCancel}>
                                Cancel
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleSave}>
                                Save
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            )}
        </Container>
    );
};

export default Profile;
