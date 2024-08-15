import React, { useState, useEffect } from 'react';
import { collection, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../firebase/firebase-config.js';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import ChatHeader from './ChatHeader';
import '../Styles/ChatWindow.css';

const ChatWindow = () => {
    const [messages, setMessages] = useState([]);
    const [userName, setUserName] = useState("");
    const [isMinimized, setIsMinimized] = useState(false); // Add state for minimization

    useEffect(() => {
        const q = query(collection(db, "messages"), orderBy("timestamp"));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const messages = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setMessages(messages);
        });

        const user = auth.currentUser;
        if (user) {
            setUserName(user.displayName || user.email);
        }

        return () => unsubscribe();

    }, []);

    const handleSendMessage = async (messageText) => {
        try {
            await addDoc(collection(db, "messages"), {
                text: messageText,
                isSent: true,
                timestamp: new Date()
            });
        } catch (error) {
            console.error("Error sending message: ", error);
        }
    };

    const toggleMinimize = () => {
        setIsMinimized(!isMinimized); 
    };

    return (
        <div className={`chat-window ${isMinimized ? 'minimized' : ''}`}>
            {!isMinimized && <ChatHeader userName={userName} />}
            <MessageList messages={messages} />
            {!isMinimized && <MessageInput onSendMessage={handleSendMessage} />}
            <button className="minimize-button" onClick={toggleMinimize}>
                {isMinimized ? 'Expand' : 'Minimize'}
            </button>
        </div>
    );
};

export default ChatWindow;
