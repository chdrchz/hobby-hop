import React from "react";
import savPic from "../assets/sav-pic.jpeg";
import '../Styles/UserProfile.css';


// This will eventually be from the database 
function UserProfile() {
    return (
        <div class="profile-container">
            <div className="profile-image">
                <img src={savPic} alt="Profile" style={{ width: '150px', height: '150px' }} />
            </div>
            <div className="profile-description">
                <div className="profile-bio">
                    <div className="about-me">
                        <div className="name-and-pronouns">
                            <h3 className="profile-heading">Savanna Davis</h3>
                            <h6>she/her</h6>
                        </div>
                        <p className="profile-heading">Software Developer</p>
                    </div>
                </div>
                <div className="description">
                    <h4 className="profile-heading">About Me</h4>
                    <p className="description-paragraph"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
            <div className="interests">
                <div className="interest-add">
                    <h4 className="interest-heading profile-heading">What I Like</h4>
                    <svg width="15" height="15" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_66_29)">
                            <path d="M75 32.8125H53.125C52.1875 32.8125 51.5625 32.1875 51.5625 31.25V9.375C51.5625 4.2188 47.3437 0 42.1875 0C37.0313 0 32.8125 4.2188 32.8125 9.375V31.25C32.8125 32.1875 32.1875 32.8125 31.25 32.8125H9.375C4.2188 32.8125 0 37.0313 0 42.1875C0 47.3437 4.2188 51.5625 9.375 51.5625H31.25C32.1875 51.5625 32.8125 52.1875 32.8125 53.125V75C32.8125 80.1562 37.0313 84.375 42.1875 84.375C47.3437 84.375 51.5625 80.1562 51.5625 75V53.125C51.5625 52.1875 52.1875 51.5625 53.125 51.5625H75C80.1562 51.5625 84.375 47.3437 84.375 42.1875C84.375 37.0313 80.1562 32.8125 75 32.8125Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_66_29">
                                <rect width="84.375" height="84.375" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <ul className="interest-list">
                    <li className="interest-tag"><p>Rollerskating</p></li>
                    <li className="interest-tag"><p>Video Gaming</p></li>
                    <li className="interest-tag"><p>Reading</p></li>
                </ul>
            </div>
        </div>
    )
}

export default UserProfile;