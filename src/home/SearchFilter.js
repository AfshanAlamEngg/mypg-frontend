import React from 'react';
import { Container, TextField, Grid, Button, Box } from '@mui/material';

const SearchFilter = () => {
  return (
    <Container sx={{ my: 5 }}>
      <Box component="form">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <TextField fullWidth label="Location" placeholder="Enter city or area" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField fullWidth label="Property Type" select SelectProps={{ native: true }}>
              <option>Single Room</option>
              <option>Shared Room</option>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField fullWidth label="Price Range" type="number" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField fullWidth label="Move-in Date" type="date" InputLabelProps={{ shrink: true }} />
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Button variant="contained" color="primary" type="submit">
            Search
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SearchFilter;
