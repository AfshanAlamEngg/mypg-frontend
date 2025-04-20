import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, 
  // Box, 
  Menu, MenuItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My PG Website
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/services">Services</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>

          <IconButton
            edge="end"
            color="inherit"
            aria-controls="user-menu"
            aria-haspopup="true"
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="user-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose} component={Link} to="/login">Login</MenuItem>
            <MenuItem onClick={handleMenuClose} component={Link} to="/register">Register</MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
