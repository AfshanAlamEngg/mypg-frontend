import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Checkbox,
    Box
} from '@mui/material';
import { CSVLink } from 'react-csv';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Papa from 'papaparse'; // Import PapaParse

const UserTable = ({ data, page, rowsPerPage, handleUpdate, handleDelete, selected, setSelected, handleAdd }) => {
    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = data.map((n) => n.id);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const isSelected = (id) => selected.indexOf(id) !== -1;

    const paginatedData = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

    const exportToCSV = () => {
        const selectedData = data.filter(user => selected.includes(user.id));
        const csv = Papa.unparse(selectedData);
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'users.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const exportToExcel = () => {
        const selectedData = data.filter(user => selected.includes(user.id));
        const ws = XLSX.utils.json_to_sheet(selectedData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Users');
        XLSX.writeFile(wb, `users_${new Date().toISOString()}.xlsx`);
    };

    const exportToPDF = () => {
        const selectedData = data.filter(user => selected.includes(user.id));
        const doc = new jsPDF();
        const tableData = selectedData.map(user => [user.id, user.name, user.email, user.phone]);
        doc.autoTable({
            head: [['ID', 'Name', 'Email', 'Phone']],
            body: tableData,
            didDrawPage: (data) => {
                doc.text('User Records', 14, 22);
                doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 28);
                doc.text(`Time: ${new Date().toLocaleTimeString()}`, 14, 34);
            }
        });
        doc.save(`users_${new Date().toISOString()}.pdf`);
    };

    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={exportToCSV}
                        sx={{ backgroundColor: '#1976d2', '&:hover': { backgroundColor: '#1565c0' } }}
                    >
                        Export CSV
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={exportToExcel}
                        sx={{ backgroundColor: '#388e3c', '&:hover': { backgroundColor: '#2c6c29' } }}
                    >
                        Export Excel
                    </Button>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={exportToPDF}
                        sx={{ backgroundColor: '#d32f2f', '&:hover': { backgroundColor: '#c62828' } }}
                    >
                        Export PDF
                    </Button>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={handleAdd}
                    >
                        Add User
                    </Button>
                </Box>
            </Box>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    indeterminate={selected.length > 0 && selected.length < data.length}
                                    checked={data.length > 0 && selected.length === data.length}
                                    onChange={handleSelectAllClick}
                                    inputProps={{ 'aria-label': 'select all users' }}
                                />
                            </TableCell>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedData.map((user) => {
                            const isItemSelected = isSelected(user.id);
                            return (
                                <TableRow
                                    hover
                                    onClick={(event) => handleClick(event, user.id)}
                                    role="checkbox"
                                    aria-checked={isItemSelected}
                                    tabIndex={-1}
                                    key={user.id}
                                    selected={isItemSelected}
                                >
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={isItemSelected}
                                            inputProps={{ 'aria-labelledby': `enhanced-table-checkbox-${user.id}` }}
                                        />
                                    </TableCell>
                                    <TableCell>{user.id}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{user.phone}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={() => handleUpdate(user)}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="contained"
                                            color="error"
                                            onClick={() => handleDelete(user)}
                                            sx={{ marginLeft: 1 }}
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};

export default UserTable;
