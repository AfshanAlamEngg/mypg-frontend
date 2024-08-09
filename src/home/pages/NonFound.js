// src/components/NotFoundPage.js
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Container sx={{ textAlign: 'center', py: 10 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h1" sx={{ fontSize: '6rem', fontWeight: 'bold', color: '#004d40' }}>
          404
        </Typography>
        <Typography variant="h4" sx={{ mb: 2, color: '#004d40' }}>
          Page Not Found
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Oops! The page you are looking for does not exist.
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/">
          Go to Home
        </Button>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
