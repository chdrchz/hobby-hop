import React, { useState, useEffect } from "react";

function Button({ onClick, label, color, children, svg, isBunnyBuddiesPage }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth   
 < 1000); // Adjust breakpoint as needed
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);   

  }, []);

  // Inline styles for the button
  const buttonStyle = {
    backgroundColor: isHovered ? "#7c8a43" : color,
    color: "black",
    border: "none",
    borderRadius: "25px",
    padding: "10px 20px",
    cursor: "pointer",
    width: "auto",
    transition: "background-color 0.3s ease",
    fontSize: "1.1rem",
    fontFamily: "Comfortaa, sans-serif",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isSmallScreen && svg && <span>{svg}</span>}
      {!isBunnyBuddiesPage && children}
    </button>
  );
}

export default Button;
