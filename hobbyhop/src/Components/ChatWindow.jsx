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

    useEffect(() => {
        // Define and set up the Firestore listener
        const q = query(collection(db, "messages"), orderBy("timestamp"));

        // Create an unsubscribe function
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const messages = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setMessages(messages);
        });

        // Set the userName
        const user = auth.currentUser;
        if (user) {
            setUserName(user.displayName || user.email);
        }

        // Cleanup function to unsubscribe from Firestore listener
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

    return (
        <div className="chat-window">
            <ChatHeader userName={userName} />
            <MessageList messages={messages} />
            <MessageInput onSendMessage={handleSendMessage} />
        </div>
    );
};

export default ChatWindow;
