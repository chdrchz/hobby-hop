import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button"

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Landing</Link>
        
          <Button color="#43c5e9" className="special-button">landing</Button>
        </li>
        <li>
          <Link to="/new">Feed</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};

export default Navigation;
