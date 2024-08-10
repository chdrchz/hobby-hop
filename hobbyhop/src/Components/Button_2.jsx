import React, { useState } from "react";

function Button({ onClick, label, children, svg }) {
  const [isHovered, setIsHovered] = useState(false);

  // Inline styles for the button
  const buttonStyle = {
    backgroundColor: isHovered ? "#7c8a43" : 'transparent',
    backgroundImage: isHovered ? '' : 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(52,9,30,1) 0%, rgba(21,27,37,1) 100%)',
    color: "white",
    border: "1px solid white",
    borderRadius: "25px",
    padding: "10px 20px",
    cursor: "pointer",
    width: "auto",
    transition: "background-color 0.3s ease",
    fontSize: "1.1rem",
    fontFamily: "Comfortaa, sans-serif",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {svg && <span>{svg}</span>}
      {label || children}
    </button>
  );
}

export default Button;