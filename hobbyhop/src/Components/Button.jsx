import React, { useState } from "react";

function Button({ onClick, color, label, children, svg }) {
  const [isHovered, setIsHovered] = useState(false);

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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px',
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label || children}
      {svg && <span>{svg}</span>}
    </button>
  );
}

export default Button;
