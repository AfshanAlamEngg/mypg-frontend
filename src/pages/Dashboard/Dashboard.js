import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Container,
    Typography,
    Box,
    Button,
    TablePagination
} from '@mui/material';
import MetricsCards from './MetricsCards';
import UserTable from './UserTable';
import UserDialog from './UserDialog';
import ConfirmDeleteDialog from './ConfirmDeleteDialog';

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
    const [selected, setSelected] = useState([]);

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

    const handleSave = (updatedUser) => {
        if (isUpdate) {
            setData(data.map(user => user.id === updatedUser.id ? updatedUser : user));
        } else {
            setData([...data, { ...updatedUser, id: data.length + 1 }]);
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

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Dashboard
            </Typography>

            <Box sx={{ marginBottom: 4 }}>
                <MetricsCards metrics={metrics} />
            </Box>

            {/* <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 2 }}>
                <Button
                    variant="contained"
                    color="success"
                    onClick={handleAdd}
                >
                    Add User
                </Button>
            </Box> */}

            <UserTable
                data={data}
                page={page}
                rowsPerPage={rowsPerPage}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                selected={selected}
                setSelected={setSelected}
                handleAdd={handleAdd} // Pass the method here
            />

            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />

            <UserDialog
                open={open}
                onClose={handleDialogClose}
                onSave={handleSave}
                user={currentUser}
                isUpdate={isUpdate}
            />

            <ConfirmDeleteDialog
                open={confirmOpen}
                onClose={handleConfirmClose}
                onConfirm={handleConfirmDelete}
            />
        </Container>
    );
};

export default Dashboard;
