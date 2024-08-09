import React, { useState } from 'react';

function Button({ onClick, color, label, children }) {
    const [isHovered, setIsHovered] = useState(false);

    // Inline styles for the button
    const buttonStyle = {
        backgroundColor: isHovered ? '#7c8a43' : color,
        color: 'black',
        border: 'none',
        borderRadius: '25px',
        padding: '10px 20px',
        cursor: 'pointer',
        width: 'auto',
        transition: 'background-color 0.3s ease',
        fontSize: '1.5rem',
        fontFamily: 'Comfortaa, sans-serif',
    };

    return (
        <button
            style={buttonStyle}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {label || children}
        </button>
    );
}

export default Button;