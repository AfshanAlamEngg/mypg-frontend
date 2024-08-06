// src/components/Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Dashboard, AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <Drawer variant="permanent">
            <List>
                <ListItem button component={Link} to="/dashboard">
                    <ListItemIcon><Dashboard /></ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItem>
                <ListItem button component={Link} to="/profile">
                    <ListItemIcon><AccountCircle /></ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;
