import React, { useState } from 'react';

function Button({ onClick, color, label, children }) {
    const [isHovered, setIsHovered] = useState(false);

    // Inline styles for the button
    const buttonStyle = {
        backgroundColor: isHovered ? 'darkgray' : color,
        color: 'white',
        border: 'none',
        borderRadius: '25px',
        padding: '10px 20px',
        cursor: 'pointer',
        width: 'auto',
        transition: 'background-color 0.3s ease',
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