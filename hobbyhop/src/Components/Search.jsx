import React from "react";
import '../Styles/Search.css'

function Search({ children }) {
    return (
        <input type="search" placeholder={children} className="searchField"></input>
    )
}

export default Search;