import React from "react";
import '../Styles/Header.css';
import Hobbyhop from '../Assets/Hobbyhop.svg';

function Header() {
    return (
        <header className="Header">
            <div className="hobbyhoplogo1">
               <img src={Hobbyhop} alt="HobbyhopLogo" />
            </div>
            <nav>
                <svg width="35" height="35" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50.5 3C24.3 3 3 24.3 3 50.5C3 76.7 24.3 98 50.5 98C76.7 98 98 76.7 98 50.5C98 24.3 76.7 3 50.5 3ZM50.5 30.2C58.7 30.2 65.4 36.9 65.4 45.1C65.4 53.3 58.7 60 50.5 60C42.3 60 35.6 53.3 35.6 45.1C35.6 36.9 42.3 30.2 50.5 30.2ZM24.5 79.3V77.1C24.5 70.8 29.6 65.6 36 65.6H65C71.3 65.6 76.5 70.7 76.5 77.1V79.3C69.6 85.5 60.5 89.3 50.5 89.3C40.5 89.3 31.4 85.5 24.5 79.3Z" fill="black" />
                </svg>
            </nav>
        </header>
    )
}

export default Header;