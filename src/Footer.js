// Footer.js
import React from 'react';
import './Footer.css'; // Import the external CSS file

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-item">
        <h1>Price is the price, guaranteed</h1>
        <p style={{fontSize:'20px'}}>So you don't have to worry about unexpected price hikes</p>
      </div>
      <div className="footer-item">
        <h1>Get up to $500 credit to help you switch</h1>
        <p style={{fontSize:'20px'}}>We'll help you cover early termination fees when you leave your current provider</p>
      </div>
      <div className="footer-item">
        <h1>No data caps or annual contracts</h1>
        <p style={{fontSize:'20px'}}>So you have the flexibility you deserve</p>
      </div>
      <div className="footer-item">
      <h1>Whole-Home Wi-Fi</h1>
      <p style={{fontSize:'20px'}}>Get a Wi-fi extender at no additional cost, so you can have fast reliable coverage</p>
    </div>
  
    </div>
  );
}

