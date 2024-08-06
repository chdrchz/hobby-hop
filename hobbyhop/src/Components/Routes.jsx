// Routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from '../Pages/Landing';
import Feed from '../Pages/Feed';
import BunnyBuddies from '../Pages/BunnyBuddies';
import Explore from '../Pages/Explore';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/landing" element={<Landing />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/bunnybuddies" element={<BunnyBuddies />} />
      <Route path="/explore" element={<Explore />} />
    </Routes>
  );
};

export default AppRoutes;
