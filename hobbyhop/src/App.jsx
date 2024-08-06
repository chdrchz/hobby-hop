import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing";
import Feed from "./Pages/Feed";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/new" element={<Landing />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;