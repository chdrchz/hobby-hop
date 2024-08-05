import React, { useState } from "react";
import '../Styles/SideNav.css';

function SideNav() {

    // setIsVisible is setting a specific state for conditional rendering
    const [isVisible, setIsVisible] = useState(true);

    function onExit() {
        // update state to hide side nav
        setIsVisible(false);
    }

    function onOpen() {
        // update state to show side nav
        setIsVisible(true);
    }

    // do not render anything if the side nav is not visible
    if (!isVisible) {
        return (
            <div className="menu">
                <svg onClick={onOpen} width="15" height="50" viewBox="0 0 19 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_63_16)">
                        <path d="M18.75 65.625C18.75 70.8008 14.5508 75 9.375 75C4.1992 75 0 70.8008 0 65.625C0 60.4492 4.1992 56.25 9.375 56.25C14.5508 56.25 18.75 60.4492 18.75 65.625ZM9.375 18.75C14.5508 18.75 18.75 14.5508 18.75 9.375C18.75 4.1992 14.5508 0 9.375 0C4.1992 0 0 4.1992 0 9.375C0 14.5508 4.1992 18.75 9.375 18.75ZM9.375 28.125C4.1992 28.125 0 32.3242 0 37.5C0 42.6758 4.1992 46.875 9.375 46.875C14.5508 46.875 18.75 42.6758 18.75 37.5C18.75 32.3242 14.5508 28.125 9.375 28.125Z" fill="black" />
                    </g>
                    <defs>
                        <clipPath id="clip0_63_16">
                            <rect width="18.75" height="75" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <svg width="20" height="20" viewBox="0 0 68 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_69_38)">
                        <path d="M35.0293 37.8939C24.3023 38.183 15.5763 30.6205 15.0023 19.7999C14.4515 9.39794 22.7367 0.557938 33.0643 0.0379376C37.8729 -0.290182 43.0135 1.53014 46.5953 4.72154C59.4903 16.2015 51.6305 37.0379 35.0293 37.8939Z" fill="black" />
                        <path d="M43.4821 66.007L7.17015 66.0109C1.19355 66.0149 -1.33765 66.3977 -0.0212528 59.6829C2.31465 47.7769 12.3577 38.5109 24.6427 37.9059C24.717 37.9019 24.7912 37.9019 24.8654 37.9019L40.9124 37.9059C50.9714 37.9019 59.3574 42.07 64.6744 50.9369C66.2838 53.6244 71.5728 65.0849 65.5533 65.9759C64.7525 66.093 63.8658 66.0149 63.0572 66.011L43.4821 66.007Z" fill="black" />
                    </g>
                    <defs>
                        <clipPath id="clip0_69_38">
                            <rect width="68" height="66.0401" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
        )
    }

    return (
        <div className="sidenav-container">
            <div className="nav-exit" id="navExit" onClick={onExit}>
                <svg width="15" height="15" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_63_12)">
                        <path d="M54.8725 40.7425L78.5325 17.0825C82.4425 13.1725 82.4425 6.8425 78.5325 2.9425C74.6225 -0.9575 68.2925 -0.9575 64.3925 2.9425L40.7325 26.6025L17.0725 2.9325C13.1625 -0.9775 6.8325 -0.9775 2.9325 2.9325C-0.9675 6.8425 -0.9675 13.1725 2.9325 17.0725L26.5925 40.7325L2.9325 64.3925C-0.9775 68.3025 -0.9775 74.6325 2.9325 78.5325C6.8425 82.4325 13.1725 82.4325 17.0725 78.5325L40.7325 54.8725L64.3925 78.5325C68.3025 82.4425 74.6325 82.4425 78.5325 78.5325C82.4325 74.6225 82.4325 68.2925 78.5325 64.3925L54.8725 40.7325V40.7425Z" fill="black" />
                    </g>
                    <defs>
                        <clipPath id="clip0_63_12">
                            <rect width="81.465" height="81.465" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div className="container">
                <a href="#"><h5>Home</h5></a>
                <a href="#"><h5>New & Trending</h5></a>
            </div>
            <div className="border">
            </div>
            <div className="accordion">
                <div className="accordion-item">
                    <div className="accordion-header">
                        <h5>Explore Hobby Hop</h5>
                        <svg width="15" height="15" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M60 3C60 2.2 59.69 1.45 59.12 0.880001C57.95 -0.289999 56.05 -0.289999 54.88 0.880001L33 22.76C32.23 23.53 31.14 23.97 30 23.97C28.86 23.97 27.77 23.53 27 22.76L5.12 0.880001C4.54 0.300001 3.77 0 3 0C2.23 0 1.46 0.290001 0.879999 0.880001C0.299999 1.47 0 2.2 0 3C0 3.8 0.309999 4.55 0.879999 5.12L22.76 27C24.69 28.93 27.27 30 30 30C32.73 30 35.31 28.93 37.24 27L59.12 5.12C59.69 4.55 60 3.8 60 3Z" fill="black" />
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
                        <h5>Explore Hobby Hop</h5>
                        <svg width="15" height="15" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M60 3C60 2.2 59.69 1.45 59.12 0.880001C57.95 -0.289999 56.05 -0.289999 54.88 0.880001L33 22.76C32.23 23.53 31.14 23.97 30 23.97C28.86 23.97 27.77 23.53 27 22.76L5.12 0.880001C4.54 0.300001 3.77 0 3 0C2.23 0 1.46 0.290001 0.879999 0.880001C0.299999 1.47 0 2.2 0 3C0 3.8 0.309999 4.55 0.879999 5.12L22.76 27C24.69 28.93 27.27 30 30 30C32.73 30 35.31 28.93 37.24 27L59.12 5.12C59.69 4.55 60 3.8 60 3Z" fill="black" />
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
                        <h5>Explore Hobby Hop</h5>
                        <svg width="15" height="15" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M60 3C60 2.2 59.69 1.45 59.12 0.880001C57.95 -0.289999 56.05 -0.289999 54.88 0.880001L33 22.76C32.23 23.53 31.14 23.97 30 23.97C28.86 23.97 27.77 23.53 27 22.76L5.12 0.880001C4.54 0.300001 3.77 0 3 0C2.23 0 1.46 0.290001 0.879999 0.880001C0.299999 1.47 0 2.2 0 3C0 3.8 0.309999 4.55 0.879999 5.12L22.76 27C24.69 28.93 27.27 30 30 30C32.73 30 35.31 28.93 37.24 27L59.12 5.12C59.69 4.55 60 3.8 60 3Z" fill="black" />
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
            </div>
        </div>
    )
}

function onClick() {

}

export default SideNav;