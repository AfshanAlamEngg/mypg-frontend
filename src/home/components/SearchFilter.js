import React from 'react';
import { Container, TextField, Grid, Button, Box, Typography } from '@mui/material';

const SearchFilter = () => {
  return (
    <Container sx={{ my: 8 }}>
      <Box
        component="form"
        sx={{
          backgroundColor: '#ffffff', // Clean white background for a professional look
          padding: '30px',
          borderRadius: '12px', // Slightly rounded corners
          boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.1)', // Enhanced shadow for depth
          border: '1px solid #e0e0e0' // Light border for a subtle outline
        }}
      >
        <Typography variant="h6" sx={{ mb: 3, textAlign: 'center', color: '#333' }}>
          Search for Your Ideal PG
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              label="Location"
              placeholder="Enter city or area"
              variant="outlined" // Outlined variant for a modern look
              size="small" // Smaller size for a more compact appearance
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              label="Property Type"
              select
              placeholder="Select Property Type"
              SelectProps={{ native: true }}
              variant="outlined"
              size="small"
            >
              {/* <option value="">Select Property Type</option> */}
              <option value="single-room">Single Room</option>
              <option value="shared-room">Shared Room</option>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              label="Price Range"
              type="number"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              fullWidth
              label="Move-in Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              size="small"
            />
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button variant="contained" color="primary" size="large" type="submit">
            Search
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SearchFilter;
