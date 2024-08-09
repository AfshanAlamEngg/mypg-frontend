import React from 'react';
import { Container, Grid, Typography, Paper, Box } from '@mui/material';
import { FaSearch, FaHome, FaPhone } from 'react-icons/fa';

const steps = [
  { icon: <FaSearch />, title: 'Search', description: 'Find PGs in your desired location.' },
  { icon: <FaHome />, title: 'View Listings', description: 'See property details and photos.' },
  { icon: <FaPhone />, title: 'Contact Landlord', description: 'Get in touch with the landlord.' },
];

const HowItWorks = () => {
  return (
    <Container sx={{ my: 8 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: 6 }}>
        How It Works
      </Typography>
      <Grid container spacing={4}>
        {steps.map((step, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Paper elevation={3} sx={{ p: 3, textAlign: 'center', borderRadius: '12px' }}>
              <Box sx={{ fontSize: '3rem', color: 'primary.main', mb: 2 }}>
                {step.icon}
              </Box>
              <Typography variant="h6" gutterBottom>
                {step.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {step.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HowItWorks;
