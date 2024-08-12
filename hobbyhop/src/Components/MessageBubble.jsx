import React from 'react';
import '../Styles/MessageBubble.css';

const MessageBubble = ({ message, isSent, timestamp }) => {
    return (
        <div className={`message-bubble ${isSent ? 'sent' : 'received'}`}>
            <p>{message}</p>
            <span className="timestamp">{timestamp}</span>
        </div>
    );
};

export default MessageBubble;
