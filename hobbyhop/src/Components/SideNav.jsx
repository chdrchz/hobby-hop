import React from "react";
import '../Styles/SideNav.css';

function SideNav() {
    return (
        <div className="sidenav-container">
            <div className="container">
                <a href="#"><h3>Home</h3></a>
                <a href="#"><h3>New & Trending</h3></a>
            </div>
            <div className="border">
            </div>
            <div className="accordion">
                <div className="accordion-item">
                    <div className="accordion-header">
                        <h3>Explore Hobby Hop</h3>
                        <svg width="30" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M80 38C80 37.2 79.69 36.45 79.12 35.88C77.95 34.71 76.05 34.71 74.88 35.88L53 57.76C52.23 58.53 51.14 58.97 50 58.97C48.86 58.97 47.77 58.53 47 57.76L25.12 35.88C24.54 35.3 23.77 35 23 35C22.23 35 21.46 35.29 20.88 35.88C20.3 36.47 20 37.2 20 38C20 38.8 20.31 39.55 20.88 40.12L42.76 62C44.69 63.93 47.27 65 50 65C52.73 65 55.31 63.93 57.24 62L79.12 40.12C79.69 39.55 80 38.8 80 38Z" fill="black" />
                        </svg>
                    </div>
                    <div className="accordion-content">
                        <div className="content-links">
                            <a href="#"><p>Most Popular</p></a>
                            <a href="#"><p>Near Me</p></a>
                            <a href="#"><p>View All</p></a>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <div className="accordion-header">
                        <h3 className="accordion-header">Learn Something New</h3>
                        <svg width="30" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M80 38C80 37.2 79.69 36.45 79.12 35.88C77.95 34.71 76.05 34.71 74.88 35.88L53 57.76C52.23 58.53 51.14 58.97 50 58.97C48.86 58.97 47.77 58.53 47 57.76L25.12 35.88C24.54 35.3 23.77 35 23 35C22.23 35 21.46 35.29 20.88 35.88C20.3 36.47 20 37.2 20 38C20 38.8 20.31 39.55 20.88 40.12L42.76 62C44.69 63.93 47.27 65 50 65C52.73 65 55.31 63.93 57.24 62L79.12 40.12C79.69 39.55 80 38.8 80 38Z" fill="black" />
                        </svg>
                    </div>
                    <div className="accordion-content">
                        Content for Section 2
                    </div>
                </div>
                <div className="accordion-item">
                    <h3 className="accordion-header">Hobby Buddies</h3>
                    <svg width="30" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M80 38C80 37.2 79.69 36.45 79.12 35.88C77.95 34.71 76.05 34.71 74.88 35.88L53 57.76C52.23 58.53 51.14 58.97 50 58.97C48.86 58.97 47.77 58.53 47 57.76L25.12 35.88C24.54 35.3 23.77 35 23 35C22.23 35 21.46 35.29 20.88 35.88C20.3 36.47 20 37.2 20 38C20 38.8 20.31 39.55 20.88 40.12L42.76 62C44.69 63.93 47.27 65 50 65C52.73 65 55.31 63.93 57.24 62L79.12 40.12C79.69 39.55 80 38.8 80 38Z" fill="black" />
                    </svg>
                    <div className="accordion-content">
                        Content for Section 1
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNav;