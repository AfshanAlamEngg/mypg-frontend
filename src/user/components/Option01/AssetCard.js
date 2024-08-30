import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const AssetCard = ({ asset }) => (
    <Card sx={{ maxWidth: 300 }}>
        <CardContent>
            <Typography variant='h6'>{asset.name}</Typography>
            <Typography>Amount: {asset.amount}</Typography>
            <Typography>Value: {asset.value}</Typography>
            <Typography>Description: {asset.description}</Typography>
        </CardContent>
    </Card>
);

export default AssetCard;

