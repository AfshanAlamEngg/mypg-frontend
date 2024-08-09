import React from 'react';
import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const benefits = [
  { id: 1, title: 'Affordable', description: 'Our PGs are budget-friendly without compromising on quality.' },
  { id: 2, title: 'Convenient Locations', description: 'All PGs are located in prime areas with easy access to public transport.' },
  { id: 3, title: 'Quality Amenities', description: 'Enjoy high-quality amenities and services.' },
];

const Benefits = () => {
  return (
    <Container sx={{ my: 5 }}>
      <Typography variant="h4" gutterBottom>
        Why Choose Us?
      </Typography>
      <Grid container spacing={4}>
        {benefits.map(benefit => (
          <Grid item xs={12} sm={6} md={4} key={benefit.id}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Box display="flex" alignItems="center">
                <CheckCircle color="primary" />
                <Box sx={{ ml: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {benefit.description}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Benefits;
