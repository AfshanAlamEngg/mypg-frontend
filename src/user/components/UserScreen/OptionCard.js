import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const OptionCard = ({ title, onClick, backgroundColor = 'primary.main', textColor = 'white' }) => (
    <Card 
        sx={{ 
            width: 350,  // Increased width
            height: 200, // Increased height
            backgroundColor: backgroundColor,
            color: textColor,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: 3, // Adding some shadow for a 3D effect
        }}
    >
        <CardContent>
            <Typography 
                variant='h5' 
                sx={{ 
                    marginBottom: 2, 
                    fontWeight: 'bold',
                    textAlign: 'center'
                }}
            >
                {title}
            </Typography>
            <Button 
                variant='contained' 
                color='secondary' 
                onClick={onClick}
                sx={{ padding: '8px 16px' }}
            >
                Go
            </Button>
        </CardContent>
    </Card>
);

export default OptionCard;
