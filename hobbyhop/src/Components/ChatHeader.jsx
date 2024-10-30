import React from 'react';
import '../Styles/ChatHeader.css';

const ChatHeader = ({ userName, userProfileImage, onToggleMinimize }) => (
  <div className="chat-header">
      <img 
          src={userProfileImage} 
          alt={`${userName}'s profile`} 
      />
  </div>
);

export default ChatHeader;
