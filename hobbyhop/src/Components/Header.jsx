import React from "react";
import Button from "./Button";
import Search from "./Search";
import '../Styles/Header.css'

function Header() {
    return (
        <header>
            <h2 className="logo">h<span>o</span>bby h<span>o</span>p</h2>
            <Search children="search" />
            <nav>
                <Button color="gray">login</Button>
                <Button color="gray">sign up</Button>
            </nav>
        </header>
    )
}

export default Header;