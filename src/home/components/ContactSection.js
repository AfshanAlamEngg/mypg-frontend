import React from 'react';
import { Container, TextField, Button, Typography, Box, Grid } from '@mui/material';

const ContactSection = () => {
  return (
    <Container sx={{ my: 8 }}>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4, color: '#004d40' }}>
        Contact Us
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              p: 3,
              borderRadius: '8px',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#ffffff',
            }}
          >
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              placeholder="Enter your name"
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              placeholder="Enter your email"
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              placeholder="Enter your message"
            />
            <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
              Submit
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
              p: 3,
              borderRadius: '8px',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#ffffff',
            }}
          >
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Address:</strong> 123 PG Street, City, Country
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Phone:</strong> +123 456 7890
            </Typography>
            <Typography variant="body1">
              <strong>Email:</strong> info@mypg.com
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ mt: 6 }}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom align="center" sx={{ mb: 2, color: '#004d40' }}>
            Find Us Here
          </Typography>
          <Box
            sx={{
              width: '100%',
              height: 300,
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            }}
          >
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.918108354807!2d-122.41941868468178!3d37.77492927975834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f7d8b8b7d%3A0x9cabe08a63d20b!2sSan%20Francisco%2C%20CA%2094111%2C%20USA!5e0!3m2!1sen!2sin!4v1634851034720!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            /> */}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactSection;
