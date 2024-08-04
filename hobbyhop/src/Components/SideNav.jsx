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
            <div className="menu" onClick={onOpen}>
                <svg width="50" height="50" viewBox="0 0 220 763" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_29_6)">
                    <path d="M109.51 0C139.65 0 167.04 12.29 186.89 32.13C206.75 51.91 219.02 79.29 219.02 109.52C219.02 139.75 206.75 167.13 186.93 186.95C164.59 207.56 140.39 219.04 109.51 219.04C79.37 219.04 51.98 206.75 32.13 186.91C12.27 167.13 0 139.75 0 109.52C0 79.29 12.27 51.91 32.09 32.09C54.43 11.48 78.63 0 109.51 0ZM109.51 542.98C139.65 542.98 167.04 555.27 186.89 575.11C206.75 594.89 219.02 622.27 219.02 652.5C219.02 682.73 206.75 710.11 186.93 729.93C164.59 750.54 140.39 762.02 109.51 762.02C79.37 762.02 51.98 749.73 32.13 729.89C12.27 710.11 0 682.73 0 652.5C0 622.27 12.27 594.89 32.09 575.07C54.43 554.46 78.63 542.98 109.51 542.98ZM157.01 604.95C144.92 592.81 128.12 585.32 109.51 585.32C91.37 585.32 74.94 592.44 62.93 604.01C49.69 618.11 42.34 632.76 42.34 652.5C42.34 671.06 49.87 687.87 62.01 700.01C74.1 712.19 90.9 719.68 109.51 719.68C127.65 719.68 144.08 712.56 156.09 700.99C169.33 686.89 176.68 672.24 176.68 652.5C176.68 633.94 169.15 617.13 157.01 604.95ZM109.51 271.49C139.65 271.49 167.04 283.78 186.89 303.62C206.75 323.4 219.02 350.78 219.02 381.01C219.02 409.82 206.97 439.96 185.64 459.63C165.9 478.74 139.02 490.53 109.51 490.53C79.37 490.53 51.98 478.24 32.13 458.4C12.27 438.62 0 411.24 0 381.01C0 350.78 12.27 323.4 32.09 303.58C54.43 282.97 78.63 271.49 109.51 271.49ZM157.01 333.46C144.92 321.32 128.12 313.83 109.51 313.83C91.37 313.83 74.94 320.95 62.93 332.52C49.69 346.62 42.34 361.27 42.34 381.01C42.34 399.57 49.87 416.38 62.01 428.52C74.1 440.7 90.9 448.19 109.51 448.19C127.65 448.19 144.08 441.07 156.09 429.5C169.33 415.4 176.68 400.75 176.68 381.01C176.68 362.45 169.15 345.64 157.01 333.46ZM157.01 61.97C144.92 49.83 128.12 42.34 109.51 42.34C91.37 42.34 74.94 49.46 62.93 61.03C49.69 75.13 42.34 89.78 42.34 109.52C42.34 128.08 49.87 144.89 62.01 157.03C74.1 169.21 90.9 176.7 109.51 176.7C127.65 176.7 144.08 169.58 156.09 158.01C169.33 143.91 176.68 129.26 176.68 109.52C176.68 90.96 169.15 74.15 157.01 61.97Z" fill="black"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_29_6">
                    <rect width="219.02" height="762.02" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </div>
        )
    }

    return (
        <div className="sidenav-container">
            <div className="nav-exit" id="navExit" onClick={onExit}>
                <svg width="15" height="15" viewBox="0 0 66 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_26_2)">
                    <path d="M40.1573 31.2663L64.1643 8.63933C66.1733 6.74533 66.2673 3.58033 64.3733 1.57133C62.4783 -0.436669 59.3153 -0.530671 57.3053 1.36233L32.8673 24.3953L8.42933 1.36133C6.41933 -0.53267 3.25633 -0.438671 1.36133 1.57033C-0.53267 3.58033 -0.438671 6.74433 1.57033 8.63833L25.5773 31.2653L1.57033 53.8943C-0.438671 55.7893 -0.53267 58.9533 1.36133 60.9623C2.34533 62.0063 3.67133 62.5323 5.00133 62.5323C6.23133 62.5323 7.46433 62.0813 8.43033 61.1713L32.8673 38.1383L57.3053 61.1713C58.2713 62.0813 59.5033 62.5323 60.7343 62.5323C62.0633 62.5323 63.3903 62.0053 64.3743 60.9623C66.2683 58.9523 66.1743 55.7883 64.1653 53.8943L40.1573 31.2663Z" fill="black"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_26_2">
                    <rect width="65.7357" height="62.5323" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </div>
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
                        <svg width="15" height="15" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M60 3C60 2.2 59.69 1.45 59.12 0.880001C57.95 -0.289999 56.05 -0.289999 54.88 0.880001L33 22.76C32.23 23.53 31.14 23.97 30 23.97C28.86 23.97 27.77 23.53 27 22.76L5.12 0.880001C4.54 0.300001 3.77 0 3 0C2.23 0 1.46 0.290001 0.879999 0.880001C0.299999 1.47 0 2.2 0 3C0 3.8 0.309999 4.55 0.879999 5.12L22.76 27C24.69 28.93 27.27 30 30 30C32.73 30 35.31 28.93 37.24 27L59.12 5.12C59.69 4.55 60 3.8 60 3Z" fill="black"/>
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
                        <h3>Explore Hobby Hop</h3>
                        <svg width="15" height="15" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M60 3C60 2.2 59.69 1.45 59.12 0.880001C57.95 -0.289999 56.05 -0.289999 54.88 0.880001L33 22.76C32.23 23.53 31.14 23.97 30 23.97C28.86 23.97 27.77 23.53 27 22.76L5.12 0.880001C4.54 0.300001 3.77 0 3 0C2.23 0 1.46 0.290001 0.879999 0.880001C0.299999 1.47 0 2.2 0 3C0 3.8 0.309999 4.55 0.879999 5.12L22.76 27C24.69 28.93 27.27 30 30 30C32.73 30 35.31 28.93 37.24 27L59.12 5.12C59.69 4.55 60 3.8 60 3Z" fill="black"/>
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
                        <h3>Explore Hobby Hop</h3>
                        <svg width="15" height="15" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M60 3C60 2.2 59.69 1.45 59.12 0.880001C57.95 -0.289999 56.05 -0.289999 54.88 0.880001L33 22.76C32.23 23.53 31.14 23.97 30 23.97C28.86 23.97 27.77 23.53 27 22.76L5.12 0.880001C4.54 0.300001 3.77 0 3 0C2.23 0 1.46 0.290001 0.879999 0.880001C0.299999 1.47 0 2.2 0 3C0 3.8 0.309999 4.55 0.879999 5.12L22.76 27C24.69 28.93 27.27 30 30 30C32.73 30 35.31 28.93 37.24 27L59.12 5.12C59.69 4.55 60 3.8 60 3Z" fill="black"/>
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