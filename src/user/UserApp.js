import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import Option01Page from './pages/Option01Page';
import Option02Page from './pages/Option02Page';
import Option03Page from './pages/Option03Page';

const UserApp = () => (
    <Routes>
        <Route path='' element={<WelcomePage />} />
        <Route path='manage-assets' element={<Option01Page />} />
        <Route path='invest-in-assets' element={<Option02Page />} />
        <Route path='join-group' element={<Option03Page />} />
    </Routes>
);

export default UserApp;

