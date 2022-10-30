import React from 'react';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <div className="Navbar">
      <div className="logo">
        <button>Rush</button>
      </div>
      <div id="nav">
        <button id="links">Home</button>
        <button id="links">Products</button>
        <button id="links">Contact Us</button>
        <button>
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
