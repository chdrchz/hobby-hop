import React from 'react';
import MessageBubble from './MessageBubble';
import '../Styles/MessageList.css';

const MessageList = ({ messages }) => {
    return (
        <div className="message-list">
            {messages.map((msg, index) => (
                <MessageBubble 
                    key={index} 
                    message={msg.text} 
                    isSent={msg.isSent} 
                    timestamp={msg.timestamp} 
                />
            ))}
        </div>
    );
};

export default MessageList;
