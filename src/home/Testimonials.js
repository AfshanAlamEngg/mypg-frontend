import React from 'react';
import { Container, Grid, Paper, Typography, Box } from '@mui/material';

const testimonials = [
  { id: 1, name: 'John Doe', feedback: 'This PG is awesome! Highly recommend it.' },
  { id: 2, name: 'Jane Smith', feedback: 'Comfortable and affordable accommodation.' },
  { id: 3, name: 'Sam Wilson', feedback: 'Great location and services.' },
];

const Testimonials = () => {
  return (
    <Container sx={{ my: 5 }}>
      <Typography variant="h4" gutterBottom>
        Testimonials
      </Typography>
      <Grid container spacing={4}>
        {testimonials.map(testimonial => (
          <Grid item xs={12} sm={6} md={4} key={testimonial.id}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                {testimonial.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {testimonial.feedback}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Testimonials;
