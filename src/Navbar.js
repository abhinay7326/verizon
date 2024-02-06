// Navbar.jsx
import React, { useState } from 'react';
import Homeage from './Homeage';
import Pricing from './Pricing';
import Product from './Product';
import './navbar.css'; // Import your CSS file

const Navbar = () => {
  const [selectedSection, setSelectedSection] = useState('homeage');

  const handleNavigation = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="navbar-container">
      <nav>
      <img style={{paddingRight:'500px'}} src="../verizon.png" height="70px" alt='veri'/>

        <ul className="navbar-list">
          <li>
            <a  style={{paddingLeft:'40px',paddingRight:'30px',paddingTop:'0px'}} href="#homeage" onClick={() => handleNavigation('homeage')}>
              Home
            </a>
          </li>
          <li>
            <a style={{paddingLeft:'40px',paddingRight:'30px'}} href="#pricing" onClick={() => handleNavigation('pricing')}>
              Pricing
            </a>
          </li>
          <li>
            <a style={{paddingLeft:'40px',paddingRight:'30px'}} href="#product" onClick={() => handleNavigation('product')}>
              Product
            </a>
          </li>
        </ul>
      </nav>

      <hr />

      {selectedSection === 'homeage' && <Homeage />}
      {selectedSection === 'pricing' && <Pricing />}
      {selectedSection === 'product' && <Product />}
    </div>
  );
};

export default Navbar;
