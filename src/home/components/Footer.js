import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 3 }}>
      <Container>
        <Typography variant="body1">
          &copy; {new Date().getFullYear()} My PG. All rights reserved.
        </Typography>
        <Typography variant="body2">
          <Link color="inherit" href="#">
            Privacy Policy
          </Link> |{' '}
          <Link color="inherit" href="#">
            Terms of Service
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
