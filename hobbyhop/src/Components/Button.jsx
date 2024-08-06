import React from "react";
import "../Styles/Button.css";

function Button({ children, color, className }) {
  const gradientStyle = {
    background: `linear-gradient(45deg, ${color}, #ffffff)`,
    color: '#fff',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
  };

  return (
    <button style={gradientStyle} className={`custom-button ${className}`}>
      {children}
    </button>
  );
}

export default Button;