import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';

const GroupList = () => {
    // Sample data, replace with actual data from backend
    const groups = [
        { name: 'Group 1' },
        { name: 'Group 2' },
    ];

    return (
        <Box>
            <Typography variant='h6' gutterBottom>Joined Groups</Typography>
            <List>
                {groups.map((group, index) => (
                    <ListItem key={index}>{group.name}</ListItem>
                ))}
            </List>
        </Box>
    );
};

export default GroupList;

