import React, { useState } from "react";
import '../Styles/BunnyBuddies.css';
import ThreeDSlider from '../Components/ThreeDSlider';
import ChatWindow from '../Components/ChatWindow'; 
import SideNav from "../Components/SideNav";

function BunnyBuddies() {
    const isBunnyBuddiesPage = true;

  return (
    <div className="bunnybuddies-container">
      <div className="content-container">
        <div className="header-container">
          <SideNav isBunnyBuddiesPage={isBunnyBuddiesPage}/>
        </div>
        <ThreeDSlider />
      </div>
      <ChatWindow /> 
    </div>
  );
}

export default BunnyBuddies;
