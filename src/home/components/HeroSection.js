import React from 'react';
import { Container, Typography, 
  // Button, 
  Box } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#004d40', // A deep teal color for a professional look
        color: '#ffffff', // White text for good contrast
        padding: '100px 0',
        textAlign: 'center'
      }}
    >
      <Container>
        <Typography variant="h2" gutterBottom>
          My PG
        </Typography>
        {/* <Typography variant="h3" gutterBottom>
          Find Your Perfect PG Accommodation
        </Typography> */}
        <Typography variant="h5" paragraph>
          Your comfort is our priority. Discover the best PGs around you.
        </Typography>
        {/* <Button variant="contained" color="primary" size="large">
          Get Started
        </Button> */}
      </Container>
    </Box>
  );
};

export default HeroSection;
