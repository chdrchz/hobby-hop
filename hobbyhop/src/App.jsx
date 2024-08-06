import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import Feed from "./Pages/Feed";
import BunnyBuddies from "./Pages/BunnyBuddies";
import Explore from "./Pages/Explore";
import UserProfile from "./Components/UserProfile";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/feed" element={<Feed />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/bunnybuddies" element={<BunnyBuddies />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/userprofile" element={<UserProfile />} />
      
      </Routes>
    </Router>
  );
}

export default App;