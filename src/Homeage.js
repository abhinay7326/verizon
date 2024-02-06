//import React from 'react'
import React, { useState, useEffect } from 'react';
import Form from './Form';
import Footer from './Footer';
import './ChatOption.css';

export default function Homepage() {
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    
    const timeoutId = setTimeout(() => {
      setShowChat(true);
    }, 10000); //10sec

    
    return () => clearTimeout(timeoutId);
  }, []); 

  return (
    <div>
      <Form />
      <Content />
      <Footer />

      {showChat && <ChatOption />}
    </div>
  );
}

function Content() {
  return (
    <div className="Container">
      <div className="ContentWrapper">
        <h1 className="ContentTitle">
          Switch to 5G Home Internet. Plans start at $35/mo
        </h1>
        <h4 className="ContentTitle" style={{ fontSize: '30px' }}>
          The price is the price, guaranteed. With no hidden fees or equipment charges
        </h4>
      </div>
      <div>
        <img className="ContentImage" src="../box.png" alt="veri" height="400px" width="500px" />
      </div>
    </div>
  );
}

const ChatOption = () => {
  return (
    <div className="chat-option-container">
      <div className="chat-option">
        <p>Need assistance? Chat with us now!</p>
        
      </div>
    </div>
  );
};

