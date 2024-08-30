import React from 'react';
import { Box, Typography } from '@mui/material';
import CreateGroupButton from './CreateGroupButton';
import GroupList from './GroupList';

const JoinGroup = () => {
    return (
        <Box sx={{ p: 3, display: 'flex', gap: 2 }}>
            <Box sx={{ width: '30%' }}>
                <CreateGroupButton />
                <GroupList />
            </Box>
            <Box sx={{ width: '70%' }}>
                {/* Display group details here */}
                <Typography variant="h6" gutterBottom>
                    Select a group to see details
                </Typography>
            </Box>
        </Box>
    );
};

export default JoinGroup;
