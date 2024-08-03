import React from "react";
import '../Styles/SideNav.css';

function SideNav() {
    return (
        <div className="sidenav-container">
            <div className="container">
                <a href="#"><h2>Home</h2></a>
                <a href="#"><h2>New & Trending</h2></a>
            </div>
            <div className="border">
            </div>
            <div className="accordion">
                <div className="accordion-item">
                    <h2 className="accordion-header">Explore Hobby Hop</h2>
                    <div className="accordion-content">
                        Content for Section 1
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">Learn Something New</h2>
                    <div className="accordion-content">
                        Content for Section 2
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">Hobby Buddies</h2>
                    <div className="accordion-content">
                        Content for Section 1
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNav;