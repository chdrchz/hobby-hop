import React from 'react';
import '../Styles/ChatHeader.css';

const ChatHeader = ({ userName }) => {
  return (
    <div className="chat-header">
      <h2>{userName}</h2>
    </div>
  );
};

export default ChatHeader;