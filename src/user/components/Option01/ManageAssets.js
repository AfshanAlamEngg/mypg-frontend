import React from 'react';
import { Box, Typography } from '@mui/material';
import AssetCard from './AssetCard';

const ManageAssets = () => {
    // Sample data, replace with actual data from backend
    const assets = [
        { name: 'Asset 1', amount: '000', value: '200', description: 'Description of Asset 1' },
        { name: 'Asset 2', amount: '500', value: '800', description: 'Description of Asset 2' },
    ];

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant='h4' gutterBottom>Manage Assets</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {assets.map((asset, index) => (
                    <AssetCard key={index} asset={asset} />
                ))}
            </Box>
        </Box>
    );
};

export default ManageAssets;

