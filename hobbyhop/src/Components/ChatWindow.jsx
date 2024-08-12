// /src/components/ChatWindow.jsx

import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase/firebase_config";
import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import "../Styles/ChatWindow.css";

function ChatWindow() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const user = auth.currentUser;

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesData = [];
      querySnapshot.forEach((doc) => {
        messagesData.push(doc.data());
      });
      setMessages(messagesData);
    });

    return () => unsubscribe();
  }, []);

  const handleSend = async () => {
    if (message.trim() === "") return;

    try {
      await addDoc(collection(db, "messages"), {
        text: message,
        uid: user.uid,
        timestamp: new Date(),
      });
      setMessage("");
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Chat with {user.displayName}</h2>
      </div>
      <div className="messages-display">
        {messages.map((msg, index) => (
          <div key={index} className={msg.uid === user.uid ? "message-out" : "message-in"}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default ChatWindow;
