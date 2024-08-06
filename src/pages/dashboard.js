// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Container,
    Paper,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField,
    Box,
} from '@mui/material';

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleAdd = () => {
        setCurrentUser({ id: '', name: '', email: '', phone: '' });
        setIsUpdate(false);
        setOpen(true);
    };

    const handleUpdate = (user) => {
        setCurrentUser(user);
        setIsUpdate(true);
        setOpen(true);
    };

    const handleDelete = (user) => {
        setCurrentUser(user);
        setConfirmOpen(true);
    };

    const handleDialogClose = () => {
        setOpen(false);
        setCurrentUser(null);
    };

    const handleConfirmClose = () => {
        setConfirmOpen(false);
        setCurrentUser(null);
    };

    const handleConfirmDelete = () => {
        setData(data.filter(user => user.id !== currentUser.id));
        setConfirmOpen(false);
        setCurrentUser(null);
    };

    const handleSave = () => {
        if (isUpdate) {
            setData(data.map(user => user.id === currentUser.id ? currentUser : user));
        } else {
            setData([...data, { ...currentUser, id: data.length + 1 }]);
        }
        setOpen(false);
        setCurrentUser(null);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                User Data
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 2 }}>
                <Button
                    variant="contained"
                    color="success"
                    onClick={handleAdd}
                >
                    Add User
                </Button>
            </Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(user => (
                            <TableRow key={user.id}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.phone}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => handleUpdate(user)}
                                        sx={{ marginRight: 1 }}
                                    >
                                        Update
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => handleDelete(user)}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog open={open} onClose={handleDialogClose}>
                <DialogTitle>{isUpdate ? 'Update User' : 'Add User'}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {isUpdate ? 'Update the user details' : 'Add new user details'}
                    </DialogContentText>
                    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <TextField
                            label="Name"
                            value={currentUser?.name || ''}
                            onChange={(e) => setCurrentUser({ ...currentUser, name: e.target.value })}
                        />
                        <TextField
                            label="Email"
                            value={currentUser?.email || ''}
                            onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })}
                        />
                        <TextField
                            label="Phone"
                            value={currentUser?.phone || ''}
                            onChange={(e) => setCurrentUser({ ...currentUser, phone: e.target.value })}
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>Cancel</Button>
                    <Button onClick={handleSave} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog open={confirmOpen} onClose={handleConfirmClose}>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete this user?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleConfirmClose}>Cancel</Button>
                    <Button onClick={handleConfirmDelete} color="secondary">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default Dashboard;
