import React from "react";
import savPic from "../assets/sav-pic.jpeg";


// This will eventually be from the database 
function UserProfile() {
    return (
        <div class="profile-container">
            <div className="profile-image">
                <img src={savPic} alt="Profile" style={{ width: '150px', height: '150px' }} />
            </div>
            <div className="profile-description">
                <div className="profile-bio">
                    <h3>Savanna Davis</h3>
                    <p> Hi, I am Savanna and I am so super excited to be making this app. </p>
                </div>
            </div>
            <div className="interests">
                <ul>
                    <li>Rollerskating</li>
                    <li>Reading</li>
                    <li>Video Games</li>
                </ul>
            </div>
        </div>
    )
}

export default UserProfile;