import React from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#004d40', color: 'white', py: 4 }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 4, md: 6 } }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
              <li><RouterLink to="/home" style={{ color: 'white', textDecoration: 'none' }}>Home</RouterLink></li>
              <li><RouterLink to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</RouterLink></li>
              <li><RouterLink to="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</RouterLink></li>
              <li><RouterLink to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</RouterLink></li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
              <li><RouterLink to="#facebook" style={{ color: 'white', textDecoration: 'none' }}>Facebook</RouterLink></li>
              <li><RouterLink to="#twitter" style={{ color: 'white', textDecoration: 'none' }}>Twitter</RouterLink></li>
              <li><RouterLink to="#instagram" style={{ color: 'white', textDecoration: 'none' }}>Instagram</RouterLink></li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Services
            </Typography>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
              <li><RouterLink to="/service1" style={{ color: 'white', textDecoration: 'none' }}>Service 1</RouterLink></li>
              <li><RouterLink to="/service2" style={{ color: 'white', textDecoration: 'none' }}>Service 2</RouterLink></li>
              <li><RouterLink to="/service3" style={{ color: 'white', textDecoration: 'none' }}>Service 3</RouterLink></li>
              <li><RouterLink to="/service4" style={{ color: 'white', textDecoration: 'none' }}>Service 4</RouterLink></li>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Subscribe
            </Typography>
            <Box component="form" noValidate autoComplete="off">
              <TextField
                label="Enter your email"
                variant="outlined"
                fullWidth
                sx={{ mb: 2, bgcolor: 'white', borderRadius: 1 }}
              />
              <Button variant="contained" color="primary" fullWidth>
                Subscribe
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" paragraph>
              Address: 123 Main Street, City, Country
            </Typography>
            <Typography variant="body2" paragraph>
              Phone: +123 456 7890
            </Typography>
            <Typography variant="body2" paragraph>
              Email: <Link color="inherit" href="mailto:info@mypg.com">info@mypg.com</Link>
            </Typography>
          </Grid>
        </Grid>
        <Box textAlign="center" sx={{ mt: 3 }}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            &copy; {new Date().getFullYear()} My PG. All Rights Reserved.
          </Typography>
          <Typography variant="body2">
            <Link color="inherit" component={RouterLink} to="/privacy-policy" sx={{ mx: 1 }}>
              Privacy Policy
            </Link>
            |
            <Link color="inherit" component={RouterLink} to="/terms-of-service" sx={{ mx: 1 }}>
              Terms of Service
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
