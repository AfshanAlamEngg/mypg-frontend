import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, IconButton, Divider, Box } from '@mui/material';
import { Home as HomeIcon, Person as PersonIcon, Menu as MenuIcon, ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon, Business as BusinessIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const Sidebar = ({ open, setOpen }) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleSidebarToggle = () => {
        setOpen(!open);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <ListItem button component={Link} to="dashboard">
                    <ListItemIcon><HomeIcon style={{ color: 'white' }} /></ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button component={Link} to="profile">
                    <ListItemIcon><PersonIcon style={{ color: 'white' }} /></ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItem>
                <ListItem button component={Link} to="landlord">
                    <ListItemIcon><BusinessIcon style={{ color: 'white' }} /></ListItemIcon>
                    <ListItemText primary="Landlord" />
                </ListItem>
            </List>
            <Divider />
            <Box sx={{ display: 'flex', justifyContent: 'center', padding: 1 }}>
                <IconButton
                    color="inherit"
                    onClick={handleSidebarToggle}
                    sx={{ color: 'white' }}
                >
                    {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </Box>
        </div>
    );

    return (
        <>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ display: { sm: 'none' }, color: 'white', position: 'absolute', top: 16, left: 16 }}
            >
                <MenuIcon />
            </IconButton>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#333', color: 'white' }
                }}
            >
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                open={open}
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { 
                        boxSizing: 'border-box', 
                        width: open ? drawerWidth : 60, // Adjust width for collapsed state
                        backgroundColor: '#333', 
                        color: 'white', 
                        transition: 'width 0.3s' // Smooth transition
                    }
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default Sidebar;
