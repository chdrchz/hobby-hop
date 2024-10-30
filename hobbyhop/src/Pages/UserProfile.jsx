import React from "react";
import SideNav from "../Components/SideNav";
import Profile from "../Components/Profile";
import Footer from "../Components/Footer";
import "../Styles/UserProfile.css";

const UserProfile = () => {
  return (
    <div className="profile-container">
      <div className="side-nav-container">
        <SideNav />
      </div>
        <Profile />
        <Footer />
    </div>
  );
};

export default UserProfile;
