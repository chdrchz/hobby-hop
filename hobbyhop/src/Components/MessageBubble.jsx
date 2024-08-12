import React from 'react';
import '../Styles/MessageBubble.css';

const MessageBubble = ({ message, isSent, timestamp }) => {
    // Convert Firestore Timestamp to a JavaScript Date object and format to HH:MM
    const formatTimestamp = (timestamp) => {
        if (!timestamp) return '';
        const date = timestamp.toDate();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    return (
        <div className={`message-bubble ${isSent ? 'sent' : 'received'}`}>
            <p>{message}</p>
            <span className="timestamp">{formatTimestamp(timestamp)}</span>
        </div>
    );
};

export default MessageBubble;
