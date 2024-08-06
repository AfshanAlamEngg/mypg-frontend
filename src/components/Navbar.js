import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Badge, Avatar, Box } from '@mui/material';
import { Notifications as NotificationsIcon, AccountCircle as AccountCircleIcon } from '@mui/icons-material';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [notificationAnchorEl, setNotificationAnchorEl] = useState(null);
    const [notifications, setNotifications] = useState(3); // Example notification count

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

    const handleLogout = () => {
        // Handle logout logic here
        console.log('Logout');
    };

    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                    Admin Dashboard
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {/* Notifications Bell Icon */}
                    <IconButton
                        color="inherit"
                        onClick={handleNotificationClick}
                        sx={{ marginRight: 2 }}
                    >
                        <Badge badgeContent={notifications} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    {/* User Dropdown Menu */}
                    <IconButton
                        color="inherit"
                        onClick={handleMenuClick}
                    >
                        <Avatar>
                            <AccountCircleIcon />
                        </Avatar>
                    </IconButton>
                    {/* User Menu */}
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        PaperProps={{
                            sx: {
                                borderRadius: '8px', // Rounded corners
                                backgroundColor: '#424242', // Dark background for menu
                                color: '#fff', // White text color
                                '& .MuiMenuItem-root': {
                                    padding: '12px 16px', // Padding for menu items
                                    '&:hover': {
                                        backgroundColor: '#616161', // Hover effect
                                    }
                                }
                            }
                        }}
                    >
                        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                    {/* Notification Dropdown Menu */}
                    <Menu
                        anchorEl={notificationAnchorEl}
                        open={Boolean(notificationAnchorEl)}
                        onClose={handleNotificationClose}
                        PaperProps={{
                            sx: {
                                borderRadius: '8px', // Rounded corners
                                backgroundColor: '#424242', // Dark background for menu
                                color: '#fff', // White text color
                                '& .MuiMenuItem-root': {
                                    padding: '12px 16px', // Padding for menu items
                                    '&:hover': {
                                        backgroundColor: '#616161', // Hover effect
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
        </AppBar>
    );
};

export default Navbar;
