import React from "react";
import '../Styles/Button.css'

function Button({ children, color }) {
    return (
        <button style={{ backgroundColor: color }}>{children}</button>
    );
}

export default Button;