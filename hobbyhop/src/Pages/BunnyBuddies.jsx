import React from "react";
import Header from '../Components/Header';
import '../Styles/BunnyBuddies.css';
import ThreeDSlider from '../Components/ThreeDSlider';
import ChatWindow from '../Components/ChatWindow'; 

function BunnyBuddies() {
    return (
        <div className="bunnybuddies-container">
            <div className="content-container">
                <Header />
                <ThreeDSlider />
            </div>
            <ChatWindow /> 
        </div>
    )
}

export default BunnyBuddies;
