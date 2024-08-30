import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Badge, Avatar, Box, Dialog, DialogActions, DialogContent, DialogTitle, Button
} from '@mui/material';
import { Notifications as NotificationsIcon, AccountCircle as AccountCircleIcon } from '@mui/icons-material';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
    const [notifications, setNotifications] = useState(3); // Example notification count
    const [logoutOpen, setLogoutOpen] = useState(false);
    const navigate = useNavigate();

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleNotificationClick = (event) => {
        setNotificationAnchorEl(event.currentTarget);
    };

    const handleNotificationClose = () => {
        setNotificationAnchorEl(null);
    };

    const handleProfileClick = () => {
        navigate('profile');
        handleMenuClose();
    };

    const handleSettingsClick = () => {
        navigate('settings');
        handleMenuClose();
    };

    const handleLogoutOpen = () => {
        setLogoutOpen(true);
    };

    const handleLogoutClose = () => {
        setLogoutOpen(false);
    };

    const handleConfirmLogout = () => {
        // Handle logout logic here
        console.log('Logout');
        setLogoutOpen(false);
    };

    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                    Welcome Page
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton
                        color="inherit"
                        onClick={handleNotificationClick}
                        sx={{ marginRight: 2 }}
                    >
                        <Badge badgeContent={notifications} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        color="inherit"
                        onClick={handleMenuClick}
                    >
                        <Avatar>
                            <AccountCircleIcon />
                        </Avatar>
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        PaperProps={{
                            sx: {
                                borderRadius: '8px',
                                backgroundColor: '#424242',
                                color: '#fff',
                                '& .MuiMenuItem-root': {
                                    padding: '12px 16px',
                                    '&:hover': {
                                        backgroundColor: '#616161',
                                    }
                                }
                            }
                        }}
                    >
                        <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
                        <MenuItem onClick={handleSettingsClick}>Settings</MenuItem>
                        <MenuItem onClick={handleLogoutOpen}>Logout</MenuItem>
                    </Menu>
                    <Menu
                        anchorEl={notificationAnchorEl}
                        open={Boolean(notificationAnchorEl)}
                        onClose={handleNotificationClose}
                        PaperProps={{
                            sx: {
                                borderRadius: '8px',
                                backgroundColor: '#424242',
                                color: '#fff',
                                '& .MuiMenuItem-root': {
                                    padding: '12px 16px',
                                    '&:hover': {
                                        backgroundColor: '#616161',
                                    }
                                }
                            }
                        }}
                    >
                        <MenuItem onClick={handleNotificationClose}>Notification 1</MenuItem>
                        <MenuItem onClick={handleNotificationClose}>Notification 2</MenuItem>
                        <MenuItem onClick={handleNotificationClose}>Notification 3</MenuItem>
                    </Menu>
                </Box>
            </Toolbar>

            <Dialog
                open={logoutOpen}
                onClose={handleLogoutClose}
            >
                <DialogTitle>Confirm Logout</DialogTitle>
                <DialogContent>
                    Are you sure you want to logout?
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleLogoutClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleConfirmLogout} color="primary">
                        Logout
                    </Button>
                </DialogActions>
            </Dialog>
        </AppBar>
    );
};

export default Navbar;
