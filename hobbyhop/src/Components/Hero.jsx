import React from "react";
import "../Styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="frame">
        <img className="humaaans-study" alt="Humaaans study" src="images/Humaaans.jpg" />
      </div>
      <div className="div">
        <p className="HOP-INTO-WHAT-YOU">
          <span className="text-wrapper">HOP</span>
          <span className="span"> INTO WHAT YOU </span>
          <span className="text-wrapper">LOVE</span>
        </p>
        <div className="text-wrapper-2">with</div>
        <div className="friends-family-wrapper">
          <p className="friends-family">
            friends, family, roommates, strangers,&nbsp;&nbsp;(this could be a carousel that rotates)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
