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
    TablePagination
} from '@mui/material';

const Landlord = () => {
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [currentLandlord, setCurrentLandlord] = useState(null);
    const [isUpdate, setIsUpdate] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

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
        setCurrentLandlord({ id: '', name: '', email: '', phone: '' });
        setIsUpdate(false);
        setOpen(true);
    };

    const handleUpdate = (landlord) => {
        setCurrentLandlord(landlord);
        setIsUpdate(true);
        setOpen(true);
    };

    const handleDelete = (landlord) => {
        setCurrentLandlord(landlord);
        setConfirmOpen(true);
    };

    const handleDialogClose = () => {
        setOpen(false);
        setCurrentLandlord(null);
    };

    const handleConfirmClose = () => {
        setConfirmOpen(false);
        setCurrentLandlord(null);
    };

    const handleConfirmDelete = () => {
        setData(data.filter(landlord => landlord.id !== currentLandlord.id));
        setConfirmOpen(false);
        setCurrentLandlord(null);
    };

    const handleSave = () => {
        if (isUpdate) {
            setData(data.map(landlord => landlord.id === currentLandlord.id ? currentLandlord : landlord));
        } else {
            setData([...data, { ...currentLandlord, id: data.length + 1 }]);
        }
        setOpen(false);
        setCurrentLandlord(null);
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
                Landlord Data
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 2 }}>
                <Button
                    variant="contained"
                    color="success"
                    onClick={handleAdd}
                >
                    Add Landlord
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
                        {paginatedData.map(landlord => (
                            <TableRow key={landlord.id}>
                                <TableCell>{landlord.id}</TableCell>
                                <TableCell>{landlord.name}</TableCell>
                                <TableCell>{landlord.email}</TableCell>
                                <TableCell>{landlord.phone}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => handleUpdate(landlord)}
                                        sx={{ marginRight: 1 }}
                                    >
                                        Update
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={() => handleDelete(landlord)}
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
                <DialogTitle>{isUpdate ? 'Update Landlord' : 'Add Landlord'}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {isUpdate ? 'Update the landlord details' : 'Add new landlord details'}
                    </DialogContentText>
                    <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <TextField
                            label="Name"
                            value={currentLandlord?.name || ''}
                            onChange={(e) => setCurrentLandlord({ ...currentLandlord, name: e.target.value })}
                        />
                        <TextField
                            label="Email"
                            value={currentLandlord?.email || ''}
                            onChange={(e) => setCurrentLandlord({ ...currentLandlord, email: e.target.value })}
                        />
                        <TextField
                            label="Phone"
                            value={currentLandlord?.phone || ''}
                            onChange={(e) => setCurrentLandlord({ ...currentLandlord, phone: e.target.value })}
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
                        Are you sure you want to delete this landlord?
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

export default Landlord;
