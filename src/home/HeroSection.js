import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(/path/to/image.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '100px 0',
        textAlign: 'center'
      }}
    >
      <Container>
        <Typography variant="h2" gutterBottom>
          Find Your Perfect PG Accommodation
        </Typography>
        <Typography variant="h5" paragraph>
          Your comfort is our priority. Discover the best PGs around you.
        </Typography>
        <Button variant="contained" size="large" color="primary">
          Get Started
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
