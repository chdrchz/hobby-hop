// Routes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from '../Pages/Landing';
import Feed from '../Pages/Feed';
import BunnyBuddies from '../Pages/BunnyBuddies';
import Explore from '../Pages/Explore';
import NotFound from '../Pages/NotFound';
import UserProfile from '../Pages/UserProfile';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/bunnybuddies" element={<BunnyBuddies />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/profile" element={<UserProfile />} />
    </Routes>
  );
};

export default AppRoutes;
