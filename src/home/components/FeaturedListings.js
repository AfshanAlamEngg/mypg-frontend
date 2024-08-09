import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, CardActions, Typography, Button, Box } from '@mui/material';

const listings = [
  { id: 1, title: 'PG in Area 1', description: 'Description 1', price: '$1000', image: '/public/images/pg-01.jpg' },
  { id: 2, title: 'PG in Area 2', description: 'Description 2', price: '$1200', image: '/path/to/image2.jpg' },
  { id: 3, title: 'PG in Area 3', description: 'Description 3', price: '$1500', image: '/path/to/image3.jpg' },
];

const FeaturedListings = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#e0f2f1', // Light blue-gray background similar to HeroSection
        py: 8,
      }}
    >
      <Container>
        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 6 }}>
          Featured Listings
        </Typography>
        <Grid container spacing={4}>
          {listings.map(listing => (
            <Grid item xs={12} sm={6} md={4} key={listing.id}>
              <Card sx={{ borderRadius: '12px', boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.1)' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={listing.image}
                  alt={listing.title}
                  sx={{ borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}
                />
                <CardContent>
                  <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
                    {listing.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {listing.description}
                  </Typography>
                  <Typography variant="h6" color="primary" sx={{ mt: 2, fontWeight: 'bold' }}>
                    {listing.price}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', mb: 2 }}>
                  <Button size="small" color="primary" variant="outlined">
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedListings;
