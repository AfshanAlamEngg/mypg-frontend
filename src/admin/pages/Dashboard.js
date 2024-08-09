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
    TablePagination,
    Card,
    CardContent,
    Grid
} from '@mui/material';

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [metrics, setMetrics] = useState({
        totalUsers: 0,
        totalProperties: 0,
        totalBookings: 0,
        totalMaintenanceRequests: 0,
        totalLandlords: 0,
        totalMaintenanceStaff: 0,
        avgBookingDuration: 0,
        pendingMaintenanceRequests: 0
    });
    const [open, setOpen] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [isUpdate, setIsUpdate] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    useEffect(() => {
        fetchData();
        fetchMetrics();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchMetrics = async () => {
        try {
            const response = await axios.get('/api/metrics'); // Replace with your metrics endpoint
            setMetrics(response.data);
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

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const paginatedData = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Dashboard
            </Typography>

            {/* Metrics Cards Section */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, marginBottom: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{ backgroundColor: '#e3f2fd', borderRadius: '8px', height: 150 }}>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h6" component="div">
                                    Total Users
                                </Typography>
                                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                                    {metrics.totalUsers}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{ backgroundColor: '#fce4ec', borderRadius: '8px', height: 150 }}>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h6" component="div">
                                    Total Properties
                                </Typography>
                                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                                    {metrics.totalProperties}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{ backgroundColor: '#fff3e0', borderRadius: '8px', height: 150 }}>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h6" component="div">
                                    Total Bookings
                                </Typography>
                                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                                    {metrics.totalBookings}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{ backgroundColor: '#e8f5e9', borderRadius: '8px', height: 150 }}>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h6" component="div">
                                    Total Maintenance Requests
                                </Typography>
                                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                                    {metrics.totalMaintenanceRequests}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{ backgroundColor: '#f1f8e9', borderRadius: '8px', height: 150 }}>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h6" component="div">
                                    Total Landlords
                                </Typography>
                                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                                    {metrics.totalLandlords}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{ backgroundColor: '#e1bee7', borderRadius: '8px', height: 150 }}>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h6" component="div">
                                    Total Maintenance Staff
                                </Typography>
                                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                                    {metrics.totalMaintenanceStaff}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{ backgroundColor: '#ffecb3', borderRadius: '8px', height: 150 }}>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h6" component="div">
                                    Avg. Booking Duration
                                </Typography>
                                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                                    {metrics.avgBookingDuration} days
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Card sx={{ backgroundColor: '#cfd8dc', borderRadius: '8px', height: 150 }}>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h6" component="div">
                                    Pending Maintenance Requests
                                </Typography>
                                <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                                    {metrics.pendingMaintenanceRequests}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

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
                        {paginatedData.map(user => (
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

            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />

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
