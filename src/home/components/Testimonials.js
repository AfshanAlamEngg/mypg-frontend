import React from 'react';
import { Container, Grid, Paper, Typography, Box } from '@mui/material';

const testimonials = [
  { id: 1, name: 'John Doe', feedback: 'This PG is awesome! Highly recommend it.' },
  { id: 2, name: 'Jane Smith', feedback: 'Comfortable and affordable accommodation.' },
  { id: 3, name: 'Sam Wilson', feedback: 'Great location and services.' },
];

const Testimonials = () => {
  return (
    <Box sx={{ backgroundColor: '#e0f7fa', py: 8 }}>
      <Container>
        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
          What Our Clients Say
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map(testimonial => (
            <Grid item xs={12} sm={6} md={4} key={testimonial.id}>
              <Paper 
                elevation={6} 
                sx={{ 
                  p: 3, 
                  borderRadius: '8px', 
                  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  backgroundColor: '#ffffff', // Set the paper background color
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 1 }}>
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                  "{testimonial.feedback}"
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
