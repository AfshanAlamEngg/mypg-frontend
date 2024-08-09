import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material';

const listings = [
  { id: 1, title: 'PG in Area 1', description: 'Description 1', price: '00', image: '/path/to/image1.jpg' },
  { id: 2, title: 'PG in Area 2', description: 'Description 2', price: '00', image: '/path/to/image2.jpg' },
  { id: 3, title: 'PG in Area 3', description: 'Description 3', price: '50', image: '/path/to/image3.jpg' },
];

const FeaturedListings = () => {
  return (
    <Container sx={{ my: 5 }}>
      <Typography variant="h4" gutterBottom>
        Featured Listings
      </Typography>
      <Grid container spacing={4}>
        {listings.map(listing => (
          <Grid item xs={12} sm={6} md={4} key={listing.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={listing.image}
                alt={listing.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {listing.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {listing.description}
                </Typography>
                <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                  {listing.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturedListings;
