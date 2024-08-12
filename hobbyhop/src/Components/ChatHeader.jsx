import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import '../Styles/ChatWindow.css';

const ChatWindow = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className={`chat-window ${isMinimized ? 'minimized' : ''}`}>
      <ChatHeader toggleMinimize={toggleMinimize} />
      {!isMinimized && (
        <>
          <MessageList />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default ChatWindow;