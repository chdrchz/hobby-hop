import React from "react";
import Button from "./Button";
import Search from "./Search";
import '../Styles/Header.css'

function Header() {
    return (
        <header>
            <h2 className="logo">h<span id="span-blue">o</span>bby h<span id="span-orange">o</span>p</h2>
            <Search children="search" />
            <nav>
                <Button color="#FF773E">login</Button>
                <Button color="#00CDCD">sign up</Button>
            </nav>
        </header>
    )
}

export default Header;