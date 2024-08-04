import React from "react";

function UserProfile() {
    return (
        <div class="profile-container">
            <div class="profile-header">
                <img src="profile-pic.jpg" alt="Profile Picture" />
                <div>
                    <h1>John Doe</h1>
                    <p>Web Developer</p>
                    <p>johndoe@example.com</p>
                </div>
            </div>
            <div class="profile-content">
                <div class="profile-details">
                    <h2>About Me</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae arcu nec odio pretium cursus.</p>
                    
                    <h2>Contact Information</h2>
                    <p>Phone: (123) 456-7890</p>
                    <p>Address: 123 Main St, Anytown, USA</p>
                </div>
                <div class="profile-activities">
                    <h2>Recent Activities</h2>
                    <div class="activity-item">
                        <h3>Activity Title 1</h3>
                        <p>Activity details or description goes here.</p>
                    </div>
                    <div class="activity-item">
                        <h3>Activity Title 2</h3>
                        <p>Activity details or description goes here.</p>
                    </div>
                    <div class="activity-item">
                        <h3>Activity Title 3</h3>
                        <p>Activity details or description goes here.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;