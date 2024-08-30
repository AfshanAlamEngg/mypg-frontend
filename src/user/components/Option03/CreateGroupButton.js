import React from 'react';
import { Button, Box } from '@mui/material';

const CreateGroupButton = () => {
    return (
        <Box sx={{ mb: 2 }}>
            <Button variant="contained" color="primary">
                Create Group
            </Button>
        </Box>
    );
};

export default CreateGroupButton;
