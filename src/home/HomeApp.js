import React from 'react';
// import { Container, Box } from '@mui/material';
import { Routes, Route, 
  // Link 
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';


const HomeApp = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
  );
};

export default HomeApp;
