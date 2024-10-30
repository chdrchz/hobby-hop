import React, { useState } from 'react';
import '../Styles/MessageInput.css'; // Ensure you create this CSS file

const MessageInput = ({ onSendMessage }) => {
    const [inputText, setInputText] = useState('');

    const handleChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSend = () => {
        if (inputText.trim()) {
            onSendMessage(inputText);
            setInputText('');
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <div className="message-input">
            <input
                type="text"
                value={inputText}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default MessageInput;
